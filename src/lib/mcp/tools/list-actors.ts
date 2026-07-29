import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { ACTORS } from "../../data";

export default defineTool({
  name: "list_actors",
  title: "List actors",
  description:
    "List actors in China's AI governance ecosystem. Optionally filter by layer (ecosystem = China-based actors; bridge = cross-border interpreters) or stakeholder type.",
  inputSchema: {
    layer: z.enum(["ecosystem", "bridge"]).optional().describe("Filter by layer."),
    stakeholder_type: z
      .enum(["government", "research", "company", "civil"]) 
      .optional()
      .describe("Filter by stakeholder type."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ layer, stakeholder_type }) => {
    const rows = ACTORS.filter(
      (a) =>
        (!layer || a.layer === layer) &&
        (!stakeholder_type || a.stakeholder_type === stakeholder_type),
    ).map((a) => ({
      id: a.id,
      name_en: a.name_en,
      name_zh: a.name_zh,
      short_name: a.short_name,
      layer: a.layer,
      stakeholder_type: a.stakeholder_type,
      bridge_type: a.bridge_type,
      category: a.category,
      website: a.website,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify({ count: rows.length, actors: rows }, null, 2) }],
      structuredContent: { count: rows.length, actors: rows },
    };
  },
});