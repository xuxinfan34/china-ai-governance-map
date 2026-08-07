import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sinograph 诠字" },
      {
        name: "description",
        content:
          "A living reference to the institutions, relationships, and discourse shaping China's AI governance ecosystem — voices, weekly feed, network, and documents.",
      },
      { property: "og:title", content: "Sinograph 诠字" },
      {
        property: "og:description",
        content:
          "A living reference to the institutions, relationships, and discourse shaping China's AI governance ecosystem.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const { t } = useLang();
  const links = [
    { to: "/voices", label: t("nav_voices") },
    { to: "/weekly", label: t("nav_weekly") },
    { to: "/network", label: t("nav_network") },
    { to: "/directory", label: t("nav_directory") },
    { to: "/documents", label: t("nav_documents") },
    { to: "/about", label: t("nav_about") },
  ];

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Sinograph
        <span className="font-zh ml-1.5 text-[60%] font-normal text-muted-foreground">
          诠字
        </span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Understanding China's AI ecosystem — in their own words
      </p>

      <nav className="mt-14 flex flex-wrap justify-center gap-3 text-sm">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="px-4 py-2 text-muted-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
