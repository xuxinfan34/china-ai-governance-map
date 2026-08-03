import { ACTORS, type Actor } from "./data";
import { VOICE_TOPICS, type Quote } from "../data/voices";
import { WEEKLY_ITEMS, type WeeklyFeedItem } from "../data/weekly";

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();
const stripParen = (s: string) => s.replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();

/** Resolve a free-text institution/person name to an actor on the map. */
export function findActorByName(raw: string | undefined | null): Actor | null {
  if (!raw) return null;
  const n = norm(raw);
  const nBare = norm(stripParen(raw));
  for (const a of ACTORS) {
    const cands = [a.name_en, stripParen(a.name_en), a.short_name, a.name_zh].filter(Boolean).map(norm);
    if (cands.some((c) => c && (c === n || c === nBare))) return a;
  }
  // fall back to containment on distinctive names
  let best: Actor | null = null;
  let bestLen = 0;
  for (const a of ACTORS) {
    const cands = [stripParen(a.name_en), a.short_name, a.name_zh].filter(Boolean);
    for (const c of cands) {
      const cn = norm(c);
      if (cn.length < 4) continue;
      if ((n.includes(cn) || nBare.includes(cn)) && cn.length > bestLen) {
        best = a;
        bestLen = cn.length;
      }
      // reverse: the actor's full name contains the queried phrase
      if (nBare.length >= 12 && cn.includes(nBare) && nBare.length > bestLen) {
        best = a;
        bestLen = nBare.length;
      }
    }
  }
  return best;
}

export interface QuoteRef {
  quote: Quote;
  topicIndex: number;
  topicTitle: string;
}

/** Quotes where the actor is the speaker or the speaker's affiliation. */
export function quotesForActor(actor: Actor): QuoteRef[] {
  const out: QuoteRef[] = [];
  VOICE_TOPICS.forEach((topic, topicIndex) => {
    for (const quote of topic.quotes) {
      const bySpeaker = findActorByName(quote.speaker);
      if (bySpeaker?.id === actor.id) {
        out.push({ quote, topicIndex, topicTitle: topic.title });
        continue;
      }
      const parts = quote.affiliation.split(/[;,]/).map((p) => p.trim()).filter(Boolean);
      if (parts.some((p) => findActorByName(p)?.id === actor.id)) {
        out.push({ quote, topicIndex, topicTitle: topic.title });
      }
    }
  });
  return out;
}

/** Weekly feed entries sourced from this actor, most recent first. */
export function weeklyItemsForActor(actor: Actor): WeeklyFeedItem[] {
  return WEEKLY_ITEMS.filter((i) => findActorByName(i.source)?.id === actor.id).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Set of actor ids that have at least one quote on the Voices page. */
export const ACTORS_WITH_QUOTES: Set<string> = (() => {
  const set = new Set<string>();
  for (const topic of VOICE_TOPICS) {
    for (const quote of topic.quotes) {
      const s = findActorByName(quote.speaker);
      if (s) set.add(s.id);
      for (const p of quote.affiliation.split(/[;,]/)) {
        const a = findActorByName(p.trim());
        if (a) set.add(a.id);
      }
    }
  }
  return set;
})();
