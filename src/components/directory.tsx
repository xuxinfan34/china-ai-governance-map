import { useMemo, useState } from "react";
import type { Actor, Layer, SafetyRelevance } from "../lib/data";
import { ACTORS } from "../lib/data";
import { ActorCard } from "./actor-card";
import { useLang } from "../lib/i18n";

interface Props {
  layer: Layer;
  title: string;
  subtitle: string;
}

export function Directory({ layer, title, subtitle }: Props) {
  const { t } = useLang();
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("all");
  const [loc, setLoc] = useState<string>("all");
  const [safety, setSafety] = useState<string>("all");
  const [tab, setTab] = useState<"directory" | "map">("directory");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const pool = useMemo(() => ACTORS.filter((a) => a.layer === layer), [layer]);
  const types = useMemo(
    () => Array.from(new Set(pool.map((a) => a.category))).sort(),
    [pool],
  );
  const locations = useMemo(
    () => Array.from(new Set(pool.map((a) => a.location))).sort(),
    [pool],
  );

  const filtered = pool.filter((a: Actor) => {
    if (type !== "all" && a.category !== type) return false;
    if (loc !== "all" && a.location !== loc) return false;
    if (safety !== "all" && a.safety_relevance !== safety) return false;
    if (q.trim()) {
      const needle = q.toLowerCase();
      if (
        !a.name_en.toLowerCase().includes(needle) &&
        !a.name_zh.includes(q) &&
        !a.overview.toLowerCase().includes(needle)
      )
        return false;
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 border-b border-border pb-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </header>

      <div className="mb-6 flex items-center gap-6 border-b border-border">
        <TabBtn active={tab === "directory"} onClick={() => setTab("directory")}>
          {t("map_tab")}
        </TabBtn>
        <TabBtn active={tab === "map"} onClick={() => setTab("map")}>
          {t("map_soon")}
        </TabBtn>
      </div>

      {tab === "map" ? (
        <div className="rounded-lg border border-dashed border-border bg-muted/40 py-24 text-center">
          <p className="font-serif text-xl italic text-muted-foreground">
            {t("map_soon")}
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("search_ph")}
              className="w-full flex-1 rounded-md border border-border bg-card px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              onClick={() => setFiltersOpen(true)}
              className="rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground sm:hidden"
            >
              Filters
            </button>
          </div>

          {/* Desktop filters */}
          <div className="mb-8 hidden flex-wrap gap-x-6 gap-y-3 sm:flex">
            <ChipGroup
              label={t("filter_type")}
              value={type}
              onChange={setType}
              options={types}
              tAll={t("filter_all")}
            />
            <ChipGroup
              label={t("filter_location")}
              value={loc}
              onChange={setLoc}
              options={locations}
              tAll={t("filter_all")}
            />
            <ChipGroup
              label={t("filter_safety")}
              value={safety}
              onChange={setSafety}
              options={["core", "significant", "contextual"] as SafetyRelevance[]}
              tAll={t("filter_all")}
              labelMap={{
                core: t("safety_core"),
                significant: t("safety_significant"),
                contextual: t("safety_contextual"),
              }}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">{t("no_results")}</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((a) => (
                <ActorCard key={a.id} actor={a} />
              ))}
            </div>
          )}

          {/* Mobile bottom sheet */}
          {filtersOpen && (
            <div
              className="fixed inset-0 z-50 flex items-end bg-black/40 sm:hidden"
              onClick={() => setFiltersOpen(false)}
            >
              <div
                className="max-h-[80vh] w-full overflow-y-auto rounded-t-2xl bg-background p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="text-sm text-muted-foreground"
                  >
                    Done
                  </button>
                </div>
                <div className="flex flex-col gap-5">
                  <ChipGroup
                    label={t("filter_type")}
                    value={type}
                    onChange={setType}
                    options={types}
                    tAll={t("filter_all")}
                    stacked
                  />
                  <ChipGroup
                    label={t("filter_location")}
                    value={loc}
                    onChange={setLoc}
                    options={locations}
                    tAll={t("filter_all")}
                    stacked
                  />
                  <ChipGroup
                    label={t("filter_safety")}
                    value={safety}
                    onChange={setSafety}
                    options={["core", "significant", "contextual"] as SafetyRelevance[]}
                    tAll={t("filter_all")}
                    labelMap={{
                      core: t("safety_core"),
                      significant: t("safety_significant"),
                      contextual: t("safety_contextual"),
                    }}
                    stacked
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function TabBtn({
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
      className={`-mb-px border-b-2 px-1 pb-3 text-sm transition-colors ${
        active
          ? "border-primary text-foreground"
          : "border-transparent text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function ChipGroup({
  label,
  value,
  onChange,
  options,
  tAll,
  labelMap,
  stacked,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  tAll: string;
  labelMap?: Record<string, string>;
  stacked?: boolean;
}) {
  return (
    <div className={stacked ? "flex flex-col gap-2" : "flex items-center gap-2"}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        <Chip active={value === "all"} onClick={() => onChange("all")}>
          {tAll}
        </Chip>
        {options.map((o) => (
          <Chip key={o} active={value === o} onClick={() => onChange(o)}>
            {labelMap?.[o] ?? o}
          </Chip>
        ))}
      </div>
    </div>
  );
}

function Chip({
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
      className={`rounded-full border px-3 py-1 text-xs transition-colors ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground hover:border-primary/50"
      }`}
    >
      {children}
    </button>
  );
}