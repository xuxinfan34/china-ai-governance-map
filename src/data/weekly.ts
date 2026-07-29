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