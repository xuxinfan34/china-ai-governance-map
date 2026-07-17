import { createFileRoute } from "@tanstack/react-router";
import { Directory } from "../components/directory";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/bridges")({
  head: () => ({
    meta: [
      { title: "Bridges & Interpreters — China AI Governance Map (经纬)" },
      {
        name: "description",
        content:
          "Newsletters, podcasts, organizations, and individuals translating Chinese AI discourse.",
      },
    ],
  }),

  component: Page,
});

function Page() {
  const { t } = useLang();
  return (
    <Directory layer="bridge" title={t("bridges_title")} subtitle={t("bridges_sub")} />
  );
}