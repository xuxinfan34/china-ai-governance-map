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
    <div className="mx-auto max-w-5xl px-6 py-8 sm:py-10">
      {/* MASTHEAD */}
      <section className="max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Sinograph
          <span className="font-zh ml-1.5 text-[60%] font-normal text-muted-foreground">
            诠字
          </span>
        </h1>
        <p className="mt-1 text-base text-muted-foreground">
          Understanding China's AI governance — in their own words
        </p>
        <div className="mt-4 flex gap-5 text-sm">
          <Link
            to="/voices"
            className="text-primary underline-offset-4 hover:underline"
          >
            Explore Voices →
          </Link>
          <Link
            to="/weekly"
            className="text-primary underline-offset-4 hover:underline"
          >
            This Week's Feed →
          </Link>
        </div>
      </section>

      {/* VOICES PREVIEW */}
      <section className="mt-10 sm:mt-12">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">Voices</h2>
        <p className="text-sm text-muted-foreground">What Chinese AI leaders are saying</p>

        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {VOICE_TOPICS.map((t, i) => (
            <Link
              key={t.title}
              to="/voices"
              search={{ topic: i }}
              className="group relative flex h-[120px] flex-col items-center justify-center overflow-hidden rounded-xl border-t-[3px] border-t-[#C4443D] bg-gradient-to-b from-[#9E2B25] to-[#7A2220] px-3 text-center transition-colors duration-200 hover:from-[#8E261F] hover:to-[#6D1E1B]"
            >
              <span
                className="pointer-events-none absolute bottom-0 right-1 select-none text-[64px] leading-none text-white opacity-[0.12] transition-opacity duration-200 group-hover:opacity-20"
                style={{ fontFamily: ZH_STACK }}
              >
                {WATERMARKS[i]}
              </span>
              <span className="relative z-10 font-serif text-sm font-semibold leading-snug text-white underline-offset-2 group-hover:underline">
                {TAB_LABELS[i]}
              </span>
              <div className="relative z-10 mt-2 h-px w-8 bg-white/30" />
              <span className="relative z-10 mt-2 text-[11px] text-white/90">
                {new Set(t.quotes.map((q) => q.speaker)).size} voices
              </span>
            </Link>
          ))}
        </div>

        <Link
          to="/voices"
          className="mt-3 inline-block text-sm font-medium text-[#9E2B25] underline-offset-4 hover:underline"
        >
          See all voices →
        </Link>
      </section>

      {/* WEEKLY FEED PREVIEW */}
      <section className="mt-10 sm:mt-12">
        <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Ecosystem Weekly Feed
        </h2>
        <p className="text-sm text-muted-foreground">
          Latest from 14 official WeChat accounts
        </p>

        <div className="mt-4 flex flex-col gap-0">
          {latest.map((item) => (
            <Link
              key={item.titleEn}
              to="/weekly"
              className="group border-t border-border py-4 transition-colors"
            >
              <span className="inline-block text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.source}
              </span>
              <h3 className="mt-2 font-serif text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                {item.titleEn}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </Link>
          ))}
        </div>

        <Link
          to="/weekly"
          className="mt-2 inline-block text-sm font-medium text-[#9E2B25] underline-offset-4 hover:underline"
        >
          See full feed →
        </Link>
      </section>

      {/* ECOSYSTEM AT A GLANCE */}
      <section className="mt-10 border-t border-border pt-6 sm:mt-12">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
          The Ecosystem
        </h2>
        <p className="mt-1 font-serif text-base text-muted-foreground">
          <span className="text-primary">94</span> actors ·{" "}
          <span className="text-primary">133</span> verified relationships ·{" "}
          <span className="text-primary">36</span> governance documents
        </p>

        <div className="mt-4 grid grid-cols-1 gap-0 sm:grid-cols-3">
          <QuietCard to="/directory" title="Directory" body="Browse all actors" />
          <QuietCard to="/network" title="Network" body="Explore connections" />
          <QuietCard to="/documents" title="Documents" body="Governance documents" />
        </div>

        <p className="mt-4 text-xs text-muted-foreground">Last updated: July 2026</p>
      </section>
    </div>
  );
}

function QuietCard({ to, title, body }: { to: string; title: string; body: string }) {
  return (
    <Link
      to={to}
      className="group border-t border-border py-3 transition-colors sm:border-t-0 sm:border-l sm:first:border-l-0"
    >
      <p className="font-serif text-base font-semibold text-foreground group-hover:text-primary">
        {title}
      </p>
      <p className="mt-0.5 text-sm text-muted-foreground">{body}</p>
    </Link>
  );
}

