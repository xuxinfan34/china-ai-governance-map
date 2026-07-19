import { useLang } from "../lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col justify-between gap-2 sm:flex-row">
          <p className="font-serif italic">{t("tagline")}</p>
          <p>© {new Date().getFullYear()} China AI Governance Map · Sinograph AI</p>

        </div>
      </div>
    </footer>
  );
}