import { createFileRoute } from "@tanstack/react-router";
import { WEEKLY_ITEMS, type WeeklySourceKind } from "../data/weekly";

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

      <h2 className="mt-12 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Week of July 19–26, 2026
      </h2>

      <div className="mt-6 flex flex-col gap-8">
        {WEEKLY_ITEMS.map((item) => (
          <article
            key={item.url}
            className="rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className="rounded-full border border-border/60 bg-background/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
                style={{ color: sourceColor(item.kind) }}
              >
                {item.source}
              </span>
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </div>

            <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-foreground">
              {item.titleEn}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.titleZh}</p>

            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              {item.summary}
            </p>

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
        ))}
      </div>
    </div>
  );
}