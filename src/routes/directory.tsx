import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Directory, type LayerFilter } from "../components/directory";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/directory")({
  validateSearch: (search: Record<string, unknown>): { layer?: LayerFilter } => {
    const l = search.layer;
    return l === "ecosystem" || l === "bridge" ? { layer: l } : {};
  },
  head: () => ({
    meta: [
      { title: "Directory — China AI Governance Map (Sinograph AI)" },
      {
        name: "description",
        content:
          "Browse every actor in China's AI governance map: regulators, research institutes, firms, and the cross-border bridges interpreting them.",
      },
      { property: "og:title", content: "Directory — China AI Governance Map" },
      {
        property: "og:description",
        content:
          "Browse every actor in China's AI governance map: ecosystem institutions and cross-border bridges.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const navigate = useNavigate();
  const { layer } = Route.useSearch();
  return (
    <Directory
      layer={layer ?? "all"}
      onLayerChange={(l) =>
        navigate({ to: "/directory", search: l === "all" ? {} : { layer: l } })
      }
      title={t("directory_title")}
      subtitle={t("directory_sub")}
    />
  );
}
