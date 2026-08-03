import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { WEEKLY_ITEMS, type WeeklyFeedItem, type WeeklySourceKind } from "../data/weekly";
import { findActorByName } from "../lib/crosslinks";



export const Route = createFileRoute("/weekly")({
  head: () => ({
    meta: [
      { title: "Ecosystem Weekly Feed — China AI Governance Map" },
      {
        name: "description",
        content:
          "Curated weekly highlights from official Chinese AI governance WeChat accounts, translated for English-speaking readers.",
      },
      { property: "og:title", content: "Ecosystem Weekly Feed — China AI Governance Map" },
      {
        property: "og:description",
        content:
          "AI governance discourse from five Chinese sources, curated and translated weekly.",
      },
    ],
  }),
  component: WeeklyFeed,
});

function sourceColor(kind: WeeklySourceKind): string {
  return kind === "gov" ? "#9E2B25" : "#2A2A2A";
}

function WeeklyFeed() {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

  const weeks = [
    {
      label: "Week of July 19–26, 2026",
      items: WEEKLY_ITEMS,
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Ecosystem Weekly Feed
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          AI governance discourse from five Chinese sources, curated and translated weekly
        </p>
        <p className="mt-6 text-sm leading-relaxed text-foreground/80">
          Many actors in China's AI governance ecosystem publish primarily on WeChat, in
          Chinese. This feed makes a curated selection of their weekly output accessible to
          English-speaking analysts. Sources include: NDRC, CAC, Science and Technology Daily,
          CAICT, CAICT Trustworthy AI Safety Governance, SAC, AIIA, Tsinghua CISS, Tsinghua AIR,
          Tsinghua I-AIIG, Peking Institute for AI, Beijing AISI, Concordia AI, and Fungimind.
        </p>
      </header>

      <div className="mt-12 flex flex-col gap-4">
        {weeks.map((week, i) => {
          const isOpen = activeWeek === i;
          return (
            <section key={week.label} className="">
              <button
                onClick={() => setActiveWeek(isOpen ? null : i)}
                className={`flex w-full items-center justify-between rounded-r-xl border border-l-[#9E2B25] border-border bg-[#FDFBF7] px-6 py-4 text-left shadow-sm transition-all duration-200 hover:bg-[#F5F0E8] hover:shadow-md ${
                  isOpen ? "border-l-[6px] bg-[#F5F0E8]" : "border-l-4"
                }`}
                aria-expanded={isOpen}
              >
                <span className="font-serif text-xl font-semibold tracking-tight text-[#2A2A2A]">
                  {week.label}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {week.items.length} articles
                  </span>
                  <span
                    className="text-sm text-muted-foreground transition-transform duration-200"
                    aria-hidden="true"
                  >
                    {isOpen ? "▾" : "▸"}
                  </span>
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-4 flex flex-col gap-8">
                    {week.items.map((item) => (
                      <WeeklyCard key={item.url} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function WeeklyCard({ item }: { item: WeeklyFeedItem }) {
  const sourceActor = findActorByName(item.source);
  const badgeClass =
    "rounded-full border border-border/60 bg-background/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider";
  return (
    <article className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        {sourceActor ? (
          <Link
            to="/actors/$id"
            params={{ id: sourceActor.id }}
            className={`${badgeClass} transition-colors hover:border-primary`}
            style={{ color: sourceColor(item.kind) }}
          >
            {item.source}
          </Link>
        ) : (
          <span className={badgeClass} style={{ color: sourceColor(item.kind) }}>
            {item.source}
          </span>
        )}
        <span className="text-xs text-muted-foreground">{item.date}</span>
      </div>

      <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-foreground">
        {item.titleEn}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{item.titleZh}</p>

      <p className="mt-4 text-base leading-relaxed text-foreground/85">{item.summary}</p>

      {item.keyTerm && (
        <p className="mt-4 text-sm italic text-muted-foreground">
          Key term preserved: {item.keyTerm}
        </p>
      )}

      <div className="mt-6">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          Read original on WeChat →
        </a>
      </div>
    </article>
  );
}
