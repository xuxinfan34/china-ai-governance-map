import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { useLang } from "../lib/i18n";

export function SiteNav() {
  const { t } = useLang();
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            China AI Governance Map
          </span>
          <span className="text-xs text-muted-foreground sm:text-sm">
            An interactive reference to China's AI governance
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <NavLink to="/ecosystem">{t("nav_ecosystem")}</NavLink>
          <NavLink to="/bridges">{t("nav_bridges")}</NavLink>
          <NavLink to="/network">{t("nav_network")}</NavLink>
          <NavLink to="/weekly">{t("nav_weekly")}</NavLink>
          <NavLink to="/about">{t("nav_about")}</NavLink>
        </nav>
      </div>
      <nav className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-6 pb-3 text-sm text-muted-foreground md:hidden">
        <NavLink to="/ecosystem">{t("nav_ecosystem")}</NavLink>
        <NavLink to="/bridges">{t("nav_bridges")}</NavLink>
        <NavLink to="/network">{t("nav_network")}</NavLink>
        <NavLink to="/weekly">{t("nav_weekly")}</NavLink>
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