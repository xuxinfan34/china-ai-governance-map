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

const ZH_STACK = '"Noto Serif SC", "Songti SC", "SimSun", serif';
const WATERMARKS = ["合", "治", "开", "智"];
const TAB_LABELS = [
  "International AI Cooperation",
  "AI Risk Governance",
  "Open-Source AI",
  "Defining AGI",
];

function Index() {
  const latest = WEEKLY_ITEMS_JULY_27.slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      {/* HERO */}
      <section className="max-w-3xl">
        <p className="mb-4 font-serif text-sm tracking-wider text-primary">
          Sinograph 诠字
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
          Understanding China's AI governance — in their own words
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A living reference to the institutions, relationships, and discourse shaping China's AI
          governance ecosystem
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/voices"
            className="inline-flex items-center justify-center rounded-lg bg-[#9E2B25] px-7 py-4 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#B33A33]"
          >
            Explore Voices →
          </Link>
          <Link
            to="/weekly"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#9E2B25] px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-[#9E2B25]/5"
          >
            This Week's Feed →
          </Link>
        </div>
      </section>

      {/* VOICES PREVIEW */}
      <section className="mt-16 sm:mt-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">Voices</h2>
        <p className="mt-1 text-sm text-muted-foreground">What Chinese AI leaders are saying</p>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VOICE_TOPICS.map((t, i) => (
            <Link
              key={t.title}
              to="/voices"
              search={{ topic: i }}
              className="group relative flex h-[150px] flex-col items-center justify-center overflow-hidden rounded-2xl border-t-[3px] border-t-[#C4443D] bg-gradient-to-b from-[#9E2B25] to-[#7A2220] px-4 text-center shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
            >
              <span
                className="pointer-events-none absolute bottom-0 right-1 select-none text-[80px] leading-none text-white opacity-[0.12] transition-all duration-200 group-hover:scale-110 group-hover:opacity-20"
                style={{ fontFamily: ZH_STACK }}
              >
                {WATERMARKS[i]}
              </span>
              <span className="relative z-10 font-serif text-base font-semibold leading-snug text-white">
                {TAB_LABELS[i]}
              </span>
              <div className="relative z-10 mt-3 h-px w-8 bg-white/30" />
              <span className="relative z-10 mt-3 text-[11px] text-white/90">
                {new Set(t.quotes.map((q) => q.speaker)).size} voices
              </span>
            </Link>
          ))}
        </div>

        <Link
          to="/voices"
          className="mt-5 inline-block text-sm font-medium text-[#9E2B25] underline-offset-4 hover:underline"
        >
          See all voices →
        </Link>
      </section>

      {/* WEEKLY FEED PREVIEW */}
      <section className="mt-16 sm:mt-20">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
          Ecosystem Weekly Feed
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Latest from 14 official WeChat accounts
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {latest.map((item) => (
            <Link
              key={item.titleEn}
              to="/weekly"
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-sm"
            >
              <span className="inline-block rounded border border-border px-2 py-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.source}
              </span>
              <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                {item.titleEn}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </Link>
          ))}
        </div>

        <Link
          to="/weekly"
          className="mt-5 inline-block text-sm font-medium text-[#9E2B25] underline-offset-4 hover:underline"
        >
          See full feed →
        </Link>
      </section>

      {/* ECOSYSTEM AT A GLANCE */}
      <section className="mt-16 border-t border-border pt-10 sm:mt-20">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          The Ecosystem
        </h2>
        <p className="mt-2 font-serif text-base text-muted-foreground">
          <span className="text-primary">90</span> actors ·{" "}
          <span className="text-primary">76</span> verified relationships ·{" "}
          <span className="text-primary">36</span> governance documents
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <QuietCard to="/directory" title="Directory" body="Browse all actors" />
          <QuietCard to="/network" title="Network" body="Explore connections" />
          <QuietCard to="/documents" title="Documents" body="Governance documents" />
        </div>

        <p className="mt-6 text-xs text-muted-foreground">Last updated: July 2026</p>
      </section>
    </div>
  );
}

function QuietCard({ to, title, body }: { to: string; title: string; body: string }) {
  return (
    <Link
      to={to}
      className="group rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/50"
    >
      <p className="font-serif text-lg font-semibold text-foreground group-hover:text-primary">
        {title}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </Link>
  );
}
