export type Layer = "ecosystem" | "bridge";
export type SafetyRelevance = "core" | "significant" | "contextual";

export interface Actor {
  id: string;
  layer: Layer;
  name_en: string;
  name_zh: string;
  category: string;
  location: string;
  safety_relevance: SafetyRelevance;
  overview: string;
  leadership: { name: string; role: string }[];
  website: string;
  rationale: string;
  related: string[];
  sources?: { label: string; url: string }[];
}

export const ACTORS: Actor[] = [
  {
    id: "cac",
    layer: "ecosystem",
    name_en: "Cyberspace Administration of China",
    name_zh: "国家互联网信息办公室",
    category: "Government – Regulator & Standard-setter",
    location: "Beijing",
    safety_relevance: "core",
    overview:
      "Central internet regulator; lead drafter and enforcer of China's core AI regulations including the generative AI measures.",
    leadership: [{ name: "Zhuang Rongwen", role: "Director" }],
    website: "http://www.cac.gov.cn/",
    rationale:
      "Drafted and enforces the algorithm, deep synthesis, and generative AI rules.",
    related: ["tc260", "miit"],
  },
  {
    id: "shlab",
    layer: "ecosystem",
    name_en: "Shanghai AI Laboratory",
    name_zh: "上海人工智能实验室",
    category: "Research institute – Government-affiliated",
    location: "Shanghai",
    safety_relevance: "core",
    overview:
      "National-level AI lab running the OpenCompass evaluation platform and FLAMES/SALAD-Bench safety benchmarks.",
    leadership: [{ name: "Zhou Bowen", role: "Director & Chief Scientist" }],
    website: "https://www.shlab.org.cn/",
    rationale: "Runs China's most prominent open safety evaluation infrastructure.",
    related: ["cac"],
  },
  {
    id: "tc260",
    layer: "ecosystem",
    name_en: "National Information Security Standardization Technical Committee (TC260)",
    name_zh: "全国信息安全标准化技术委员会",
    category: "Standards body",
    location: "Beijing",
    safety_relevance: "core",
    overview:
      "Sets national cybersecurity and AI-related standards, including the influential generative AI security requirements.",
    leadership: [{ name: "Yang Jianjun", role: "Secretary-General" }],
    website: "https://www.tc260.org.cn/",
    rationale:
      "Authors the technical standards that operationalize China's AI regulations.",
    related: ["cac", "miit"],
  },
  {
    id: "miit",
    layer: "ecosystem",
    name_en: "Ministry of Industry and Information Technology",
    name_zh: "工业和信息化部",
    category: "Government – Regulator & Standard-setter",
    location: "Beijing",
    safety_relevance: "significant",
    overview:
      "Industrial policy ministry overseeing AI industry development, chips, and telecom infrastructure.",
    leadership: [{ name: "Jin Zhuanglong", role: "Minister" }],
    website: "https://www.miit.gov.cn/",
    rationale:
      "Shapes AI industrial policy, hardware supply, and enterprise AI adoption.",
    related: ["cac", "tc260"],
  },
  {
    id: "caict",
    layer: "ecosystem",
    name_en: "China Academy of Information and Communications Technology",
    name_zh: "中国信息通信研究院",
    category: "Research institute – Government-affiliated",
    location: "Beijing",
    safety_relevance: "significant",
    overview:
      "MIIT-affiliated think tank producing influential AI evaluation frameworks and white papers.",
    leadership: [{ name: "Yu Xiaohui", role: "President" }],
    website: "http://www.caict.ac.cn/",
    rationale: "Convenes industry testing and evaluation for trustworthy AI.",
    related: ["miit", "shlab"],
  },
  {
    id: "baai",
    layer: "ecosystem",
    name_en: "Beijing Academy of Artificial Intelligence",
    name_zh: "北京智源人工智能研究院",
    category: "Research institute – Non-profit",
    location: "Beijing",
    safety_relevance: "significant",
    overview:
      "Non-profit research institute known for foundation model work and AI safety research.",
    leadership: [{ name: "Wang Zhongyuan", role: "Director" }],
    website: "https://www.baai.ac.cn/",
    rationale: "Convenes China's leading AI safety and alignment researchers.",
    related: ["shlab"],
  },
  {
    id: "chinai",
    layer: "bridge",
    name_en: "ChinAI Newsletter",
    name_zh: "",
    category: "Bridge – Newsletter",
    location: "Washington DC",
    safety_relevance: "significant",
    overview: "Jeff Ding's weekly translations of Chinese-language writing on AI.",
    leadership: [{ name: "Jeffrey Ding", role: "Author" }],
    website: "https://chinai.substack.com/",
    rationale:
      "The canonical translation channel between Chinese AI discourse and English readers.",
    related: [],
  },
  {
    id: "concordia",
    layer: "bridge",
    name_en: "Concordia AI",
    name_zh: "安远AI",
    category: "Bridge – Organization",
    location: "Beijing",
    safety_relevance: "core",
    overview:
      "Beijing-based social enterprise focused on AI safety and governance dialogue between China and the world.",
    leadership: [{ name: "Brian Tse", role: "Founder & CEO" }],
    website: "https://concordia-ai.com/",
    rationale:
      "Publishes the most detailed English-language mapping of China's AI safety landscape.",
    related: ["chinai", "shlab"],
  },
  {
    id: "chinatalk",
    layer: "bridge",
    name_en: "ChinaTalk",
    name_zh: "",
    category: "Bridge – Podcast",
    location: "Washington DC",
    safety_relevance: "significant",
    overview:
      "Jordan Schneider's newsletter and podcast covering Chinese tech, AI, and industrial policy.",
    leadership: [{ name: "Jordan Schneider", role: "Founder & Host" }],
    website: "https://www.chinatalk.media/",
    rationale:
      "Long-form interviews with policymakers and researchers across the US–China tech divide.",
    related: ["chinai"],
  },
];

export function actorById(id: string): Actor | undefined {
  return ACTORS.find((a) => a.id === id);
}

export const ECOSYSTEM_STATS = {
  ecosystem: 63,
  bridges: 29,
  total: 92,
};