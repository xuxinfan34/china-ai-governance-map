import { createFileRoute } from "@tanstack/react-router";
import { DOCUMENTS, type GovDocument } from "../lib/data";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/documents")({
  head: () => ({
    meta: [
      { title: "Sinograph 诠字" },
      {
        name: "description",
        content:
          "A chronological reference of laws, regulations, standards, and guidance documents shaping China's AI governance ecosystem.",
      },
      { property: "og:title", content: "Governance Documents — Sinograph 诠字" },
      {
        property: "og:description",
        content:
          "A chronological reference of laws, regulations, standards, and guidance documents shaping China's AI governance ecosystem.",
      },
    ],
  }),

  component: Page,
});

function Page() {
  const { t, lang } = useLang();

  const grouped = groupDocumentsByYear(DOCUMENTS);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <header className="max-w-2xl border-b border-border pb-8">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Governance Documents
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Laws, regulations, standards, and guidance that shape China's AI governance ecosystem.
        </p>
      </header>

      <div className="mt-10 flex flex-col gap-12">
        {grouped.map(([year, docs]) => (
          <section key={year}>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-foreground">
              {year}
            </h2>
            <div className="flex flex-col gap-4">
              {docs.map((d) => (
                <DocumentCard key={d.id} doc={d} lang={lang} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function DocumentCard({ doc, lang }: { doc: GovDocument; lang: "en" | "zh" }) {
  return (
    <article className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-sm bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
          {doc.doc_type}
        </span>
        <span className="text-xs text-muted-foreground">{doc.status}</span>
      </div>

      <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-foreground">
        <a
          href={doc.official_url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary"
        >
          {doc.title_en}
        </a>
      </h3>
      {doc.title_zh && (
        <p className="mt-1 font-zh text-sm text-muted-foreground">{doc.title_zh}</p>
      )}

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
        <span>Issued: {doc.issued}</span>
        <span>
          Issuers: {doc.issuers_display.length > 0 ? doc.issuers_display.join("; ") : "—"}
        </span>
      </div>

      {doc.translation_url && (
        <div className="mt-3">
          <a
            href={doc.translation_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary hover:underline"
          >
            English translation →
          </a>
        </div>
      )}
    </article>
  );
}

function groupDocumentsByYear(
  docs: GovDocument[],
): [string, GovDocument[]][] {
  const map = new Map<string, GovDocument[]>();

  for (const d of docs) {
    const year = parseYear(d.issued);
    const list = map.get(year) ?? [];
    list.push(d);
    map.set(year, list);
  }

  for (const list of map.values()) {
    list.sort((a, b) => compareDateStrings(a.issued, b.issued));
  }

  return Array.from(map.entries()).sort((a, b) => {
    const na = Number(a[0]);
    const nb = Number(b[0]);
    if (Number.isNaN(na) || Number.isNaN(nb)) return a[0].localeCompare(b[0]);
    return nb - na;
  });
}

function parseYear(issued: string): string {
  const match = issued.match(/\b(\d{4})\b/);
  return match?.[1] ?? "Unknown";
}

function compareDateStrings(a: string, b: string): number {
  const da = parseDate(a);
  const db = parseDate(b);
  if (!da && !db) return a.localeCompare(b);
  if (!da) return 1;
  if (!db) return -1;
  return da.getTime() - db.getTime();
}

function parseDate(issued: string): Date | null {
  const match = issued.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;
  const d = new Date(`${match[1]}-${match[2]}-${match[3]}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? null : d;
}
