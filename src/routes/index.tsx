import { createFileRoute, Link } from "@tanstack/react-router";
import { VOICE_TOPICS } from "../data/voices";
import { WEEKLY_ITEMS_JULY_27 } from "../data/weekly";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sinograph 诠字" },
      {
        name: "description",
        content:
          "A living reference to the institutions, relationships, and discourse shaping China's AI governance ecosystem — voices, weekly feed, network, and documents.",
      },
      { property: "og:title", content: "Sinograph 诠字" },
      {
        property: "og:description",
        content:
          "A living reference to the institutions, relationships, and discourse shaping China's AI governance ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const recent = WEEKLY_ITEMS_JULY_27.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
      {/* Hero */}
      <section className="text-center">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Sinograph
          <span className="font-zh ml-1.5 text-[60%] font-normal text-muted-foreground">
            诠字
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Understanding China's AI ecosystem — in their own words
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/voices"
            className="rounded-full bg-[#9E2B25] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            Explore Voices →
          </Link>
          <Link
            to="/weekly"
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
          >
            This Week's Feed →
          </Link>
        </div>
      </section>

      {/* Voices preview */}
      <section className="mt-16">
        <SectionHeading title="Voices" href="/voices" cta="All topics →" />
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VOICE_TOPICS.map((t, i) => (
            <Link
              key={t.title}
              to="/voices"
              search={{ topic: i }}
              className="group relative flex h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border-t-[3px] border-t-[#C4443D] bg-gradient-to-b from-[#9E2B25] to-[#7A2220] px-4 text-center shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
            >
              <span
                className="font-zh pointer-events-none absolute bottom-1 right-2 select-none text-[84px] leading-none text-white opacity-[0.12] transition-all duration-200 group-hover:scale-110 group-hover:opacity-20"
              >
                {WATERMARKS[i]}
              </span>
              <span className="relative z-10 font-serif text-lg font-semibold leading-snug text-white">
                {t.title}
              </span>
              <div className="relative z-10 mt-3 h-px w-8 bg-white/30" />
              <span className="relative z-10 mt-3 text-[11px] text-white/90">
                {new Set(t.quotes.map((q) => q.speaker)).size} voices
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Weekly feed preview */}
      <section className="mt-16">
        <SectionHeading title="Weekly Feed" href="/weekly" cta="All weeks →" />
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {recent.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
            >
              <span className="text-[11px] font-medium uppercase tracking-wide text-[#9E2B25]">
                {item.source}
              </span>
              <span className="mt-2 font-serif text-base font-semibold leading-snug text-foreground">
                {item.titleEn}
              </span>
              <span className="font-zh mt-1 text-xs text-muted-foreground">{item.titleZh}</span>
              <span className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Ecosystem at a glance */}
      <section className="mt-16">
        <SectionHeading title="Ecosystem at a Glance" />
        <div className="mt-6 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-2 rounded-2xl border border-border bg-muted/40 px-6 py-5 text-center font-serif">
          <Stat value="90" label="actors" />
          <span className="text-muted-foreground">·</span>
          <Stat value="76" label="verified relationships" />
          <span className="text-muted-foreground">·</span>
          <Stat value="36" label="documents" />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <LinkCard to="/directory" title="Directory" desc="Profiles of ecosystem actors and bridges." />
          <LinkCard to="/network" title="Network" desc="Interactive map of institutional relationships." />
          <LinkCard to="/documents" title="Documents" desc="Key governance documents by year." />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">Last updated: August 2026</p>
      </section>
    </div>
  );
}

const WATERMARKS = ["合", "治", "开", "智"];

function SectionHeading({ title, href, cta }: { title: string; href?: string; cta?: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-2">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      {href && cta && (
        <Link to={href} className="text-sm text-[#9E2B25] underline-offset-4 hover:underline">
          {cta}
        </Link>
      )}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <span>
      <span className="text-2xl font-semibold text-[#9E2B25]">{value}</span>
      <span className="ml-1.5 text-sm text-muted-foreground">{label}</span>
    </span>
  );
}

function LinkCard({ to, title, desc }: { to: string; title: string; desc: string }) {
  return (
    <Link
      to={to}
      className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
    >
      <p className="font-serif text-lg font-semibold text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </Link>
  );
}
