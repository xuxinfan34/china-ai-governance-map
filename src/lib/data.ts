import { actors as RAW_ACTORS } from "../data/actors";
import { relationships as RAW_RELATIONSHIPS } from "../data/relationships";
import { documents as RAW_DOCUMENTS } from "../data/documents";

export type Layer = "ecosystem" | "bridge";
export type StakeholderType = "government" | "research" | "company" | "civil";
export type Confidence = string;
export type BridgeType = "newsletter" | "podcast" | "organization" | "individual" | "translation";

export const REL_CATEGORIES = [
  "Joint rulemaking",
  "Institutional relationship",
  "Personnel bridge",
  "Membership",
  "Collaboration",
  "Publication / production",
] as const;
export type RelCategory = (typeof REL_CATEGORIES)[number];

export const STAKEHOLDER_COLORS: Record<StakeholderType, string> = {
  government: "#2E5C8A",
  research: "#4A7C59",
  company: "#C97B3B",
  civil: "#C9A227",
};

export const STAKEHOLDER_LABEL: Record<StakeholderType, { en: string; zh: string }> = {
  government: { en: "Government", zh: "政府" },
  research: { en: "Research", zh: "研究" },
  company: { en: "Company", zh: "企业" },
  civil: { en: "Civil / Association", zh: "行业协会 / 民间" },
};

export const BRIDGE_TYPE_LABEL: Record<BridgeType, { en: string; zh: string }> = {
  newsletter: { en: "Newsletter", zh: "通讯" },
  podcast: { en: "Podcast", zh: "播客" },
  organization: { en: "Organization", zh: "机构" },
  individual: { en: "Individual", zh: "个人" },
  translation: { en: "Translation project", zh: "翻译项目" },
};

export interface Actor {
  id: string;
  layer: Layer;
  name_en: string;
  name_zh: string;
  short_name: string;
  category: string;
  stakeholder_type: StakeholderType;
  bridge_type?: BridgeType;
  location: string;
  overview: string;
  leadership: { name: string; role: string }[];
  website: string;
  wikipedia?: string;
  related?: string[];
}

export interface Relationship {
  id: string;
  source: string;
  target: string;
  type: string;
  category: string;
  basis?: string;
  direction: string;
  summary: string;
  instrument?: string;
  status: string;
  confidence: Confidence;
  evidence_url: string;
  evidence_title: string;
  evidence_lang: string;
  evidence_date: string;
  notes?: string;
}

export interface GovDocument {
  id: string;
  title_en: string;
  title_zh: string;
  doc_type: string;
  issuers: string[];
  issuers_display: string[];
  issued: string;
  status: string;
  relevance?: string;
  official_url: string;
  translation_url?: string;
}

function deriveStakeholder(category: string): StakeholderType {
  const c = category.toLowerCase();
  if (c.startsWith("government")) return "government";
  if (c.startsWith("research institute") || c.includes("academia")) return "research";
  if (c.startsWith("ai company") || c.startsWith("ai safety company")) return "company";
  return "civil";
}

function deriveBridgeType(category: string): BridgeType | undefined {
  const c = category.toLowerCase();
  if (!c.startsWith("bridge")) return undefined;
  if (c.includes("newsletter") && c.includes("podcast")) return "podcast";
  if (c.includes("newsletter") || c.includes("substack")) return "newsletter";
  if (c.includes("podcast")) return "podcast";
  if (c.includes("translation")) return "translation";
  if (c.includes("individual")) return "individual";
  return "organization";
}

export const ACTORS: Actor[] = RAW_ACTORS.map((a): Actor => ({
  id: a.id,
  layer: a.layer as Layer,
  name_en: a.name_en,
  name_zh: a.name_zh,
  short_name: (a as any).short_name ?? a.name_en,
  category: a.category,
  stakeholder_type: deriveStakeholder(a.category),
  bridge_type: deriveBridgeType(a.category),
  location: "",
  overview: a.overview,
  leadership: a.leadership ? a.leadership.map((l) => ({ name: l.name, role: l.role })) : [],
  website: a.website ?? "",
}));

export const RELATIONSHIPS: Relationship[] = RAW_RELATIONSHIPS.map((r): Relationship => ({
  id: r.id,
  source: r.source,
  target: r.target,
  type: r.type,
  category: r.category,
  basis: r.basis,
  direction: r.direction,
  summary: r.summary,
  instrument: r.instrument,
  status: r.status,
  confidence: r.confidence,
  evidence_url: r.evidence?.url ?? "",
  evidence_title: r.evidence?.title ?? "",
  evidence_lang: r.evidence?.lang ?? "",
  evidence_date: r.evidence_date ?? "",
  notes: r.notes,
}));

export const DOCUMENTS: GovDocument[] = RAW_DOCUMENTS.map((d): GovDocument => ({
  id: d.id,
  title_en: d.title_en,
  title_zh: d.title_zh,
  doc_type: d.doc_type,
  issuers: (d.issuers ?? []).flatMap((i) => (i.id ? [i.id as string] : [])),
  issuers_display: (d.issuers ?? []).map((i) => i.name),
  issued: d.issued,
  status: d.status,
  relevance: d.relevance,
  official_url: d.official_url,
  translation_url: d.translation_url || undefined,
}));

export function actorById(id: string): Actor | undefined {
  return ACTORS.find((a) => a.id === id);
}

export function relationshipsForActor(id: string): Relationship[] {
  return RELATIONSHIPS.filter((r) => r.source === id || r.target === id);
}

export function documentsForActor(id: string): GovDocument[] {
  return DOCUMENTS.filter((d) => d.issuers.includes(id));
}

export const ECOSYSTEM_STATS = {
  ecosystem: ACTORS.filter((a) => a.layer === "ecosystem").length,
  bridges: ACTORS.filter((a) => a.layer === "bridge").length,
  relationships: RELATIONSHIPS.length,
};
