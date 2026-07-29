import { defineTool } from "@lovable.dev/mcp-js";
import { WEEKLY_ITEMS } from "../../../data/weekly";

export default defineTool({
  name: "list_weekly_feed",
  title: "List Ecosystem Weekly Feed",
  description:
    "Return the current curated Ecosystem Weekly Feed: translated highlights from Chinese AI governance WeChat sources, with English + Chinese titles, summary, key term (when present), and source URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ count: WEEKLY_ITEMS.length, items: WEEKLY_ITEMS }, null, 2) }],
    structuredContent: { count: WEEKLY_ITEMS.length, items: WEEKLY_ITEMS },
  }),
});