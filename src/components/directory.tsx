import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { Link } from "@tanstack/react-router";
import {
  ACTORS,
  STAKEHOLDER_LABEL,
  BRIDGE_TYPE_LABEL,
  type Actor,
  type Layer,
  type StakeholderType,
  type BridgeType,
} from "../lib/data";
import { useLang } from "../lib/i18n";

export type LayerFilter = Layer | "all";

interface Props {
  layer: LayerFilter;
  onLayerChange: (l: LayerFilter) => void;
  title: string;
  subtitle: string;
}

export function Directory({ layer, onLayerChange, title, subtitle }: Props) {
  const { t, lang } = useLang();
  const [q, setQ] = useState("");
  const [stakeholder, setStakeholder] = useState<string>("all");
  const [bridgeType, setBridgeType] = useState<string>("all");
  const [loc, setLoc] = useState<string>("all");
  const [filtersOpen, setFiltersOpen] = useState(false);


  const layerOrder: Record<Layer, number> = { ecosystem: 0, bridge: 1 };
  const sorted = useMemo(
    () =>
      [...ACTORS].sort(
        (a, b) =>
          layerOrder[a.layer] - layerOrder[b.layer] || a.name_en.localeCompare(b.name_en),
      ),
    [],
  );
  const counts = useMemo(
    () => ({
      all: sorted.length,
      ecosystem: sorted.filter((a) => a.layer === "ecosystem").length,
      bridge: sorted.filter((a) => a.layer === "bridge").length,
    }),
    [sorted],
  );
  const pool = useMemo(
    () => (layer === "all" ? sorted : sorted.filter((a) => a.layer === layer)),
    [layer, sorted],
  );

  const fuse = useMemo(
    () =>
      new Fuse(pool, {
        keys: ["name_en", "name_zh", "overview", "category", "location"],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    [pool],
  );

  const locations = useMemo(
    () => Array.from(new Set(pool.map((a) => a.location).filter(Boolean))).sort(),
    [pool],
  );

  const stakeholderTypes: StakeholderType[] = ["government", "research", "company", "civil"];
  const bridgeTypes: BridgeType[] = ["newsletter", "podcast", "organization", "individual", "translation"];

  const searched = q.trim() ? fuse.search(q).map((r) => r.item) : pool;
  const filtered = searched.filter((a: Actor) => {
    if (stakeholder !== "all" && a.stakeholder_type !== stakeholder) return false;
    if (layer === "bridge" && bridgeType !== "all" && a.bridge_type !== bridgeType) return false;
    if (loc !== "all" && a.location !== loc) return false;
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

      <div className="mb-6 flex flex-wrap gap-2">
        <Chip active={layer === "all"} onClick={() => onLayerChange("all")}>
          {t("filter_all_layers")} ({counts.all})
        </Chip>
        <Chip active={layer === "ecosystem"} onClick={() => onLayerChange("ecosystem")}>
          {t("ecosystem_title")} ({counts.ecosystem})
        </Chip>
        <Chip active={layer === "bridge"} onClick={() => onLayerChange("bridge")}>
          {t("bridges_title")} ({counts.bridge})
        </Chip>
      </div>

      <>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">

            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("search_ph")}
              className="w-full flex-1 border-b border-border bg-transparent px-1 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
            />
            <button
              onClick={() => setFiltersOpen(true)}
              className="border-b border-border px-1 py-2.5 text-sm text-foreground sm:hidden"
            >
              Filters
            </button>
          </div>

          <div className="mb-8 hidden flex-wrap gap-x-6 gap-y-3 sm:flex">
            <ChipGroup
              label={t("filter_stakeholder")}
              value={stakeholder}
              onChange={setStakeholder}
              options={stakeholderTypes}
              tAll={t("filter_all")}
              labelMap={Object.fromEntries(stakeholderTypes.map((k) => [k, STAKEHOLDER_LABEL[k][lang]]))}
            />
            {layer === "bridge" && (
              <ChipGroup
                label={t("filter_bridge_type")}
                value={bridgeType}
                onChange={setBridgeType}
                options={bridgeTypes}
                tAll={t("filter_all")}
                labelMap={Object.fromEntries(bridgeTypes.map((k) => [k, BRIDGE_TYPE_LABEL[k][lang]]))}
              />
            )}
            <ChipGroup
              label={t("filter_location")}
              value={loc}
              onChange={setLoc}
              options={locations}
              tAll={t("filter_all")}
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
                  <button onClick={() => setFiltersOpen(false)} className="text-sm text-muted-foreground">
                    Done
                  </button>
                </div>
                <div className="flex flex-col gap-5">
                  <ChipGroup
                    label={t("filter_stakeholder")}
                    value={stakeholder}
                    onChange={setStakeholder}
                    options={stakeholderTypes}
                    tAll={t("filter_all")}
                    labelMap={Object.fromEntries(stakeholderTypes.map((k) => [k, STAKEHOLDER_LABEL[k][lang]]))}
                    stacked
                  />
                  {layer === "bridge" && (
                    <ChipGroup
                      label={t("filter_bridge_type")}
                      value={bridgeType}
                      onChange={setBridgeType}
                      options={bridgeTypes}
                      tAll={t("filter_all")}
                      labelMap={Object.fromEntries(bridgeTypes.map((k) => [k, BRIDGE_TYPE_LABEL[k][lang]]))}
                      stacked
                    />
                  )}
                  <ChipGroup
                    label={t("filter_location")}
                    value={loc}
                    onChange={setLoc}
                    options={locations}
                    tAll={t("filter_all")}
                    stacked
                  />
                </div>
              </div>
            </div>
          )}
        </>
      </div>
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
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
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

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
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