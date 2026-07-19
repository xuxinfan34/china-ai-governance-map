import { createFileRoute } from "@tanstack/react-router";
import { Directory } from "../components/directory";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem Actors — China AI Governance Map (Sinograph AI)" },
      {
        name: "description",
        content:
          "Directory of Chinese regulators, research institutes, standards bodies, and firms shaping AI governance.",
      },
    ],
  }),

  component: Page,
});

function Page() {
  const { t } = useLang();
  return (
    <Directory
      layer="ecosystem"
      title={t("ecosystem_title")}
      subtitle={t("ecosystem_sub")}
    />
  );
}