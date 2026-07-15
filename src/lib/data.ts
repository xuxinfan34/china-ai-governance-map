export type Layer = "ecosystem" | "bridge";
export type SafetyRelevance = "core" | "significant" | "contextual";
export type StakeholderType = "government" | "research" | "company" | "civil";
export type Confidence = "High" | "Medium" | "Low";
export type BridgeType = "newsletter" | "podcast" | "organization" | "individual" | "translation";

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
  category: string;
  stakeholder_type: StakeholderType;
  bridge_type?: BridgeType;
  location: string;
  safety_relevance?: SafetyRelevance;
  overview: string;
  leadership: { name: string; role: string }[];
  website: string;
  rationale?: string;
  related?: string[];
  sources?: { label: string; url: string }[];
}

export interface Relationship {
  id: string;
  source: string;
  target: string;
  type: string;
  direction: "directed" | "undirected";
  summary: string;
  instrument?: string;
  status: "Current" | "Historical";
  confidence: Confidence;
  evidence_url: string;
  evidence_title: string;
  evidence_lang: "Chinese" | "English";
  evidence_date: string;
}

export interface GovDocument {
  id: string;
  title_en: string;
  title_zh: string;
  doc_type: string;
  issuers: string[];
  issued: string;
  status: "In force" | "Draft" | "Superseded";
  official_url: string;
  translation_url?: string;
}

export const ACTORS: Actor[] = [
  {
    id: "cac",
    layer: "ecosystem",
    name_en: "Cyberspace Administration of China",
    name_zh: "国家互联网信息办公室",
    category: "Regulator & standard-setter",
    stakeholder_type: "government",
    location: "Beijing",
    overview:
      "Central internet regulator; lead drafter and enforcer of China's core AI regulations including the generative AI measures.",
    leadership: [{ name: "Zhuang Rongwen", role: "Director" }],
    website: "http://www.cac.gov.cn/",
    rationale: "Drafted and enforces the algorithm, deep synthesis, and generative AI rules.",
    related: ["tc260", "miit", "most"],
  },
  {
    id: "miit",
    layer: "ecosystem",
    name_en: "Ministry of Industry and Information Technology",
    name_zh: "工业和信息化部",
    category: "Industrial policy ministry",
    stakeholder_type: "government",
    location: "Beijing",
    overview:
      "Industrial policy ministry overseeing AI industry development, chips, and telecom infrastructure.",
    leadership: [{ name: "Jin Zhuanglong", role: "Minister" }],
    website: "https://www.miit.gov.cn/",
    related: ["cac", "tc260", "caict"],
  },
  {
    id: "most",
    layer: "ecosystem",
    name_en: "Ministry of Science and Technology",
    name_zh: "科学技术部",
    category: "Science ministry",
    stakeholder_type: "government",
    location: "Beijing",
    overview:
      "Ministry overseeing AI R&D policy and the New Generation AI Development Plan.",
    leadership: [{ name: "Yin Hejun", role: "Minister" }],
    website: "https://www.most.gov.cn/",
    related: ["cac", "baai"],
  },
  {
    id: "tc260",
    layer: "ecosystem",
    name_en: "National Information Security Standardization Technical Committee (TC260)",
    name_zh: "全国信息安全标准化技术委员会",
    category: "Standards body",
    stakeholder_type: "government",
    location: "Beijing",
    overview:
      "Sets national cybersecurity and AI-related standards, including the influential generative AI security requirements.",
    leadership: [{ name: "Yang Jianjun", role: "Secretary-General" }],
    website: "https://www.tc260.org.cn/",
    related: ["cac", "miit"],
  },
  {
    id: "caict",
    layer: "ecosystem",
    name_en: "China Academy of Information and Communications Technology",
    name_zh: "中国信息通信研究院",
    category: "MIIT-affiliated think tank",
    stakeholder_type: "research",
    location: "Beijing",
    overview:
      "MIIT-affiliated think tank producing influential AI evaluation frameworks and white papers.",
    leadership: [{ name: "Yu Xiaohui", role: "President" }],
    website: "http://www.caict.ac.cn/",
    related: ["miit", "shlab"],
  },
  {
    id: "shlab",
    layer: "ecosystem",
    name_en: "Shanghai AI Laboratory",
    name_zh: "上海人工智能实验室",
    category: "Government-affiliated AI lab",
    stakeholder_type: "research",
    location: "Shanghai",
    overview:
      "National-level AI lab running the OpenCompass evaluation platform and FLAMES/SALAD-Bench safety benchmarks.",
    leadership: [{ name: "Zhou Bowen", role: "Director & Chief Scientist" }],
    website: "https://www.shlab.org.cn/",
    related: ["cac", "baai", "caict"],
  },
  {
    id: "baai",
    layer: "ecosystem",
    name_en: "Beijing Academy of Artificial Intelligence",
    name_zh: "北京智源人工智能研究院",
    category: "Non-profit research institute",
    stakeholder_type: "research",
    location: "Beijing",
    overview:
      "Non-profit research institute known for foundation model work and AI safety research.",
    leadership: [{ name: "Wang Zhongyuan", role: "Director" }],
    website: "https://www.baai.ac.cn/",
    related: ["shlab", "most"],
  },
  {
    id: "caai",
    layer: "ecosystem",
    name_en: "Chinese Association for Artificial Intelligence",
    name_zh: "中国人工智能学会",
    category: "Learned society",
    stakeholder_type: "civil",
    location: "Beijing",
    overview:
      "The national learned society for AI research; convenes conferences and expert working groups feeding into standards.",
    leadership: [{ name: "Dai Qionghai", role: "President" }],
    website: "https://www.caai.cn/",
    related: ["tc260", "baai"],
  },
  {
    id: "aiia",
    layer: "ecosystem",
    name_en: "AI Industry Alliance of China",
    name_zh: "中国人工智能产业发展联盟",
    category: "Industry alliance",
    stakeholder_type: "civil",
    location: "Beijing",
    overview:
      "MIIT/CAICT-convened industry alliance producing evaluation specs and coordinating enterprise adoption.",
    leadership: [{ name: "Song Xiangqian", role: "Secretary-General" }],
    website: "http://www.aiiaorg.cn/",
    related: ["caict", "miit"],
  },
  {
    id: "alibaba-damo",
    layer: "ecosystem",
    name_en: "Alibaba DAMO Academy",
    name_zh: "阿里巴巴达摩院",
    category: "Corporate research lab",
    stakeholder_type: "company",
    location: "Hangzhou",
    overview:
      "Alibaba's research arm; developer of the Qwen family of foundation models filed under the CAC generative AI regime.",
    leadership: [{ name: "Zhang Jianfeng", role: "President" }],
    website: "https://damo.alibaba.com/",
    related: ["cac", "shlab"],
  },
  {
    id: "baidu",
    layer: "ecosystem",
    name_en: "Baidu",
    name_zh: "百度",
    category: "AI developer",
    stakeholder_type: "company",
    location: "Beijing",
    overview:
      "Developer of ERNIE Bot, the first generative AI service approved under CAC's registration regime.",
    leadership: [{ name: "Robin Li", role: "Co-founder & CEO" }],
    website: "https://www.baidu.com/",
    related: ["cac", "miit"],
  },
  {
    id: "zhipu",
    layer: "ecosystem",
    name_en: "Zhipu AI",
    name_zh: "智谱AI",
    category: "Foundation-model startup",
    stakeholder_type: "company",
    location: "Beijing",
    overview:
      "Tsinghua-spinout developer of the GLM family; a leading domestic foundation-model company.",
    leadership: [{ name: "Zhang Peng", role: "CEO" }],
    website: "https://www.zhipuai.cn/",
    related: ["baai", "cac"],
  },
  {
    id: "deepseek",
    layer: "ecosystem",
    name_en: "DeepSeek",
    name_zh: "深度求索",
    category: "Foundation-model startup",
    stakeholder_type: "company",
    location: "Hangzhou",
    overview:
      "Open-weights foundation-model developer whose R1 model reshaped international discussion of Chinese AI capability.",
    leadership: [{ name: "Liang Wenfeng", role: "Founder & CEO" }],
    website: "https://www.deepseek.com/",
    related: ["cac"],
  },
  {
    id: "moonshot",
    layer: "ecosystem",
    name_en: "Moonshot AI",
    name_zh: "月之暗面",
    category: "Foundation-model startup",
    stakeholder_type: "company",
    location: "Beijing",
    overview: "Developer of the Kimi assistant; one of China's most-used consumer LLMs.",
    leadership: [{ name: "Yang Zhilin", role: "Founder & CEO" }],
    website: "https://www.moonshot.cn/",
    related: ["cac"],
  },
  {
    id: "tsinghua-iair",
    layer: "ecosystem",
    name_en: "Tsinghua Institute for AI International Governance",
    name_zh: "清华大学人工智能国际治理研究院",
    category: "University research institute",
    stakeholder_type: "research",
    location: "Beijing",
    overview:
      "Tsinghua-based institute producing policy research on AI international governance and China-world dialogue.",
    leadership: [{ name: "Xue Lan", role: "Dean" }],
    website: "https://aiig.tsinghua.edu.cn/",
    related: ["most", "baai"],
  },

  // -------- Bridges & Interpreters --------
  {
    id: "chinai",
    layer: "bridge",
    name_en: "ChinAI Newsletter",
    name_zh: "",
    category: "Weekly translation newsletter",
    stakeholder_type: "civil",
    bridge_type: "newsletter",
    location: "Washington DC",
    overview: "Jeff Ding's weekly translations of Chinese-language writing on AI.",
    leadership: [{ name: "Jeffrey Ding", role: "Author" }],
    website: "https://chinai.substack.com/",
  },
  {
    id: "chinatalk",
    layer: "bridge",
    name_en: "ChinaTalk",
    name_zh: "",
    category: "Newsletter & podcast",
    stakeholder_type: "civil",
    bridge_type: "podcast",
    location: "Washington DC",
    overview:
      "Jordan Schneider's newsletter and podcast covering Chinese tech, AI, and industrial policy.",
    leadership: [{ name: "Jordan Schneider", role: "Founder & Host" }],
    website: "https://www.chinatalk.media/",
  },
  {
    id: "concordia",
    layer: "bridge",
    name_en: "Concordia AI",
    name_zh: "安远AI",
    category: "AI safety social enterprise",
    stakeholder_type: "civil",
    bridge_type: "organization",
    location: "Beijing",
    overview:
      "Beijing-based social enterprise focused on AI safety and governance dialogue between China and the world.",
    leadership: [{ name: "Brian Tse", role: "Founder & CEO" }],
    website: "https://concordia-ai.com/",
  },
  {
    id: "carnegie-china",
    layer: "bridge",
    name_en: "Carnegie China",
    name_zh: "卡内基中国",
    category: "Think tank program",
    stakeholder_type: "research",
    bridge_type: "organization",
    location: "Beijing / Washington DC",
    overview:
      "Carnegie Endowment program producing bilingual analysis of Chinese technology governance.",
    leadership: [{ name: "Paul Haenle", role: "Director" }],
    website: "https://carnegieendowment.org/china/",
  },
  {
    id: "cset",
    layer: "bridge",
    name_en: "Center for Security and Emerging Technology",
    name_zh: "安全与新兴技术中心",
    category: "University research center",
    stakeholder_type: "research",
    bridge_type: "organization",
    location: "Washington DC",
    overview:
      "Georgetown-based center producing English translations and analysis of Chinese AI policy documents.",
    leadership: [{ name: "Dewey Murdick", role: "Director" }],
    website: "https://cset.georgetown.edu/",
  },
  {
    id: "digichina",
    layer: "bridge",
    name_en: "DigiChina",
    name_zh: "",
    category: "Translation & analysis project",
    stakeholder_type: "research",
    bridge_type: "translation",
    location: "Stanford",
    overview:
      "Stanford Cyber Policy Center project translating and analyzing Chinese digital policy.",
    leadership: [{ name: "Graham Webster", role: "Editor-in-chief" }],
    website: "https://digichina.stanford.edu/",
  },
  {
    id: "matt-sheehan",
    layer: "bridge",
    name_en: "Matt Sheehan",
    name_zh: "",
    category: "Individual analyst",
    stakeholder_type: "civil",
    bridge_type: "individual",
    location: "Washington DC",
    overview:
      "Carnegie fellow whose long-form work has shaped English-language understanding of China's generative AI regulation.",
    leadership: [{ name: "Matt Sheehan", role: "Fellow" }],
    website: "https://carnegieendowment.org/experts/1583",
  },
  {
    id: "helen-toner",
    layer: "bridge",
    name_en: "Helen Toner",
    name_zh: "",
    category: "Individual analyst",
    stakeholder_type: "civil",
    bridge_type: "individual",
    location: "Washington DC",
    overview:
      "CSET director of strategy writing on China AI policy and governance for English-speaking audiences.",
    leadership: [{ name: "Helen Toner", role: "Director of Strategy" }],
    website: "https://cset.georgetown.edu/staff/helen-toner/",
  },
];

export const RELATIONSHIPS: Relationship[] = [
  {
    id: "REL-001",
    source: "cac",
    target: "tc260",
    type: "Committee leadership",
    direction: "directed",
    summary: "A CAC deputy director serves as TC260 chair, tying CAC's regulatory priorities to national standard-setting.",
    instrument: "TC260 leadership roster",
    status: "Current",
    confidence: "High",
    evidence_url: "https://www.tc260.org.cn/",
    evidence_title: "全国网络安全标准化技术委员会工作动态",
    evidence_lang: "Chinese",
    evidence_date: "2026-03-31",
  },
  {
    id: "REL-002",
    source: "miit",
    target: "caict",
    type: "Supervisory affiliation",
    direction: "directed",
    summary: "CAICT is the research institute directly affiliated with MIIT.",
    status: "Current",
    confidence: "High",
    evidence_url: "http://www.caict.ac.cn/gywm/",
    evidence_title: "关于我们",
    evidence_lang: "Chinese",
    evidence_date: "2025-01-15",
  },
  {
    id: "REL-003",
    source: "caict",
    target: "aiia",
    type: "Convening body",
    direction: "directed",
    summary: "CAICT hosts the AIIA secretariat and coordinates its evaluation working groups.",
    status: "Current",
    confidence: "High",
    evidence_url: "http://www.aiiaorg.cn/",
    evidence_title: "联盟简介",
    evidence_lang: "Chinese",
    evidence_date: "2025-06-10",
  },
  {
    id: "REL-004",
    source: "cac",
    target: "most",
    type: "Joint issuance",
    direction: "undirected",
    summary: "CAC and MOST co-issued the 2023 Interim Measures for the Management of Generative AI Services.",
    instrument: "Interim Measures for Generative AI Services (2023)",
    status: "Current",
    confidence: "High",
    evidence_url: "http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
    evidence_title: "生成式人工智能服务管理暂行办法",
    evidence_lang: "Chinese",
    evidence_date: "2023-07-13",
  },
  {
    id: "REL-005",
    source: "cac",
    target: "miit",
    type: "Joint issuance",
    direction: "undirected",
    summary: "CAC and MIIT co-issued the deep synthesis and generative AI measures alongside MOST.",
    instrument: "Deep Synthesis Provisions (2022)",
    status: "Current",
    confidence: "High",
    evidence_url: "http://www.cac.gov.cn/2022-12/11/c_1672221949318230.htm",
    evidence_title: "互联网信息服务深度合成管理规定",
    evidence_lang: "Chinese",
    evidence_date: "2022-12-11",
  },
  {
    id: "REL-006",
    source: "shlab",
    target: "cac",
    type: "Evaluation provider",
    direction: "directed",
    summary: "Shanghai AI Lab's OpenCompass evaluations are cited in CAC-supervised generative AI filings.",
    status: "Current",
    confidence: "Medium",
    evidence_url: "https://opencompass.org.cn/",
    evidence_title: "OpenCompass 大模型评测平台",
    evidence_lang: "Chinese",
    evidence_date: "2025-04-01",
  },
  {
    id: "REL-007",
    source: "baidu",
    target: "cac",
    type: "Regulatory filing",
    direction: "directed",
    summary: "Baidu's ERNIE Bot was among the first services registered under CAC's generative AI regime.",
    instrument: "Generative AI service registration list",
    status: "Current",
    confidence: "High",
    evidence_url: "http://www.cac.gov.cn/",
    evidence_title: "生成式人工智能服务备案信息公告",
    evidence_lang: "Chinese",
    evidence_date: "2023-08-31",
  },
  {
    id: "REL-008",
    source: "alibaba-damo",
    target: "cac",
    type: "Regulatory filing",
    direction: "directed",
    summary: "Alibaba's Qwen models are registered under the CAC generative AI regime.",
    status: "Current",
    confidence: "High",
    evidence_url: "http://www.cac.gov.cn/",
    evidence_title: "生成式人工智能服务备案信息公告",
    evidence_lang: "Chinese",
    evidence_date: "2024-01-05",
  },
  {
    id: "REL-009",
    source: "zhipu",
    target: "baai",
    type: "Research collaboration",
    direction: "undirected",
    summary: "Zhipu AI originated from Tsinghua/BAAI-linked research on the GLM model family.",
    status: "Current",
    confidence: "Medium",
    evidence_url: "https://www.baai.ac.cn/",
    evidence_title: "智源研究院年度报告",
    evidence_lang: "Chinese",
    evidence_date: "2024-11-01",
  },
  {
    id: "REL-010",
    source: "caai",
    target: "tc260",
    type: "Standards contribution",
    direction: "directed",
    summary: "CAAI working groups contribute expertise to TC260 AI standards drafting.",
    status: "Current",
    confidence: "Medium",
    evidence_url: "https://www.caai.cn/",
    evidence_title: "中国人工智能学会标准化工作",
    evidence_lang: "Chinese",
    evidence_date: "2025-02-20",
  },
  {
    id: "REL-011",
    source: "tsinghua-iair",
    target: "most",
    type: "Advisory",
    direction: "directed",
    summary: "Tsinghua's AI governance institute advises MOST on international AI governance positions.",
    status: "Current",
    confidence: "Medium",
    evidence_url: "https://aiig.tsinghua.edu.cn/",
    evidence_title: "清华大学人工智能国际治理研究院",
    evidence_lang: "Chinese",
    evidence_date: "2025-05-12",
  },
  {
    id: "REL-012",
    source: "baai",
    target: "shlab",
    type: "Research collaboration",
    direction: "undirected",
    summary: "BAAI and Shanghai AI Lab co-organize foundation-model safety research programs.",
    status: "Current",
    confidence: "Medium",
    evidence_url: "https://www.baai.ac.cn/",
    evidence_title: "智源—上海AI实验室联合项目",
    evidence_lang: "Chinese",
    evidence_date: "2025-06-18",
  },
];

export const DOCUMENTS: GovDocument[] = [
  {
    id: "doc-genai-2023",
    title_en: "Interim Measures for the Management of Generative AI Services",
    title_zh: "生成式人工智能服务管理暂行办法",
    doc_type: "Administrative measure",
    issuers: ["cac", "most", "miit"],
    issued: "2023-07",
    status: "In force",
    official_url: "http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
    translation_url: "https://digichina.stanford.edu/",
  },
  {
    id: "doc-deepsyn-2022",
    title_en: "Provisions on the Administration of Deep Synthesis Internet Information Services",
    title_zh: "互联网信息服务深度合成管理规定",
    doc_type: "Administrative provision",
    issuers: ["cac", "miit", "most"],
    issued: "2022-12",
    status: "In force",
    official_url: "http://www.cac.gov.cn/2022-12/11/c_1672221949318230.htm",
  },
  {
    id: "doc-algo-2021",
    title_en: "Provisions on the Management of Algorithmic Recommendations",
    title_zh: "互联网信息服务算法推荐管理规定",
    doc_type: "Administrative provision",
    issuers: ["cac"],
    issued: "2021-12",
    status: "In force",
    official_url: "http://www.cac.gov.cn/2022-01/04/c_1642894606364259.htm",
  },
];

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
  ecosystem: 61,
  bridges: 27,
  relationships: 86,
};