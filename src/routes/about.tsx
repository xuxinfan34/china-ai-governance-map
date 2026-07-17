import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — China AI Governance Map (经纬)" },
      { name: "description", content: "Methodology and inclusion criteria." },
    ],
  }),

  component: Page,
});

function Page() {
  const { t } = useLang();
  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {t("about_title")}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-foreground/80">{t("about_body")}</p>
      <hr className="my-10 border-border" />
      <p className="font-serif italic text-muted-foreground">
        Methodology · Inclusion criteria · Citations — forthcoming.
      </p>
    </article>
  );
}