import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { VOICE_TOPICS, type Quote } from "../data/voices";

export const Route = createFileRoute("/voices")({
  head: () => ({
    meta: [
      { title: "Voices — China AI Governance Map" },
      {
        name: "description",
        content:
          "Curated public statements from China's AI governance ecosystem, in Chinese with English translations, organized by topic.",
      },
      { property: "og:title", content: "Voices — China AI Governance Map" },
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

const TAB_LABELS = ["International AI Cooperation", "AI Risk Governance", "Open-Source AI", "Defining AGI"];

function VoicesPage() {
  const [activeTopic, setActiveTopic] = useState(0);
  const topic = VOICE_TOPICS[activeTopic];

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
          This is a curated selection, not a comprehensive survey. Inclusion does not imply
          endorsement; omission does not imply irrelevance.
        </p>
      </header>

      <div className="mt-10 -mx-6 px-6 sm:mx-0 sm:px-0">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {TAB_LABELS.map((label, i) => (
            <button
              key={label}
              onClick={() => setActiveTopic(i)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                i === activeTopic
                  ? "border-[#9E2B25] bg-[#9E2B25] text-white"
                  : "border-border bg-background text-foreground/80 hover:bg-[#9E2B25]/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <section className="mt-6">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {topic.framing}
        </p>
        <div className="mt-8 flex flex-col gap-6">
          {topic.quotes.map((quote, i) => (
            <QuoteCard key={`${topic.title}-${i}`} quote={quote} />
          ))}
        </div>
      </section>
    </div>
  );
}

function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold leading-tight text-foreground">{quote.speaker}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            {quote.affiliation}
          </p>
        </div>
        <p className="shrink-0 text-xs text-muted-foreground">{quote.date}</p>
      </div>

      <blockquote
        className="mt-5 border-l-2 pl-4 text-base leading-[1.9] text-foreground"
        style={{ borderColor: "#9E2B25", fontFamily: CJK_STACK }}
      >
        {quote.zh}
      </blockquote>

      <p className="mt-5 text-xs italic text-muted-foreground">Translation:</p>
      <p className="mt-1 text-sm leading-relaxed text-foreground/90">{quote.en}</p>


      <p className="mt-5 border-t border-border/60 pt-4 text-xs text-muted-foreground">
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
      </p>
    </article>
  );
}