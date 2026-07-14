import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useLang } from "../lib/i18n";
import { ECOSYSTEM_STATS } from "../lib/data";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <section className="max-w-3xl">
        <p className="mb-4 font-serif text-sm tracking-wider text-primary">Jingwei · 经纬</p>
        <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">

          {t("tagline")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t("home_intro")}
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <EntryCard
          to="/ecosystem"
          eyebrow="I."
          title={t("nav_ecosystem")}
          zh="生态参与者"
          body="Regulators, research institutes, standards bodies, and firms shaping AI governance inside China."
          cta={t("enter")}
        />
        <EntryCard
          to="/bridges"
          eyebrow="II."
          title={t("nav_bridges")}
          zh="桥梁与解读者"
          body="Newsletters, podcasts, organizations, and individuals translating Chinese AI discourse for the world."
          cta={t("enter")}
        />
      </section>

      <section className="mt-20 border-t border-border pt-10">
        <div className="grid grid-cols-3 gap-6">
          <Stat n={ECOSYSTEM_STATS.ecosystem} label={t("stat_ecosystem")} />
          <Stat n={ECOSYSTEM_STATS.bridges} label={t("stat_bridges")} />
          <Stat n={ECOSYSTEM_STATS.total} label={t("stat_total")} />
        </div>
      </section>
    </div>
  );
}

function EntryCard({
  to,
  eyebrow,
  title,
  zh,
  body,
  cta,
}: {
  to: string;
  eyebrow: string;
  title: string;
  zh: string;
  body: string;
  cta: string;
}) {
  return (
    <Link
      to={to}
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-md sm:p-10 min-h-[280px]"
    >
      <div>
        <p className="font-serif text-sm italic text-primary">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-foreground group-hover:text-primary">
          {title}
        </h2>
        <p className="mt-1 font-zh text-base text-muted-foreground">{zh}</p>
        <p className="mt-5 text-sm leading-relaxed text-foreground/80">{body}</p>
      </div>
      <p className="mt-8 text-sm font-medium text-primary">
        {cta} <span className="ml-1 transition-transform group-hover:translate-x-1 inline-block">→</span>
      </p>
    </Link>
  );
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <p className="font-serif text-4xl font-semibold text-foreground sm:text-5xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}
