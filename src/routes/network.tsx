import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ACTORS,
  RELATIONSHIPS,
  STAKEHOLDER_COLORS,
  STAKEHOLDER_LABEL,
  REL_CATEGORIES,
  type Actor,
  type Relationship,
} from "../lib/data";
import { useLang } from "../lib/i18n";
import { LayerGlyph } from "../components/glyphs";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Network — Jingwei (经纬)" },
      {
        name: "description",
        content:
          "Force-directed graph of verified institutional relationships among China-based AI governance ecosystem actors.",
      },
    ],
  }),
  component: NetworkPage,
  ssr: false,
});

interface GraphNode {
  id: string;
  actor: Actor;
  x?: number;
  y?: number;
}
interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
  rel: Relationship;
}

function NetworkPage() {
  const { t, lang } = useLang();
  const [Graph, setGraph] = useState<any>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [panelOpen, setPanelOpen] = useState(true);
  const [showUnconnected, setShowUnconnected] = useState(false);
  const [hoverLink, setHoverLink] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<any>(null);

  useEffect(() => {
    let cancelled = false;
    import("react-force-graph-2d").then((mod) => {
      if (!cancelled) setGraph(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const r = containerRef.current.getBoundingClientRect();
        setSize({ w: r.width, h: r.height });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [Graph]);

  const allActors = useMemo(() => ACTORS, []);
  const allIds = useMemo(() => new Set(allActors.map((a) => a.id)), [allActors]);

  const eligibleRels = useMemo(
    () => RELATIONSHIPS.filter((r) => allIds.has(r.source) && allIds.has(r.target)),
    [allIds],
  );

  const GROUPS: { key: string; label: string; match: (a: Actor) => boolean }[] = [
    {
      key: "government",
      label: "Government",
      match: (a) => a.layer !== "bridge" && a.category.startsWith("Government agency"),
    },
    {
      key: "research",
      label: "Research",
      match: (a) =>
        a.layer !== "bridge" &&
        (a.category.startsWith("Research institute") ||
          a.category.startsWith("Research & talent institution")),
    },
    {
      key: "company",
      label: "Company",
      match: (a) =>
        a.layer !== "bridge" && (a.category === "AI company" || a.category === "AI safety company"),
    },
    {
      key: "association",
      label: "Association / civil society",
      match: (a) =>
        a.layer !== "bridge" &&
        [
          "Professional association",
          "Civil society",
          "Civil society – Media / podcast",
          "Convening platform",
          "Convening platform – Operator",
        ].includes(a.category),
    },
    {
      key: "bridge",
      label: "Bridge / interpreter",
      match: (a) => a.layer === "bridge",
    },
  ];

  const groupCounts = useMemo(
    () => GROUPS.map((g) => ({ ...g, count: allActors.filter(g.match).length })),
    [allActors],
  );

  const locationCounts = useMemo(() => {
    const counts = new Map<string, number>();
    allActors.forEach((a) => {
      if (a.location && a.location.trim()) counts.set(a.location, (counts.get(a.location) ?? 0) + 1);
    });
    return Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [allActors]);

  const [selGroups, setSelGroups] = useState<Set<string>>(new Set(GROUPS.map((g) => g.key)));
  const [selLocs, setSelLocs] = useState<Set<string>>(new Set());
  const [selRelCats, setSelRelCats] = useState<Set<string>>(new Set(REL_CATEGORIES));

  useEffect(() => {
    setSelLocs(new Set(locationCounts.map(([k]) => k)));
  }, [locationCounts]);

  const preActors = useMemo(
    () =>
      allActors.filter((a) => {
        const group = GROUPS.find((g) => g.match(a));
        if (!group || !selGroups.has(group.key)) return false;
        if (a.location && a.location.trim() && !selLocs.has(a.location)) return false;
        return true;
      }),
    [allActors, selGroups, selLocs],
  );

  const preIds = useMemo(() => new Set(preActors.map((a) => a.id)), [preActors]);

  const filteredRels = useMemo(
    () =>
      eligibleRels.filter(
        (r) => preIds.has(r.source) && preIds.has(r.target) && selRelCats.has(r.category),
      ),
    [eligibleRels, preIds, selRelCats],
  );

  const connectedActorIds = useMemo(() => {
    const s = new Set<string>();
    filteredRels.forEach((r) => {
      s.add(r.source);
      s.add(r.target);
    });
    return s;
  }, [filteredRels]);

  const visibleActors = useMemo(
    () => (showUnconnected ? preActors : preActors.filter((a) => connectedActorIds.has(a.id))),
    [preActors, connectedActorIds, showUnconnected],
  );

  const visibleIds = useMemo(() => new Set(visibleActors.map((a) => a.id)), [visibleActors]);

  const degreeMap = useMemo(() => {
    const m = new Map<string, number>();
    filteredRels.forEach((r) => {
      m.set(r.source, (m.get(r.source) ?? 0) + 1);
      m.set(r.target, (m.get(r.target) ?? 0) + 1);
    });
    return m;
  }, [filteredRels]);

  const maxDegree = useMemo(() => {
    let max = 0;
    degreeMap.forEach((v) => {
      if (v > max) max = v;
    });
    return max;
  }, [degreeMap]);

  function nodeRadius(id: string) {
    const d = degreeMap.get(id) ?? 0;
    const MIN = 4;
    const MAX = 16;
    if (maxDegree <= 1) return MIN;
    const t = Math.log(d + 1) / Math.log(maxDegree + 1);
    return MIN + (MAX - MIN) * t;
  }

  const graphData = useMemo(
    () => ({
      nodes: visibleActors.map((a) => ({ id: a.id, actor: a })) as GraphNode[],
      links: filteredRels.map((r) => ({ source: r.source, target: r.target, rel: r })) as GraphLink[],
    }),
    [visibleActors, filteredRels],
  );

  // Smoothly reheat simulation when filters change
  useEffect(() => {
    if (fgRef.current?.d3ReheatSimulation) {
      fgRef.current.d3ReheatSimulation();
    }
  }, [visibleIds, filteredRels]);

  function toggle(set: Set<string>, setSet: (s: Set<string>) => void, key: string) {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setSet(next);
  }

  const connectedIds = useMemo(() => {
    if (!selected) return null;
    const set = new Set<string>([selected]);
    filteredRels.forEach((r) => {
      if (r.source === selected) set.add(r.target);
      if (r.target === selected) set.add(r.source);
    });
    return set;
  }, [selected, filteredRels]);

  const selectedActor = selected ? ACTORS.find((a) => a.id === selected) : null;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!search.trim() || !fgRef.current) return;
    const needle = search.trim().toLowerCase();
    const match = allActors.find(
      (a) =>
        a.name_en.toLowerCase().includes(needle) ||
        a.name_zh.includes(search.trim()) ||
        a.id.toLowerCase() === needle,
    );
    if (!match) return;
    setSelected(match.id);
    const node: any = graphData.nodes.find((n) => n.id === match.id);
    if (node && node.x != null && node.y != null) {
      fgRef.current.centerAt(node.x, node.y, 600);
      fgRef.current.zoom(3, 600);
    }
  }

  // Mobile fallback
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      <div className="border-b border-border bg-background/95 px-6 py-3">
        <p className="mx-auto max-w-6xl text-xs italic leading-relaxed text-muted-foreground">
          {t("network_notice")}
        </p>
      </div>

      <div ref={containerRef} className="relative flex-1 overflow-hidden bg-[var(--color-ecosystem-bg)]">
        {isMobile ? (
          <div className="flex h-full flex-col items-center justify-center px-8 text-center">
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t("network_mobile")}</p>
            <Link to="/ecosystem" className="mt-5 text-sm text-primary underline underline-offset-4">
              {t("nav_ecosystem")} →
            </Link>
          </div>
        ) : (
          <>
            {/* Search */}
            <form
              onSubmit={handleSearch}
              className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-md border border-border bg-background/95 p-1.5 shadow-sm backdrop-blur"
            >
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("search_ph")}
                className="w-56 bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
              >
                Find
              </button>
            </form>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-20 rounded-md border border-border bg-background/95 p-3 text-xs shadow-sm backdrop-blur">
              <p className="mb-2 font-medium uppercase tracking-wider text-muted-foreground">
                {t("filter_stakeholder")}
              </p>
              <ul className="space-y-1">
                {(Object.keys(STAKEHOLDER_COLORS) as (keyof typeof STAKEHOLDER_COLORS)[]).map((k) => (
                  <li key={k} className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: STAKEHOLDER_COLORS[k] }} />
                    <span>{STAKEHOLDER_LABEL[k][lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Graph canvas */}
            {Graph && size.w > 0 && (
              <Graph
                ref={fgRef}
                width={size.w}
                height={size.h}
                graphData={graphData}
                nodeId="id"
                nodeLabel={(n: any) => `${n.actor.name_en}${n.actor.name_zh ? " · " + n.actor.name_zh : ""}`}
                nodeRelSize={6}
                nodeCanvasObject={(node: any, ctx: any, globalScale: number) => {
                  const a: Actor = node.actor;
                  const color = STAKEHOLDER_COLORS[a.stakeholder_type];
                  const dim = connectedIds && !connectedIds.has(a.id);
                  ctx.globalAlpha = dim ? 0.15 : 1;
                  ctx.fillStyle = color;
                  const r = nodeRadius(a.id);
                  if (a.layer === "bridge") {
                    const s = r * 1.8;
                    ctx.fillRect(node.x - s / 2, node.y - s / 2, s, s);
                    if (selected === a.id) {
                      ctx.lineWidth = 2;
                      ctx.strokeStyle = "#9E2B25";
                      ctx.strokeRect(node.x - s / 2, node.y - s / 2, s, s);
                    }
                  } else {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, r, 0, 2 * Math.PI, false);
                    ctx.fill();
                    if (selected === a.id) {
                      ctx.lineWidth = 2;
                      ctx.strokeStyle = "#9E2B25";
                      ctx.stroke();
                    }
                  }
                  const label = a.name_en.length > 28 ? a.name_en.slice(0, 26) + "…" : a.name_en;
                  const fontSize = 11 / Math.max(globalScale, 1);
                  ctx.font = `${fontSize + 2}px Inter, sans-serif`;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "top";
                  ctx.fillStyle = "#1a1a1a";
                  ctx.fillText(label, node.x, node.y + r + 2);
                  ctx.globalAlpha = 1;
                }}
                linkColor={(l: any) => {
                  if (connectedIds) {
                    const s = typeof l.source === "object" ? l.source.id : l.source;
                    const tgt = typeof l.target === "object" ? l.target.id : l.target;
                    const on = connectedIds.has(s) && connectedIds.has(tgt);
                    return on ? "#9E2B25" : "rgba(120,120,120,0.15)";
                  }
                  return "rgba(80,80,80,0.4)";
                }}
                linkWidth={(l: any) => {
                  if (!connectedIds) return 1;
                  const s = typeof l.source === "object" ? l.source.id : l.source;
                  const tgt = typeof l.target === "object" ? l.target.id : l.target;
                  return connectedIds.has(s) && connectedIds.has(tgt) ? 2 : 1;
                }}
                linkDirectionalArrowLength={(l: any) => (l.rel.direction === "directed" ? 5 : 0)}
                linkDirectionalArrowRelPos={1}
                onNodeClick={(n: any) => setSelected(n.id)}
                onBackgroundClick={() => setSelected(null)}
                cooldownTicks={100}
              />
            )}

            {/* Right panel */}
            <div
              className={`absolute right-0 top-0 z-20 h-full transition-transform ${
                panelOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                onClick={() => setPanelOpen((v) => !v)}
                className="absolute -left-8 top-4 rounded-l-md border border-r-0 border-border bg-background px-2 py-3 text-xs text-foreground shadow-sm"
              >
                {panelOpen ? "→" : "←"}
              </button>
              <div className="h-full w-72 overflow-y-auto border-l border-border bg-background/95 p-5 backdrop-blur">
                <label className="mb-5 flex items-center gap-2 text-xs text-foreground">
                  <input
                    type="checkbox"
                    checked={showUnconnected}
                    onChange={(e) => setShowUnconnected(e.target.checked)}
                    className="h-3.5 w-3.5"
                  />
                  Show unconnected actors
                </label>
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Stakeholder type
                  </p>
                  <div className="flex gap-2 text-[10px] uppercase tracking-wider">
                    <button
                      onClick={() => setSelGroups(new Set(GROUPS.map((g) => g.key)))}
                      className="text-muted-foreground hover:text-primary"
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelGroups(new Set())}
                      className="text-muted-foreground hover:text-primary"
                    >
                      None
                    </button>
                  </div>
                </div>
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {groupCounts.map((g) => (
                    <PanelChip
                      key={g.key}
                      active={selGroups.has(g.key)}
                      onClick={() => toggle(selGroups, setSelGroups, g.key)}
                    >
                      {g.label} <span className="opacity-70">({g.count})</span>
                    </PanelChip>
                  ))}
                </div>

                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Location
                  </p>
                  <div className="flex gap-2 text-[10px] uppercase tracking-wider">
                    <button
                      onClick={() => setSelLocs(new Set(locationCounts.map(([k]) => k)))}
                      className="text-muted-foreground hover:text-primary"
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelLocs(new Set())}
                      className="text-muted-foreground hover:text-primary"
                    >
                      None
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {locationCounts.map(([loc, count]) => (
                    <PanelChip
                      key={loc}
                      active={selLocs.has(loc)}
                      onClick={() => toggle(selLocs, setSelLocs, loc)}
                    >
                      {loc} <span className="opacity-70">({count})</span>
                    </PanelChip>
                  ))}
                </div>

                <div className="mb-5 mt-6 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Relationship category
                  </p>
                  <div className="flex gap-2 text-[10px] uppercase tracking-wider">
                    <button
                      onClick={() => setSelRelCats(new Set(REL_CATEGORIES))}
                      className="text-muted-foreground hover:text-primary"
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelRelCats(new Set())}
                      className="text-muted-foreground hover:text-primary"
                    >
                      None
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {REL_CATEGORIES.map((cat) => {
                    const count = eligibleRels.filter((r) => r.category === cat).length;
                    return (
                      <PanelChip
                        key={cat}
                        active={selRelCats.has(cat)}
                        onClick={() => toggle(selRelCats, setSelRelCats, cat)}
                      >
                        {cat} <span className="opacity-70">({count})</span>
                      </PanelChip>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Drawer with selected actor */}
            {selectedActor && (
              <div className="absolute bottom-4 right-80 z-20 w-80 rounded-lg border border-border bg-background p-5 shadow-lg">
                <div className="mb-2 flex items-start justify-between">
                  <LayerGlyph layer={selectedActor.layer} className="h-5 w-5" />
                  <button
                    onClick={() => setSelected(null)}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>
                <h3 className="font-serif text-lg leading-tight text-foreground">{selectedActor.name_en}</h3>
                {selectedActor.name_zh && (
                  <p className="font-zh text-sm text-muted-foreground">{selectedActor.name_zh}</p>
                )}
                <p className="mt-2 flex items-center gap-2 text-xs">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: STAKEHOLDER_COLORS[selectedActor.stakeholder_type] }}
                  />
                  {STAKEHOLDER_LABEL[selectedActor.stakeholder_type][lang]}
                  {selectedActor.location && (
                    <span className="text-muted-foreground">· {selectedActor.location}</span>
                  )}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/85 line-clamp-4">
                  {selectedActor.overview}
                </p>
                <Link
                  to="/actors/$id"
                  params={{ id: selectedActor.id }}
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {t("see_profile")} →
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function PanelChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-2.5 py-0.5 text-[11px] transition-colors ${
        active
          ? "border-[#9E2B25] bg-[#9E2B25] text-white"
          : "border-[#9E2B25] bg-transparent text-neutral-600 hover:bg-[#9E2B25]/10"
      }`}
    >
      {children}
    </button>
  );
}