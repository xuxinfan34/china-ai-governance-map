import { Link } from "@tanstack/react-router";
import type { Actor } from "../lib/data";
import { useLang } from "../lib/i18n";

const safetyClasses: Record<Actor["safety_relevance"], string> = {
  core: "bg-primary/10 text-primary border-primary/30",
  significant: "bg-accent text-accent-foreground border-border",
  contextual: "bg-muted text-muted-foreground border-border",
};

export function ActorCard({ actor }: { actor: Actor }) {
  const { t, lang } = useLang();
  const safetyLabel =
    actor.safety_relevance === "core"
      ? t("safety_core")
      : actor.safety_relevance === "significant"
        ? t("safety_significant")
        : t("safety_contextual");
  return (
    <Link
      to="/actors/$id"
      params={{ id: actor.id }}
      className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-serif text-lg leading-tight text-foreground group-hover:text-primary">
            {actor.name_en}
          </h3>
          {actor.name_zh && (
            <p className="font-zh text-sm text-muted-foreground">{actor.name_zh}</p>
          )}
        </div>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${safetyClasses[actor.safety_relevance]}`}
        >
          {safetyLabel}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-foreground/80 line-clamp-3">
        {actor.overview}
      </p>
      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        <span className="rounded-sm bg-secondary px-2 py-0.5 text-secondary-foreground">
          {actor.category}
        </span>
        <span>· {actor.location}</span>
      </div>
    </Link>
  );
}