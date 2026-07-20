import type { ReactNode } from "react";
import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import {
  ACTORS,
  actorById,
  relationshipsForActor,
  documentsForActor,
  STAKEHOLDER_COLORS,
  STAKEHOLDER_LABEL,
  type Actor,
  type Relationship,
} from "../lib/data";
import { LayerGlyph } from "../components/glyphs";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/actors/$id")({
  loader: ({ params }) => {
    const actor = actorById(params.id);
    if (!actor) throw notFound();
    return { actor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found — China AI Governance Map (Sinograph AI)" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const a = loaderData.actor;
    return {
      meta: [
        { title: a.name_en + " — China AI Governance Map (Sinograph AI)" },
        { name: "description", content: a.overview },
        { property: "og:title", content: a.name_en },
        { property: "og:description", content: a.overview },
      ],
    };
  },
  component: Profile,
  errorComponent: ErrorView,
  notFoundComponent: NotFoundView,
});

function Profile() {
  const { actor } = Route.useLoaderData() as { actor: Actor };
  const { t, lang } = useLang();

  const related = (actor.related ?? [])
    .map((id: string) => ACTORS.find((a) => a.id === id))
    .filter((a): a is Actor => Boolean(a));

  const rels = relationshipsForActor(actor.id);
  const relsByType = rels.reduce<Record<string, Relationship[]>>((acc, r) => {
    (acc[r.type] ||= []).push(r);
    return acc;
  }, {});
  const docs = documentsForActor(actor.id);
  const bg = actor.layer === "ecosystem" ? "var(--color-ecosystem-bg)" : "var(--color-bridge-bg)";
  const dot = STAKEHOLDER_COLORS[actor.stakeholder_type];
  const typeLabel = STAKEHOLDER_LABEL[actor.stakeholder_type][lang];

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link
        to={actor.layer === "bridge" ? "/bridges" : "/ecosystem"}
        className="text-sm text-muted-foreground hover:text-primary"
      >
        ← {t("back")}
      </Link>

      <header
        className="relative mt-6 rounded-lg border border-border p-8"
        style={{ backgroundColor: bg }}
      >
        <div className="absolute right-6 top-6">
          <LayerGlyph layer={actor.layer} className="h-7 w-7" />
        </div>
        <div className="flex flex-wrap items-center gap-2 pr-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2 py-0.5 text-xs font-medium text-foreground/80">
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: dot }} />
            {typeLabel}
          </span>
          <span className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {actor.category}
          </span>
        </div>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {actor.name_en}
        </h1>
        {actor.name_zh && (
          <p className="mt-2 font-zh text-2xl text-muted-foreground">{actor.name_zh}</p>
        )}
        {actor.location && (
          <p className="mt-4 text-sm text-muted-foreground">
            {t("location")}: {actor.location}
          </p>
        )}
      </header>

      <Section title={t("overview")}>
        <p className="leading-relaxed text-foreground/85">{actor.overview}</p>
      </Section>

      {actor.leadership.length > 0 && (
        <Section title={t("leadership")}>
          <ul className="divide-y divide-border rounded-md border border-border">
            {actor.leadership.map((l: { name: string; role: string }) => (
              <li key={l.name} className="flex justify-between px-4 py-3">
                <span className="font-serif text-foreground">{l.name}</span>
                <span className="text-sm text-muted-foreground">{l.role}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {actor.website && (
        <Section title={t("website")}>
          <a
            href={actor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            {actor.website}
          </a>
        </Section>
      )}

      {actor.wikipedia && (
        <Section title="Wikipedia">
          <a
            href={actor.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            {actor.wikipedia}
          </a>
        </Section>
      )}

      {docs.length > 0 && (
        <Section title={t("issued_documents")}>
          <ul className="divide-y divide-border rounded-md border border-border">
            {docs.map((d) => (
              <li key={d.id} className="flex flex-col gap-1 px-4 py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <a href={d.official_url} target="_blank" rel="noopener noreferrer" className="font-serif text-foreground hover:text-primary">
                    {d.title_en}
                  </a>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{d.issued} · {d.status}</span>
                </div>
                <span className="font-zh text-sm text-muted-foreground">{d.title_zh}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {Object.keys(relsByType).length > 0 && (
        <Section title={t("related")}>
          <div className="space-y-6">
            {Object.entries(relsByType).map(([type, list]) => (
              <div key={type}>
                <h3 className="mb-2 font-serif text-sm font-medium text-foreground">{type}</h3>
                <ul className="space-y-2">
                  {list.map((r) => {
                    const otherId = r.source === actor.id ? r.target : r.source;
                    const other = ACTORS.find((a) => a.id === otherId);
                    if (!other) return null;
                    const otherBg = other.layer === "ecosystem" ? "var(--color-ecosystem-bg)" : "var(--color-bridge-bg)";
                    return (
                      <li
                        key={r.id}
                        className="flex flex-wrap items-center gap-2 rounded-md border border-border p-3"
                        style={{ backgroundColor: otherBg }}
                      >
                        <LayerGlyph layer={other.layer} className="h-4 w-4 shrink-0" />
                        <Link
                          to="/actors/$id"
                          params={{ id: other.id }}
                          className="font-serif text-foreground hover:text-primary"
                        >
                          {other.name_en}
                        </Link>
                        {other.name_zh && (
                          <span className="font-zh text-xs text-muted-foreground">{other.name_zh}</span>
                        )}
                        <ConfidenceBadge c={r.confidence} />
                        <span className="text-xs text-muted-foreground">· {r.status}</span>
                        <a
                          href={r.evidence_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-1 text-xs text-primary hover:underline"
                        >
                          {t("evidence")}
                          <span className="rounded border border-border bg-background px-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                            {r.evidence_lang === "Chinese" ? "ZH" : "EN"}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      )}

      {related.length > 0 && Object.keys(relsByType).length === 0 && (
        <Section title={t("related")}>
          <div className="flex flex-wrap gap-2">
            {related.map((r: Actor) => (
              <Link
                key={r.id}
                to="/actors/$id"
                params={{ id: r.id }}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {r.name_en}
              </Link>
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}

function ConfidenceBadge({ c }: { c: string }) {
  const base = "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider";
  if (c === "High") return <span className={`${base} bg-foreground text-background`}>High</span>;
  if (c === "Medium") return <span className={`${base} border border-foreground text-foreground`}>Medium</span>;
  return <span className={`${base} border border-dashed border-foreground text-foreground`}>{c || "Low"}</span>;
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="mb-3 font-serif text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}

function NotFoundView() {
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl">Actor not found</h1>
      <p className="mt-3 text-muted-foreground">This entry doesn't exist yet.</p>
      <Link to="/ecosystem" className="mt-6 inline-block text-primary underline">
        Browse the directory
      </Link>
    </div>
  );
}

function ErrorView({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl">Something went wrong</h1>
      <button
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        Try again
      </button>
    </div>
  );
}