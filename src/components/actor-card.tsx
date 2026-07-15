import { Link } from "@tanstack/react-router";
import type { Actor } from "../lib/data";
import { STAKEHOLDER_COLORS, STAKEHOLDER_LABEL } from "../lib/data";
import { LayerGlyph } from "./glyphs";
import { useLang } from "../lib/i18n";

export function ActorCard({ actor }: { actor: Actor }) {
  const { lang } = useLang();
  const bg = actor.layer === "ecosystem" ? "var(--color-ecosystem-bg)" : "var(--color-bridge-bg)";
  const dot = STAKEHOLDER_COLORS[actor.stakeholder_type];
  const typeLabel = STAKEHOLDER_LABEL[actor.stakeholder_type][lang];
  return (
    <Link
      to="/actors/$id"
      params={{ id: actor.id }}
      style={{ backgroundColor: bg }}
      className="group relative flex flex-col gap-3 rounded-lg border border-border p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-sm"
    >
      <div className="absolute right-4 top-4">
        <LayerGlyph layer={actor.layer} className="h-5 w-5" />
      </div>
      <div className="pr-8">
        <h3 className="font-serif text-lg leading-tight text-foreground group-hover:text-primary">
          {actor.name_en}
        </h3>
        {actor.name_zh && (
          <p className="font-zh text-sm text-muted-foreground">{actor.name_zh}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2 py-0.5 text-[11px] font-medium text-foreground/80"
        >
          <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: dot }} />
          {typeLabel}
        </span>
        <span className="text-xs text-muted-foreground">· {actor.category}</span>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
        {actor.overview}
      </p>
      <p className="mt-auto text-xs text-muted-foreground">{actor.location}</p>
    </Link>
  );
}