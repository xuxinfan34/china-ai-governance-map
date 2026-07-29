import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { RELATIONSHIPS, REL_CATEGORIES } from "../../data";

export default defineTool({
  name: "list_relationships",
  title: "List relationships",
  description:
    "List relationships between actors. Optionally filter by category or by actor id (matches either source or target).",
  inputSchema: {
    category: z.enum(REL_CATEGORIES).optional().describe("Relationship category."),
    actor_id: z.string().optional().describe("Filter to relationships touching this actor id."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, actor_id }) => {
    const rows = RELATIONSHIPS.filter(
      (r) =>
        (!category || r.category === category) &&
        (!actor_id || r.source === actor_id || r.target === actor_id),
    );
    return {
      content: [{ type: "text", text: JSON.stringify({ count: rows.length, relationships: rows }, null, 2) }],
      structuredContent: { count: rows.length, relationships: rows },
    };
  },
});