import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { DOCUMENTS } from "../../data";

export default defineTool({
  name: "list_documents",
  title: "List governance documents",
  description:
    "List Chinese AI governance documents (laws, regulations, standards, guidelines) tracked by the map. Optionally filter by issuer actor id.",
  inputSchema: {
    issuer_id: z.string().optional().describe("Filter to documents issued by this actor id."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ issuer_id }) => {
    const rows = issuer_id ? DOCUMENTS.filter((d) => d.issuers.includes(issuer_id)) : DOCUMENTS;
    return {
      content: [{ type: "text", text: JSON.stringify({ count: rows.length, documents: rows }, null, 2) }],
      structuredContent: { count: rows.length, documents: rows },
    };
  },
});