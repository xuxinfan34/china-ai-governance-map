import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useLang } from "../lib/i18n";

export function SiteNav() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="flex items-baseline gap-3">
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            {t("site_title")}
          </span>
          <span className="hidden font-zh text-sm text-muted-foreground sm:inline">
            中国人工智能治理导航工具
          </span>

        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <NavLink to="/ecosystem">{t("nav_ecosystem")}</NavLink>
          <NavLink to="/bridges">{t("nav_bridges")}</NavLink>
          <NavLink to="/network">{t("nav_network")}</NavLink>
          <NavLink to="/about">{t("nav_about")}</NavLink>
        </nav>
        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Toggle language"
        >
          {t("lang_toggle")}
        </button>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-6 pb-3 text-sm text-muted-foreground md:hidden">
        <NavLink to="/ecosystem">{t("nav_ecosystem")}</NavLink>
        <NavLink to="/bridges">{t("nav_bridges")}</NavLink>
        <NavLink to="/network">{t("nav_network")}</NavLink>
        <NavLink to="/about">{t("nav_about")}</NavLink>
      </nav>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-primary" }}
      className="whitespace-nowrap transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}