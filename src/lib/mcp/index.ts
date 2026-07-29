import { defineMcp } from "@lovable.dev/mcp-js";
import listActors from "./tools/list-actors";
import getActor from "./tools/get-actor";
import listRelationships from "./tools/list-relationships";
import listDocuments from "./tools/list-documents";
import listWeeklyFeed from "./tools/list-weekly-feed";

export default defineMcp({
  name: "china-ai-governance-map-mcp",
  title: "China AI Governance Map",
  version: "0.1.0",
  instructions:
    "Read-only reference to China's AI governance ecosystem. Use `list_actors` and `get_actor` to explore regulators, research institutes, companies, and cross-border bridges. Use `list_relationships` for inter-actor ties (joint rulemaking, membership, personnel bridges, etc.), `list_documents` for issued laws/regulations/standards, and `list_weekly_feed` for the latest curated translations from Chinese AI governance WeChat sources.",
  tools: [listActors, getActor, listRelationships, listDocuments, listWeeklyFeed],
});