import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { actorById, relationshipsForActor, documentsForActor } from "../../data";

export default defineTool({
  name: "get_actor",
  title: "Get actor",
  description:
    "Get the full profile for a single actor by id, including leadership, relationships (with evidence), and issued governance documents.",
  inputSchema: {
    id: z.string().min(1).describe("Actor id, e.g. 'cac', 'shlab'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const actor = actorById(id);
    if (!actor) {
      return {
        content: [{ type: "text", text: `No actor with id '${id}'.` }],
        isError: true,
      };
    }
    const payload = {
      actor,
      relationships: relationshipsForActor(id),
      documents: documentsForActor(id),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});