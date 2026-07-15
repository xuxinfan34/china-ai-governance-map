import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ACTORS,
  RELATIONSHIPS,
  STAKEHOLDER_COLORS,
  STAKEHOLDER_LABEL,
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

type ConfMode = "high" | "hm" | "all";
type StatusMode = "current" | "all";

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
  const [conf, setConf] = useState<ConfMode>("all");
  const [status, setStatus] = useState<StatusMode>("all");
  const [typeFilter, setTypeFilter] = useState<string | "all">("all");
  const [search, setSearch] = useState("");
  const [panelOpen, setPanelOpen] = useState(true);
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

  const ecosystemActors = useMemo(() => ACTORS.filter((a) => a.layer === "ecosystem"), []);
  const ecosystemIds = useMemo(() => new Set(ecosystemActors.map((a) => a.id)), [ecosystemActors]);

  const eligibleRels = useMemo(
    () => RELATIONSHIPS.filter((r) => ecosystemIds.has(r.source) && ecosystemIds.has(r.target)),
    [ecosystemIds],
  );

  const topTypes = useMemo(() => {
    const counts = new Map<string, number>();
    eligibleRels.forEach((r) => counts.set(r.type, (counts.get(r.type) ?? 0) + 1));
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([k]) => k);
  }, [eligibleRels]);

  const filteredRels = useMemo(
    () =>
      eligibleRels.filter((r) => {
        if (conf === "high" && r.confidence !== "High") return false;
        if (conf === "hm" && r.confidence === "Low") return false;
        if (status === "current" && r.status !== "Current") return false;
        if (typeFilter !== "all" && r.type !== typeFilter) return false;
        return true;
      }),
    [eligibleRels, conf, status, typeFilter],
  );

  const graphData = useMemo(
    () => ({
      nodes: ecosystemActors.map((a) => ({ id: a.id, actor: a })) as GraphNode[],
      links: filteredRels.map((r) => ({ source: r.source, target: r.target, rel: r })) as GraphLink[],
    }),
    [ecosystemActors, filteredRels],
  );

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
    const match = ecosystemActors.find(
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
                  ctx.beginPath();
                  ctx.arc(node.x, node.y, 6, 0, 2 * Math.PI, false);
                  ctx.fillStyle = color;
                  ctx.fill();
                  if (selected === a.id) {
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#9E2B25";
                    ctx.stroke();
                  }
                  const label = a.name_en.length > 28 ? a.name_en.slice(0, 26) + "…" : a.name_en;
                  const fontSize = 11 / Math.max(globalScale, 1);
                  ctx.font = `${fontSize + 2}px Inter, sans-serif`;
                  ctx.textAlign = "center";
                  ctx.textBaseline = "top";
                  ctx.fillStyle = "#1a1a1a";
                  ctx.fillText(label, node.x, node.y + 8);
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
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t("filter_type")}
                </p>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  <PanelChip active={typeFilter === "all"} onClick={() => setTypeFilter("all")}>
                    {t("filter_all")}
                  </PanelChip>
                  {topTypes.map((tp) => (
                    <PanelChip key={tp} active={typeFilter === tp} onClick={() => setTypeFilter(tp)}>
                      {tp}
                    </PanelChip>
                  ))}
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Confidence
                </p>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  <PanelChip active={conf === "high"} onClick={() => setConf("high")}>
                    {t("conf_high_only")}
                  </PanelChip>
                  <PanelChip active={conf === "hm"} onClick={() => setConf("hm")}>
                    {t("conf_high_medium")}
                  </PanelChip>
                  <PanelChip active={conf === "all"} onClick={() => setConf("all")}>
                    {t("conf_all")}
                  </PanelChip>
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Status
                </p>
                <div className="mb-5 flex flex-wrap gap-1.5">
                  <PanelChip active={status === "current"} onClick={() => setStatus("current")}>
                    {t("status_current")}
                  </PanelChip>
                  <PanelChip active={status === "all"} onClick={() => setStatus("all")}>
                    {t("status_all")}
                  </PanelChip>
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
                  <span className="text-muted-foreground">· {selectedActor.location}</span>
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
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-primary/50"
      }`}
    >
      {children}
    </button>
  );
}