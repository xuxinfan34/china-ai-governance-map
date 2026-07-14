import type { ReactNode } from "react";
import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ACTORS, actorById, type Actor } from "../lib/data";
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
          { title: "Not found — China AI Governance Map" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const a = loaderData.actor;
    return {
      meta: [
        { title: a.name_en + " — China AI Governance Map" },
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
  const { t } = useLang();

  const related = actor.related
    .map((id: string) => ACTORS.find((a) => a.id === id))
    .filter((a): a is Actor => Boolean(a));

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link
        to={actor.layer === "bridge" ? "/bridges" : "/ecosystem"}
        className="text-sm text-muted-foreground hover:text-primary"
      >
        ← {t("back")}
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
            {actor.category}
          </span>
          <SafetyBadge actor={actor} />
        </div>
        <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          {actor.name_en}
        </h1>
        {actor.name_zh && (
          <p className="mt-2 font-zh text-2xl text-muted-foreground">{actor.name_zh}</p>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          {t("location")}: {actor.location}
        </p>
      </header>

      <Section title={t("overview")}>
        <p className="leading-relaxed text-foreground/85">{actor.overview}</p>
      </Section>

      <Section title={t("why")}>
        <p className="leading-relaxed text-foreground/85">{actor.rationale}</p>
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

      <Section title={t("sources")}>
        <p className="text-sm italic text-muted-foreground">Citations forthcoming.</p>
      </Section>

      {related.length > 0 && (
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

function SafetyBadge({ actor }: { actor: Actor }) {
  const { t } = useLang();
  const label =
    actor.safety_relevance === "core"
      ? t("safety_core")
      : actor.safety_relevance === "significant"
        ? t("safety_significant")
        : t("safety_contextual");
  const cls =
    actor.safety_relevance === "core"
      ? "bg-primary/10 text-primary border-primary/30"
      : "bg-accent text-accent-foreground border-border";
  return (
    <span
      className={"rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider " + cls}
    >
      {label}
    </span>
  );
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