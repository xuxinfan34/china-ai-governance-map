import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { VOICE_TOPICS, type Quote } from "../data/voices";
import { findActorByName } from "../lib/crosslinks";

export const Route = createFileRoute("/voices")({
  validateSearch: (search: Record<string, unknown>): { topic?: number } => {
    const t = Number(search.topic);
    return Number.isInteger(t) && t >= 0 && t < 4 ? { topic: t } : {};
  },
  head: () => ({
    meta: [
      { title: "Sinograph 诠字" },
      {
        name: "description",
        content:
          "Curated public statements from China's AI governance ecosystem, in Chinese with English translations, organized by topic.",
      },
      { property: "og:title", content: "Voices — Sinograph 诠字" },
      {
        property: "og:description",
        content:
          "How Chinese AI governance actors frame international cooperation, risk, agent liability, and open source — in their own words.",
      },
    ],
  }),
  component: VoicesPage,
});

const CJK_STACK = '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
const ZH_STACK = '"Noto Serif SC", "Songti SC", "SimSun", serif';

const WATERMARKS = ["合", "治", "开", "智"];

const TAB_LABELS = ["International AI Cooperation", "AI Risk Governance", "Open-Source AI", "Defining AGI"];

function VoicesPage() {
  const { topic: topicParam } = Route.useSearch();
  const [activeTopic, setActiveTopic] = useState<number | null>(topicParam ?? null);
  const topic = activeTopic === null ? null : VOICE_TOPICS[activeTopic];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Voices
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Public statements from China's AI governance ecosystem, organized by topic
        </p>
        <p className="mt-6 text-sm leading-relaxed text-foreground/80">
          Understanding how to engage with Chinese AI governance actors requires knowing how
          they frame key issues publicly. This page curates notable statements from official
          speeches, government releases, and institutional publications — presented in Chinese
          with English translations. Statements are time-stamped and sourced; readers are
          encouraged to consult the originals for full context.
        </p>
        <p className="mt-4 text-xs italic leading-relaxed text-muted-foreground">
          This is a curated selection of public statements, not a comprehensive survey of
          Chinese AI discourse. Curation involves editorial choices — different curators would
          select different quotes. Public statements reflect strategic communication, not
          necessarily private positions or operational intent. Readers are encouraged to
          consult original sources and triangulate with other perspectives.
        </p>
      </header>

      {topic === null ? (
        <section className="mt-10 grid animate-fade-in grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VOICE_TOPICS.map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActiveTopic(i)}
              className="group relative flex h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border-t-[3px] border-t-[#C4443D] bg-gradient-to-b from-[#9E2B25] to-[#7A2220] px-6 text-center shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg"
            >
              <span
                className="pointer-events-none absolute bottom-1 right-2 select-none text-[120px] leading-none text-white opacity-[0.12] transition-all duration-200 group-hover:scale-110 group-hover:opacity-20"
                style={{ fontFamily: ZH_STACK }}
              >
                {WATERMARKS[i]}
              </span>
              <span className="relative z-10 font-serif text-2xl font-semibold leading-snug text-white">
                {TAB_LABELS[i]}
              </span>
              <div className="relative z-10 mt-4 h-px w-10 bg-white/30" />
              <span className="relative z-10 mt-4 text-xs text-white/90">
                {new Set(t.quotes.map((q) => q.speaker)).size} voices
              </span>
            </button>
          ))}
        </section>
      ) : (
        <section className="mt-10 animate-fade-in">
          <button
            onClick={() => setActiveTopic(null)}
            className="text-sm font-medium text-[#9E2B25] underline-offset-4 hover:underline"
          >
            ← All Topics
          </button>
          <h2 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-foreground">
            {TAB_LABELS[activeTopic ?? 0]}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {topic.framing}
          </p>
          <div className="mt-8 flex flex-col gap-6">
            {groupBySpeaker(topic.quotes).map((group) => (
              <QuoteCard key={group.speaker} group={group} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function groupBySpeaker(quotes: Quote[]): { speaker: string; affiliation: string; quotes: Quote[] }[] {
  const map = new Map<string, { speaker: string; affiliation: string; quotes: Quote[] }>();
  for (const quote of quotes) {
    const existing = map.get(quote.speaker);
    if (existing) {
      existing.quotes.push(quote);
    } else {
      map.set(quote.speaker, {
        speaker: quote.speaker,
        affiliation: quote.affiliation,
        quotes: [quote],
      });
    }
  }
  return Array.from(map.values());
}

function QuoteCard({ group }: { group: { speaker: string; affiliation: string; quotes: Quote[] } }) {
  return (
    <article className="border-t border-border pt-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold leading-tight text-foreground">{group.speaker}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            <AffiliationLinks affiliation={group.affiliation} />
          </p>
        </div>
        {group.quotes.length > 1 && (
          <p className="shrink-0 text-xs text-muted-foreground">{group.quotes.length} quotes</p>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-5">
        {group.quotes.map((quote, i) => (
          <div key={i} className={i > 0 ? "border-t border-border/60 pt-5" : ""}>
            <p className="text-base leading-relaxed text-foreground">{quote.en}</p>

            <p className="mt-5 text-xs italic text-muted-foreground">Original:</p>
            <blockquote
              className="mt-1 border-l-2 pl-4 text-sm leading-[1.9] text-muted-foreground"
              style={{ borderColor: "#9E2B25", fontFamily: CJK_STACK }}
            >
              {quote.zh}
            </blockquote>

            <p className="mt-5 text-xs text-muted-foreground">
              {quote.url ? (
                <a
                  href={quote.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-2 hover:text-primary"
                >
                  {quote.sourceTitle}
                </a>
              ) : (
                <span className="text-foreground">{quote.sourceTitle}</span>
              )}
              <span> · {quote.sourceType}</span>
              <span className="ml-2 text-muted-foreground/80">{quote.date}</span>
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function AffiliationLinks({ affiliation }: { affiliation: string }) {
  const parts = affiliation.split(";");
  return (
    <>
      {parts.map((part, i) => {
        const actor = findActorByName(part.trim());
        return (
          <span key={i}>
            {i > 0 && "; "}
            {actor ? (
              <Link
                to="/actors/$id"
                params={{ id: actor.id }}
                className="underline decoration-dotted underline-offset-2 hover:text-primary"
              >
                {part.trim()}
              </Link>
            ) : (
              part.trim()
            )}
          </span>
        );
      })}
    </>
  );
}
