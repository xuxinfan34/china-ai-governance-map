export type WeeklySourceKind = "gov" | "research" | "media";

export interface WeeklyFeedItem {
  source: string;
  kind: WeeklySourceKind;
  date: string;
  titleEn: string;
  titleZh: string;
  summary: string;
  keyTerm?: string;
  url: string;
}

export const WEEKLY_ITEMS: WeeklyFeedItem[] = [
  {
    source: "CAC",
    kind: "gov",
    date: "July 20, 2026",
    titleZh: "习言道｜人工智能向何处去？习近平强调八个字",
    titleEn: "Xi's Words | Where Is AI Headed? Xi Emphasizes Eight Characters",
    summary:
      "At the 2026 WAIC opening ceremony, Xi Jinping framed AI governance around \"four questions\" and crystallized global AI direction in an eight-character formula: 向上向善、造福人类 (\"upward and toward the good, benefiting humanity\"). His four-point program: build legal, technical, risk, and emergency response systems for baseline safety; oppose the over-broadening of national security concepts in the AI domain; help Global South countries close the digital-intelligence divide; and encourage open-source and open collaboration. Xi emphasized that as AI advances faster, anchoring it to \"upward and toward the good\" becomes more critical.",
    keyTerm:
      "向上向善、造福人类 (upward and toward the good, benefiting humanity) — Xi's newly crystallized eight-character formula for global AI direction, likely to become the standard citation across Chinese AI governance discourse",
    url: "https://mp.weixin.qq.com/s/uYYvMPVqXz5IMcQpBKzKZg",
  },
  {
    source: "CAICT",
    kind: "research",
    date: "July 21, 2026",
    titleZh: "《国际人工智能伦理治理行动计划》发布",
    titleEn: "International AI Ethics Governance Action Plan Released",
    summary:
      "MIIT released the International AI Ethics Governance Action Plan at WAIC 2026 on July 17, positioned within the UN Pact for the Future framework. The plan proposes action initiatives across six directions: broad multi-stakeholder participation in ethics governance; full-lifecycle ethical governance of AI systems; classified-and-graded ethical risk prevention cooperation; agile governance mechanisms; industry-chain ethical governance ecosystems; and public ethical governance culture. The plan gives specific attention to differentiated risk handling for emerging AI forms, including AI agents and embodied AI.",
    url: "https://mp.weixin.qq.com/s/573_HbdEuXugz8brDp9Crw",
  },
  {
    source: "Tsinghua I-AIIG",
    kind: "research",
    date: "July 20, 2026",
    titleZh: "焦点访谈｜人工智能发展的时代之问 中国给出答案",
    titleEn: "Focus Interview | The Era's Question on AI Development — China's Answer",
    summary:
      "I-AIIG reshares a Focus Interview segment unpacking Xi Jinping's WAIC 2026 keynote through four \"era-defining questions\": When machines start to think, how do humans coexist with them? When algorithms participate in decisions, how is safety ensured? When technology challenges ethics, how does governance keep pace? When gaps continue to widen, how is inclusive access achieved? The segment's core answer: countries should embrace a \"human-centered, upward-and-toward-the-good\" approach and jointly build a fair, reasonable global AI governance system. Xi's four points: open-win-win as an innovation driver; risk awareness for security and controllability; inclusive coexistence for civilizational mutual learning; and mutual support to improve global governance.",
    keyTerm:
      "时代之问 (question of the era) — a rhetorically weighted formulation Xi has used repeatedly to frame issues as generation-defining",
    url: "https://mp.weixin.qq.com/s/K5BZyib2NQvIEYe_cOUsUA",
  },
  {
    source: "NDRC",
    kind: "gov",
    date: "July 19, 2026",
    titleZh: "世界人工智能合作组织(WAICO)推进会成功召开",
    titleEn: "World AI Cooperation Organization (WAICO) Advancement Meeting Successfully Held",
    summary:
      "NDRC and MFA jointly convened the WAICO Advancement Meeting in Shanghai on July 17, one day after 29 country representatives signed the establishing agreement (July 16) as founding members. WAICO is positioned as a multilateral cooperation platform grounded in consultation, joint construction, openness, and inclusivity — advancing member-state AI capacity building and governance rule alignment under the \"human-centered, upward-and-toward-the-good\" framework. China presented its AI development and governance experience and proposed cooperation work directions; broad consensus was reached among members on organizational positioning and operations.",
    url: "https://mp.weixin.qq.com/s/d8FBu_sZfGMGesegR4-KSQ",
  },
  {
    source: "Science and Technology Daily",
    kind: "media",
    date: "July 21, 2026",
    titleZh: "确保人工智能造福全人类！中方不只有主张，更有行动",
    titleEn: "Ensuring AI Benefits All Humanity! China Has Not Just Positions, But Actions",
    summary:
      "With WAIC 2026 closing July 20, the founding of WAICO by 29 countries is framed as the conference's most significant outcome. The article traces China's engagement with global AI governance from 2018 to present — from Xi's early initiatives, to 2023's world-first Generative AI regulation and the Global AI Governance Initiative, to the 2025 proposal establishing WAICO and its formal signing this July. The piece also catalogs Chinese enterprises' AI export practice: Huawei's smart rail safety deployment in South Africa, Tencent Cloud's Indonesian enterprise partnerships, SenseTime's efficiency work in Indonesian hospitals, Alibaba's Qwen model supporting Nigerian education applications. Over the next five years, China will provide 5,000 AI training slots for developing countries and establish international AI application cooperation centers with ASEAN, the Arab League, and the African Union.",
    url: "https://mp.weixin.qq.com/s/3xnGafz_BdheqW2DRUmf1w",
  },
];

export const WEEKLY_ITEMS_JULY_27: WeeklyFeedItem[] = [
  {
    source: "NDRC",
    kind: "gov",
    date: "July 30, 2026",
    titleZh: "国家发展改革委召开上半年发展改革形势通报会",
    titleEn: "NDRC Holds First Half 2026 Development and Reform Situation Briefing",
    summary:
      "On July 30, NDRC held its first-half 2026 briefing, outlining eight key priorities for the second half of the year. Among the priorities, the NDRC explicitly called for accelerating benchmark AI applications across manufacturing, agriculture, and energy, and for speeding up the legislative process of the Artificial Intelligence Law — signaling China's continued push to integrate AI into the real economy while advancing a regulatory framework.",
    url: "https://mp.weixin.qq.com/s/xlvvo9YvW71Ax3BkAuOv6w",
  },
  {
    source: "CAC",
    kind: "gov",
    date: "July 31, 2026",
    titleZh: "庄荣文：提高网络生态治理效能 营造风清气正网络空间",
    titleEn: "Zhuang Rongwen: Improving Online Ecosystem Governance to Foster a Clean and Positive Cyberspace",
    summary:
      "In a signed article published in Qiushi journal, CAC Director Zhuang Rongwen outlined priorities for online ecosystem governance, explicitly including AI safety governance as a key component. The article calls for strengthening AI security governance, improving the filing management system for large model services, and refining tiered and classified safety regulatory mechanisms — underscoring CAC's expanding regulatory scope from traditional content governance to oversight of AI systems and infrastructure.",
    url: "https://mp.weixin.qq.com/s/b5x1Rsw2kMi-zVZ4fTMhSQ",
  },
  {
    source: "Science and Technology Daily",
    kind: "media",
    date: "August 1, 2026",
    titleZh: "听说中国开源大模型或遭限制，连美国企业都急了",
    titleEn: "U.S. Companies Sound Alarm Over Potential Restrictions on Chinese Open-Source AI Models",
    summary:
      "U.S. lawmakers are considering restricting access to Chinese open-source large language models, with Senator Tom Cotton requesting a ban on their use by any entity doing business with the U.S. government. In response, nearly 200 Silicon Valley firms and major tech companies including Nvidia, Microsoft, and Meta have urged the administration to reject such restrictions. The article highlights that U.S. companies currently allocate over 30% of their tokens to Chinese open-source models at costs 60–80% lower than U.S. counterparts.",
    url: "https://mp.weixin.qq.com/s/p4EowPHpekqb1Tqdsx2Fbg",
  },
  {
    source: "Shanghai AI Laboratory",
    kind: "research",
    date: "July 29, 2026",
    titleZh: "安全与发展应是同步登山，中外科学家共议AGI时代的安全与治理 | WAIC 2026",
    titleEn: "Safety and Development Should Be Climbed Together: Chinese and International Scientists Discuss AGI Safety and Governance | WAIC 2026",
    summary:
      "During the WAIC 2026 Science Frontier Forum, leading Chinese and international researchers reached a consensus that AI safety must be embedded throughout the entire lifecycle of model design, evaluation, deployment, and governance, rather than treated as an afterthought. Experts argued that as AI systems evolve from content generation to autonomous agents, traditional safety mechanisms are becoming obsolete. The panel debated the \"evidence dilemma\" — whether to wait for conclusive risk evidence before acting, or to act preemptively with incomplete information.",
    url: "https://mp.weixin.qq.com/s/eZBXCZl7MMYuAJna_amNnA",
  },
  {
    source: "CAICT Trustworthy AI Safety Governance",
    kind: "research",
    date: "July 30, 2026",
    titleZh: "智守安全·内容求真——2026年AIIA安全治理委员会专题会成功召开",
    titleEn: "Safeguarding Safety, Pursuing Truth in Content — 2026 AIIA Safety Governance Committee Special Meeting",
    summary:
      "The AIIA Safety Governance Committee held a special meeting in Beijing with nearly 100 participants from CAICT, China Mobile, ByteDance, and iQIYI, focusing on AI-generated content detection, multimodal model content safety, and AI agent security governance. Three outcomes were announced: the release of H1 2026 \"Zhishi Security\" evaluation results, a second batch of GEO service trustworthiness certifications, and the launch of the \"Zhongjian Platform\" — an open multimodal content detection service co-built by CAICT and industry partners.",
    url: "https://mp.weixin.qq.com/s/XIXeKgQtS2SyGOu2ZqxV4g",
  },
  {
    source: "CAICT Trustworthy AI Safety Governance",
    kind: "research",
    date: "July 31, 2026",
    titleZh: "保险赋能人工智能安全治理研讨会顺利召开",
    titleEn: "Insurance-Enabled AI Safety Governance Seminar Successfully Held",
    summary:
      "A seminar on insurance-enabled AI safety governance brought together insurers (China Re, PICC), tech firms (ByteDance, MiniMax, Zhipu AI), and research institutes (CAICT). CAICT, PICC, and China Re have established a tripartite collaboration framework to develop sector-specific assessment standards for AI liability insurance, moving AI safety governance from technical consensus to institutional practice — a notable development in using economic tools alongside regulation.",
    url: "https://mp.weixin.qq.com/s/M8gc13ikAfIhpUkitYO8jw",
  },
  {
    source: "Beijing AISI",
    kind: "research",
    date: "July 28, 2026",
    titleZh: "曾毅教授在CGTN'智能文明'特别节目以'全球人工智能安全与治理'为题发表演讲",
    titleEn: "Professor Zeng Yi Delivers Speech on Global AI Safety and Governance at CGTN's Intelligence Civilization Special Program",
    summary:
      "During WAIC 2026, Professor Zeng Yi warned that frontier AI systems are evolving faster than human capacity to understand and control them. He identified three major challenges: emergent capabilities (models developing unpredicted abilities), alignment drift (AI behavior shifting across contexts, including deliberate fake alignment in testing), and competitive dynamics (safety becoming an afterthought in the race for performance). He called for embedding ethics and safety into AI systems' \"genes\" and emphasized that AI safety is a global public good requiring international cooperation.",
    url: "https://mp.weixin.qq.com/s/pevLAvMBD1YmoKiR7hUDoA",
  },
  {
    source: "Tsinghua CISS",
    kind: "research",
    date: "July 29, 2026",
    titleZh: "肖茜：未来全球AI治理要管控风险，更要创造机会",
    titleEn: "Xiao Qian: Future Global AI Governance Must Manage Risks, But Also Create Opportunities",
    summary:
      "In an interview during WAIC 2026, Xiao Qian argued that global AI governance must move from principles to action through a balanced approach. She identified three key priorities: international cooperation (the newly established WAICO with 29 founding member states), capacity building (China's commitment to provide 5,000 AI training slots for developing countries), and risk governance (enhancing public trust). She noted that China's AI industry advantage lies in vast application scenarios and a healthy industrial ecosystem rather than pure technological breakthroughs.",
    url: "https://mp.weixin.qq.com/s/RVBzaXjI-mHjJHRVDKzjkw",
  },
];