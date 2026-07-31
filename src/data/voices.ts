export type Quote = {
  speaker: string;
  affiliation: string;
  date: string;
  zh: string;
  en: string;
  keyTerm?: string;
  sourceTitle: string;
  sourceType: string;
  url?: string;
};

export type VoiceTopic = {
  title: string;
  framing: string;
  quotes: Quote[];
};

export const VOICE_TOPICS: VoiceTopic[] = [
  {
    title: "International AI Cooperation",
    framing:
      "How should the world govern AI across borders? Chinese institutions are advancing a specific vision: multilateral cooperation anchored in the UN system, with new China-initiated bodies like WAICO as operational vehicles, and explicit emphasis on Global South inclusion. These statements from mid-2026 illustrate how different actors within the ecosystem frame this vision — and where engagement opportunities may exist.",
    quotes: [
      {
        speaker: "Xue Lan (薛澜)",
        affiliation:
          "Chair of Academic Committee, Tsinghua Center for Strategy and Security; Dean of Schwarzman College; Director, Institute for AI International Governance",
        date: "July 18, 2026",
        zh: "人工智能治理如果失去合作性，将无法应对跨境风险；如果失去包容性，将加剧“智能鸿沟”；如果失去合法性，将削弱公众信任。因此，人工智能治理必须回归全球合作的正确轨道，形成将人工智能治理作为“全球公共品”的全球共识和制度认知。",
        en: "If AI governance loses its cooperative character, it will be unable to address cross-border risks. If it loses inclusivity, it will deepen the 'intelligence divide.' If it loses legitimacy, it will erode public trust. AI governance must therefore return to the correct track of global cooperation, building a global consensus and institutional understanding that treats AI governance as a 'global public good.'",
        keyTerm:
          "全球公共品 (global public good) — Positions AI governance itself as non-excludable and non-rivalrous, implying that unilateral or bloc-based approaches are structurally inadequate",
        sourceTitle: "薛澜：全球视野下的人工智能治理 (Tsinghua CSSS WeChat)",
        sourceType: "Commentary",
        url: "https://mp.weixin.qq.com/s/n3nI-lAfSC11HBfJB9ZRTQ",
      },
      {
        speaker: "Xiao Qian (肖茜)",
        affiliation:
          "Deputy Director, Tsinghua Institute for AI International Governance; Deputy Director, Center for Strategy and Security",
        date: "July 17, 2026",
        zh: "由29个国家共同签署的《关于成立世界人工智能合作组织的协定》，是全球AI治理从理念走向制度、从共识走向实践的重要里程碑。",
        en: "The agreement on establishing the World Artificial Intelligence Cooperation Organization, signed by 29 countries, marks a significant milestone in moving global AI governance from principles to institutions, from consensus to practice.",
        keyTerm:
          "从理念走向制度 (from principles to institutions) — Frames WAICO as the moment when Chinese AI governance diplomacy shifted from issuing principles documents to building permanent organizational infrastructure",
        sourceTitle:
          "新华社·肖茜｜未来全球AI治理要管控风险，更要创造机会 (Tsinghua I-AIIG WeChat)",
        sourceType: "State media interview",
        url: "https://mp.weixin.qq.com/s/gVLyGs9D_xd240OM5rZU2w",
      },
      {
        speaker: "Yao Qizhi (姚期智)",
        affiliation:
          "Dean, Tsinghua School of AI; Turing Award laureate; Member, Chinese Academy of Sciences",
        date: "July 18, 2026",
        zh: "我们的目的不是想要独占资源，或者是把别人都抛在后面。但我们一定要自己能够先打开这个大门，让自己处于领跑者的地位，这样才有能力帮助其他的人，帮助南方国家的人，让他们跟我们一起融入这个AI赋能的世界。",
        en: "Our purpose is not to monopolize resources or leave others behind. But we must first open this door ourselves and position ourselves as leaders — only then will we have the capacity to help others, to help Global South countries, and to bring them into this AI-empowered world alongside us.",
        keyTerm:
          "南方国家 (Global South countries) — Signals that China's AI leadership narrative is explicitly framed around South-South solidarity and capacity transfer, not just national competitiveness",
        sourceTitle:
          "专访图灵奖得主姚期智：推动AI普惠共享 呼吁全球协作 (Tsinghua AI School WeChat)",
        sourceType: "Interview",
        url: "https://mp.weixin.qq.com/s/e7r4WuGYSQMMeo6BlWbMrw",
      },
      {
        speaker: "Zeng Yi (曾毅)",
        affiliation:
          "Director, Beijing Institute of AI Safety and Governance; Professor, Renmin University; Member, UN High-Level Advisory Body on AI",
        date: "July 6, 2026",
        zh: "五年前当我们提出构建更合乎伦理和更高安全性的人工智能时，我们就已经探讨了今天讨论的几乎每一个问题，但至今这些问题中没有一个得到解决。我们需要一个能够汇聚193个成员国，共同严肃地探讨和解决这些问题的平台，没有比联合国更合适的汇聚方。",
        en: "Five years ago, when we proposed building more ethical and safer AI, we discussed nearly every issue being debated today — yet none of these problems have been resolved. We need a platform capable of bringing together 193 member states to seriously discuss and solve these problems. There is no more suitable convener than the United Nations.",
        keyTerm:
          "193个成员国 (193 member states) — Explicitly positions the UN as the only legitimate universal platform for AI governance, implicitly contrasting with smaller-group formats like the G7 or the AI Safety Summit series",
        sourceTitle:
          "曾毅在联合国首届人工智能治理全球对话全体会议发言 (Beijing AISI WeChat)",
        sourceType: "UN plenary speech",
        url: "https://mp.weixin.qq.com/s/wotAN9F-r3gMT6yp5Urt2g",
      },
      {
        speaker: "Wei Liang (魏亮)",
        affiliation:
          "Vice President, China Academy of Information and Communications Technology (CAICT)",
        date: "July 17, 2026",
        zh: "依托金砖、G20等多边机制积极贡献人工智能治理“中国方案”。未来将继续坚持开放合作、创新发展，为人工智能立法和政策制定做好坚实支撑，与各方携手共建人工智能法治体系。",
        en: "Leveraging multilateral mechanisms such as BRICS and the G20, we will actively contribute a 'Chinese approach' to AI governance. We will continue to uphold open cooperation and innovative development, provide solid support for AI legislation and policymaking, and work with all parties to jointly build an AI rule-of-law system.",
        keyTerm:
          "中国方案 (Chinese approach/solution) — A standard diplomatic formulation signaling that China views itself as a governance model contributor, not just a rule-taker; the term carries connotations of institutional exportability",
        sourceTitle:
          "直面人工智能治理挑战！这场高级别研讨会聚焦 AI 善治 (CUPL WeChat)",
        sourceType: "Conference speech",
        url: "https://mp.weixin.qq.com/s/TXU3VLf2wAvXvwEtoLCtWg",
      },
    ],
  },
  {
    title: "AI Risk Governance & Agent Liability",
    framing:
      "As AI systems move from passive tools to autonomous agents, how should risk be categorized and responsibility allocated? Chinese scholars and regulators are developing distinctive frameworks — including a three-tier risk taxonomy, 'agile governance' through rapid regulatory iteration, granular authorization models for AI agents, and investments in mechanistic interpretability. These framings directly shape what cooperation on AI safety is possible.",
    quotes: [
      {
        speaker: "Liang Zheng (梁正)",
        affiliation:
          "Deputy Director, Tsinghua I-AIIG; Director, AI Governance Research Center; Professor, School of Public Administration",
        date: "July 2026",
        zh: "从机理上看，人工智能的风险主要来自3个方面。第一类是内生性风险，即技术系统自身特性导致的风险，比如失控。第二类是应用层面的次生风险。第三类是衍生风险，与技术本身及具体用途关系不大，却带来广泛社会影响。",
        en: "Mechanistically, AI risk comes from three sources. The first is endogenous risk — risk arising from the inherent characteristics of the technical system itself, such as loss of control. The second is secondary risk at the application level — misuse, abuse, or deployment in inappropriate contexts. The third is derivative risk — broadly societal impacts like cognitive dependency and job displacement that are not directly caused by the technology itself but by how we structure our relationship with it.",
        keyTerm:
          "内生性风险 / 次生风险 / 衍生风险 (endogenous / secondary / derivative risk) — A three-tier taxonomy that separates technical failure, application-layer misuse, and societal-level disruption into distinct governance buckets requiring different responses",
        sourceTitle:
          "人民日报海外版｜梁正等：当技术挑战伦理，治理如何跟上 (Tsinghua I-AIIG WeChat)",
        sourceType: "People's Daily Overseas Edition interview",
      },
      {
        speaker: "Liang Zheng (梁正)",
        affiliation: "Deputy Director, Tsinghua I-AIIG",
        date: "July 2026",
        zh: "敏捷治理强调因时而变，并根据形势及时调整。在人工智能治理上，我们一直强调“小步快走”。新问题出现时，不要一上来就管死，而应先研判现有治理工具是否够用。",
        en: "Agile governance means adapting to changing conditions and adjusting in real time. For AI governance, we have always emphasized 'small steps, fast pace.' When new problems emerge, don't lock everything down immediately — first assess whether existing governance tools are sufficient.",
        keyTerm:
          "小步快走 (small steps, fast pace) — China's operational regulatory philosophy for AI: iterate rapidly through administrative measures and guidelines rather than waiting for comprehensive legislation. Explains why CAC has issued dozens of sector-specific rules rather than one omnibus AI law",
        sourceTitle:
          "人民日报海外版｜梁正等：当技术挑战伦理，治理如何跟上 (Tsinghua I-AIIG WeChat)",
        sourceType: "People's Daily Overseas Edition interview",
      },
      {
        speaker: "Zhang Linghan (张凌寒)",
        affiliation:
          "Director, AI Law Research Institute, China University of Political Science and Law; Expert, UN AI Advisory Body",
        date: "July 17, 2026",
        zh: "责任认定的首要标准，是看智能体的行为是否处于人类真实、清晰、持续的授权范围内。人类对智能体的授权，不能简单等同于一次性概括同意，而应区分具体场景、行为类型与风险等级——是有限授权、临时授权，还是概括性授权、持续性授权？",
        en: "The primary standard for liability should be whether the agent's behavior falls within the scope of genuine, clear, and continuous human authorization. Human authorization of an AI agent cannot simply be equated with a one-time blanket consent. It must distinguish between specific scenarios, behavior types, and risk levels — is this limited authorization? Temporary? General? Continuous?",
        keyTerm:
          "有限授权 vs 概括性授权 (limited vs. general authorization) — A granular legal framework for AI agent liability that maps authorization types to responsibility allocation; directly relevant to Western debates about AI agent deployment in enterprise and consumer contexts",
        sourceTitle:
          "算法成“看不见的老板”、AI“闯祸”责任归属不明，学者呼吁→ (Pengpai News)",
        sourceType: "Interview",
        url: "https://mp.weixin.qq.com/s/D78fQiJlZrFBVK6GsNxr_A",
      },
      {
        speaker: "Zhang Linghan (张凌寒)",
        affiliation:
          "Director, AI Law Research Institute, China University of Political Science and Law",
        date: "July 17, 2026",
        zh: "当智能体越权，不能只追问使用者，还要回溯模型提供者、平台部署方、应用开发方是否尽到了技术管控、风险提示等注意义务。未来的人工智能责任体系，并非单一主体的单一责任，而是多元主体的责任。",
        en: "When an AI agent exceeds its authority, we cannot only hold the user accountable. We must also trace back to whether the model provider, the platform deployer, and the application developer fulfilled their duty of care — including technical controls and risk warnings. The future AI liability system will not be one actor bearing one responsibility, but multiple actors bearing distributed responsibility.",
        keyTerm:
          "多元主体的责任 (multi-stakeholder liability) — Establishes that China's emerging AI liability framework distributes responsibility across the value chain: developer, provider, deployer, and user — each with distinct obligations",
        sourceTitle:
          "算法成“看不见的老板”、AI“闯祸”责任归属不明，学者呼吁→ (Pengpai News)",
        sourceType: "Interview",
        url: "https://mp.weixin.qq.com/s/D78fQiJlZrFBVK6GsNxr_A",
      },
      {
        speaker: "Tang Jie (唐杰)",
        affiliation: "Founder, Zhipu AI",
        date: "July 2026",
        zh: "当海外最前沿的顶级模型因风险考量而暂缓全面公开发布，其企业负责人公开警示AI的深远影响将深刻重塑全球力量格局时，我们更应清醒：超级智能的实现与超级对齐的研究，必须同步推进。",
        en: "When the most advanced frontier models overseas are delayed from full public release due to risk considerations, and their leaders publicly warn that AI's profound impact will reshape global power structures, we should be even more clear-headed: the pursuit of superintelligence and the research on superalignment must advance in lockstep.",
        keyTerm:
          "超级对齐 (superalignment) — Adopts the frontier-lab vocabulary of aligning superhuman systems, signalling that Chinese labs track the same safety agenda as their Western counterparts",
        sourceTitle: "晚点独家｜唐杰内部信 (LatePost)",
        sourceType: "Internal letter",
        url: "https://mp.weixin.qq.com/s/3CQSkf_kBnXiCDgS4L-Cgg",
      },
      {
        speaker: "Tang Jie (唐杰)",
        affiliation: "Founder, Zhipu AI",
        date: "July 2026",
        zh: "能力越强大，安全约束机制也必须越稳固。智谱创立伊始即确立准则：AI必须服务于人类福祉，服务于国家战略。公司摒弃外挂式安全补丁，坚持将人类伦理、社会规范及国家法律法规作为底层公理写入模型价值函数；计划投入百亿级资源攻坚“机械可解释性”。",
        en: "The more powerful the capability, the more robust the safety constraints must be. From its founding, Zhipu established a principle: AI must serve human welfare and national strategy. The company rejects bolt-on safety patches, instead writing human ethics, social norms, and national laws into the model's value function as foundational axioms. Zhipu plans to invest tens of billions in mechanistic interpretability research.",
        keyTerm:
          "机械可解释性 (mechanistic interpretability) — A concrete, technical research commitment that maps directly onto an active Western safety agenda, making it one of the clearest areas for substantive cooperation",
        sourceTitle: "晚点独家｜唐杰内部信 (LatePost)",
        sourceType: "Internal letter",
        url: "https://mp.weixin.qq.com/s/3CQSkf_kBnXiCDgS4L-Cgg",
      },
      {
        speaker: "Xiao Qian (肖茜)",
        affiliation:
          "Deputy Director, Tsinghua Institute for AI International Governance",
        date: "July 17, 2026",
        zh: "未来全球AI治理不仅要管控风险，更要创造发展机会；不仅要防范技术失控，更要防止发展失衡。",
        en: "Future global AI governance must not only manage risks but also create development opportunities; it must not only prevent technological loss of control but also prevent development imbalances.",
        keyTerm:
          "发展失衡 (development imbalance) — Reframes AI risk beyond the technical to include structural inequality in who benefits from AI; positions the governance challenge as fundamentally about distribution, not just safety",
        sourceTitle:
          "新华社·肖茜｜未来全球AI治理要管控风险，更要创造机会 (Tsinghua I-AIIG WeChat)",
        sourceType: "State media interview",
        url: "https://mp.weixin.qq.com/s/gVLyGs9D_xd240OM5rZU2w",
      },
      {
        speaker: "Zhou Bowen (周伯文)",
        affiliation: "Director and Chief Scientist, Shanghai AI Laboratory",
        date: "July 17, 2026",
        zh: "我们打造了“安全即服务”的书安操作系统，研发了人工智能的内生自主安全架构（R²AI），把防御成功率提升到了42%以上。",
        en: "We have built a 'security-as-a-service' operating system and developed an intrinsic autonomous safety architecture for AI (R²AI — Resilient & Responsible AI), raising defense success rates to over 42%.",
        keyTerm:
          "安全即服务 (security as a service) — Frames AI safety as a productizable capability that can be offered as infrastructure, rather than a compliance burden; reflects China's approach of embedding safety into the AI supply chain",
        sourceTitle:
          "周伯文：AGI的下一程，迎接科学元认知时刻 | WAIC 2026 (Shanghai AI Lab WeChat)",
        sourceType: "Keynote",
        url: "https://mp.weixin.qq.com/s/SGcYrMRBeiRmCcUfmEOWiA",
      },
    ],
  },
  {
    title: "Open-Source AI",
    framing:
      "China's leading AI companies have embraced open-source as a core strategy — but what does that mean in practice? These statements from DeepSeek, Zhipu AI, MiniMax, and Shanghai AI Laboratory reveal a positioning that Western observers may find surprising: open-source as a values proposition rather than a concession, transparency as competitive advantage, and safety through openness rather than through restriction.",
    quotes: [
      {
        speaker: "Liang Wenfeng (梁文锋)",
        affiliation: "Founder, DeepSeek",
        date: "July 2026",
        zh: "我觉得我们是会开源的，然后我们最强的模型可能也是会开源的。因为我看不到闭源什么好处，看不到必然的好处。",
        en: "I think we will open-source, and our strongest models will probably be open-sourced too. Because I can't see any benefit to closed-source — no inevitable advantage.",
        keyTerm:
          "看不到闭源什么好处 (can't see any benefit to closed-source) — A direct inversion of the Western default assumption that proprietary models are commercially necessary; positions open-source as the rational default rather than the idealistic exception",
        sourceTitle: "梁文锋四小时投资人会议实录 (GitHub public archive)",
        sourceType: "Investor meeting transcript",
        url: "https://github.com/0xtresser/Transcript-of-Liang-Wenfengs-DeepSeek-Founder-4-Hour-Investor-Meeting",
      },
      {
        speaker: "Liang Wenfeng (梁文锋)",
        affiliation: "Founder, DeepSeek",
        date: "July 2026",
        zh: "我们给的开源模型，跟我们自己部署的模型是不是一样？是一样的。我们不会说开源一个差点的模型，然后我们自己部署的时候用一个更好的模型，是不会的，是一样的。",
        en: "Is the open-source model we release the same as the one we deploy ourselves? Yes, it's identical. We would never open-source a weaker model and then deploy a better one internally. They are the same.",
        keyTerm:
          "开源模型与自用模型一致 (open-source model identical to self-deployed model) — Directly addresses the 'open-washing' concern where companies release degraded versions while keeping the real model proprietary; positions DeepSeek's transparency as verifiable",
        sourceTitle: "梁文锋四小时投资人会议实录 (GitHub public archive)",
        sourceType: "Investor meeting transcript",
        url: "https://github.com/0xtresser/Transcript-of-Liang-Wenfengs-DeepSeek-Founder-4-Hour-Investor-Meeting",
      },
      {
        speaker: "Liang Wenfeng (梁文锋)",
        affiliation: "Founder, DeepSeek",
        date: "July 2026",
        zh: "在对外面打交道的时候，我们是很愿意协助、帮助任何人，甚至我们的竞争对手，包括阿里、智谱、月之暗面，去做得更好。因为我们并不损失什么东西，我们本来也是开源的。",
        en: "When dealing with the outside world, we are very willing to assist and help anyone — even our competitors, including Alibaba, Zhipu AI, and Moonshot — to do better. Because we don't lose anything by doing so. We're open-source to begin with.",
        keyTerm:
          "协助竞争对手 (assisting competitors) — Challenges the zero-sum framing of AI competition; positions open-source as an ecosystem strategy where helping competitors strengthens the overall ecosystem rather than diminishing the contributor",
        sourceTitle: "梁文锋四小时投资人会议实录 (GitHub public archive)",
        sourceType: "Investor meeting transcript",
        url: "https://github.com/0xtresser/Transcript-of-Liang-Wenfengs-DeepSeek-Founder-4-Hour-Investor-Meeting",
      },
      {
        speaker: "Tang Jie (唐杰)",
        affiliation: "Founder, Zhipu AI",
        date: "July 2026",
        zh: "我们坚信，真正的安全并非建立在技术封闭与壁垒之上，而是源于阳光下广泛的共建、共享与监督。近日，我们发布了迄今能力最强的开源模型GLM-5.2，它支持真正可用的百万（1M）上下文，面向全量用户开放，并将以最宽松的MIT协议正式开源——任何人都可以下载、部署、商用，没有主体界别。",
        en: "We firmly believe that true safety is not built on technological closure and barriers, but emerges from broad co-construction, sharing, and oversight in the open. We recently released GLM-5.2, our most capable open-source model to date, supporting truly usable million-token context. It is open to all users and will be formally open-sourced under the most permissive MIT license — anyone can download, deploy, and commercialize it, with no restrictions on any entity.",
        keyTerm:
          "阳光下的共建、共享与监督 (co-construction, sharing and oversight in the open) — Inverts the closure-equals-safety assumption: openness is presented as the mechanism that produces safety, not a risk to be mitigated",
        sourceTitle: "晚点独家｜唐杰内部信 (LatePost)",
        sourceType: "Internal letter",
        url: "https://mp.weixin.qq.com/s/3CQSkf_kBnXiCDgS4L-Cgg",
      },
      {
        speaker: "Yan Junjie (闫俊杰)",
        affiliation: "Founder and CEO, MiniMax",
        date: "July 10, 2026",
        zh: "未来四年，我将拿出个人名下相当于公司总股本4%的股份，激励那些长期与公司并肩作战、共同创造价值的团队成员；同时，会拿出1%的股份设立专项基金，持续支持相关开源社区的发展。",
        en: "Over the next four years, I will contribute shares equivalent to 4% of the company's total equity to incentivize team members who create long-term value alongside the company. At the same time, I will contribute 1% of shares to establish a dedicated fund for ongoing support of relevant open-source communities.",
        keyTerm:
          "专项基金支持开源社区 (dedicated fund for open-source communities) — Signals open-source as a funded institutional commitment rather than a release policy, tying founder equity to ecosystem maintenance",
        sourceTitle:
          "港股大模型MiniMax股价暴跌，创始人称将不再从公司领取任何薪酬 (Observer Network)",
        sourceType: "Internal letter",
        url: "https://mp.weixin.qq.com/s/CiZAWHdw-o-5RlxCrljkSg",
      },
      {
        speaker: "Zhou Bowen (周伯文)",
        affiliation: "Director and Chief Scientist, Shanghai AI Laboratory",
        date: "July 17, 2026",
        zh: "发布了全球参数规模最大的开源科学大模型书生Intern-S1-Pro，AGI4S珠穆朗玛计划联通全国创新算力和数据，助力全球科研人员向科学高峰攀登。",
        en: "We released Intern-S1-Pro, the world's largest open-source scientific foundation model. The AGI4S Everest Initiative connects innovation computing power and data across China, helping researchers worldwide climb toward scientific frontiers.",
        keyTerm:
          "开源科学大模型 (open-source scientific foundation model) — Positions China's open-source AI strategy as extending beyond commercial models into scientific research infrastructure; frames openness as a tool for global scientific capacity building, not just commercial competition",
        sourceTitle:
          "周伯文：AGI的下一程，迎接科学元认知时刻 | WAIC 2026 (Shanghai AI Lab WeChat)",
        sourceType: "Keynote",
        url: "https://mp.weixin.qq.com/s/SGcYrMRBeiRmCcUfmEOWiA",
      },
    ],
  },
  {
    title: "Defining AGI",
    framing:
      "What does AGI actually mean? There is no consensus — not globally, and not within China's AI industry. These statements from ten Chinese AI leaders reveal strikingly different definitions: AGI as the sum of all human intelligence, as a six-step ladder, as a civilization amplifier, as scientific metacognition, as intelligence made cheap, or as a system that must first answer 'what it means to be human.' The diversity itself is informative — it reveals where China's frontier AI companies see themselves on the path, and what they believe the destination looks like.",
    quotes: [
      {
        speaker: "Tang Jie (唐杰)",
        affiliation: "Founder, Zhipu AI",
        date: "July 2026",
        zh: "我们对AGI有一个朴素而苛刻的定义：AGI不是某一个天才的智慧，而是全人类智慧水平的总和。它理应具备创造出'相对论'级别原创知识的能力，这是我们衡量是否真正到达巅峰的唯一标准。",
        en: "We have a plain but demanding definition of AGI: AGI is not the intelligence of any single genius, but the sum of all human intelligence. It should possess the ability to create original knowledge at the level of a 'theory of relativity.' This is our only standard for measuring whether we have truly reached the summit.",
        sourceTitle: "晚点独家｜唐杰内部信 (LatePost)",
        sourceType: "Internal letter",
        url: "https://mp.weixin.qq.com/s/3CQSkf_kBnXiCDgS4L-Cgg",
      },
      {
        speaker: "Liang Wenfeng (梁文锋)",
        affiliation: "Founder, DeepSeek",
        date: "July 2026",
        zh: "AGI路线图是一个六阶梯的递进结构：语言模型→思维链（CoT）→Agent→持续学习→自我迭代（奇点）→具身智能。Agent要用到CoT，然后CoT也要用到前面的阶梯……它并没有一步是白走的。这个路线图的核心逻辑是：不能跳步。",
        en: "The AGI roadmap is a six-step progression: language model → chain-of-thought (CoT) → agent → continual learning → self-iteration (singularity) → embodied intelligence. Agents require CoT, and CoT requires the previous steps — no step is wasted. The core logic of this roadmap is: you cannot skip steps.",
        sourceTitle: "梁文锋：具身产业还太早，世界模型不是通往AGI的路 (OFweek)",
        sourceType: "Investor meeting",
        url: "https://iot.ofweek.com/2026-07/ART-132215-8470-30695695.html",
      },
      {
        speaker: "Zhu Songchun (朱松纯)",
        affiliation: "Director, Beijing Institute for General Artificial Intelligence (BIGAI); Dean, PKU School of Intelligence",
        date: "July 20, 2026",
        zh: "追问什么是通用人工智能，本质上等同于追问'什么是人'。真正的通用人工智能，应具备高度自主性，能突破预设任务边界，自主生成目标、动态规划行动；拥有具身感知与迁移学习能力；全部行为由内在价值体系驱动，符合人类伦理规范。",
        en: "Asking what AGI is amounts to asking 'what is a human being.' True AGI should possess a high degree of autonomy — capable of breaking beyond preset task boundaries, autonomously generating goals, and dynamically planning actions. It should have embodied perception and transfer learning ability. All its behavior should be driven by an internal value system aligned with human ethical norms.",
        sourceTitle: "WAIC 2026｜朱松纯：通用智能，必须先回答'何以为人' (Guangming Daily)",
        sourceType: "Keynote",
        url: "https://baijiahao.baidu.com/s?id=1871287885074714527",
      },
      {
        speaker: "Zhou Bowen (周伯文)",
        affiliation: "Director and Chief Scientist, Shanghai AI Laboratory",
        date: "July 18, 2026",
        zh: "AGI的下一程，不是让AI更会写代码，而是让它学会知道自己不知道什么。那才是真正的'科学元认知时刻'。",
        en: "The next phase of AGI is not about making AI better at writing code, but about teaching it to know what it doesn't know. That is the true moment of 'scientific metacognition.'",
        sourceTitle: "周伯文：AGI的下一程，迎接科学元认知时刻 | WAIC 2026 (Shanghai AI Lab WeChat)",
        sourceType: "Keynote",
        url: "https://mp.weixin.qq.com/s/SGcYrMRBeiRmCcUfmEOWiA",
      },
      {
        speaker: "Yang Zhilin (杨植麟)",
        affiliation: "Founder, Moonshot AI (Kimi)",
        date: "January 10, 2026",
        zh: "AGI/ASI不是一个普通的工具，它是一个能够彻底改变人类文明的放大器。它能解决我们今天无法单独解决的问题，比如医疗、能源、气候变化这些全球性难题。它是人类认知的延伸，是我们探索未知世界的一把钥匙。",
        en: "AGI/ASI is not an ordinary tool — it is an amplifier capable of fundamentally transforming human civilization. It can solve problems we cannot solve alone today: medicine, energy, climate change. It is an extension of human cognition, a key to exploring the unknown world.",
        sourceTitle: "AGI-Next前沿峰会｜杨植麟：Scaling是能源向智能的转化，AGI是文明放大器 (NetEase)",
        sourceType: "Conference talk",
        url: "https://www.163.com/dy/article/KJ2TEO1Q05568W0A.html",
      },
      {
        speaker: "Li Kaifu (李开复)",
        affiliation: "CEO, 01.AI (Yi); Chairman, Sinovation Ventures",
        date: "July 20, 2026",
        zh: "AI让智力变便宜。工业革命让肌肉变便宜，电气革命让能源变便宜，信息革命让信息人人可得，互联网让连接变便宜，AI让智力变便宜。",
        en: "AI makes intelligence cheap. The industrial revolution made muscle cheap. The electrical revolution made energy cheap. The information revolution made information universally accessible. The internet made connection cheap. AI makes intelligence cheap.",
        sourceTitle: "开复最新演讲：智力正在变便宜，中层的消失只是开始 (大数据文摘 via Sohu)",
        sourceType: "Keynote",
        url: "https://m.sohu.com/a/1053949839_122014422",
      },
      {
        speaker: "Zhu Songchun (朱松纯)",
        affiliation: "Director, Beijing Institute for General Artificial Intelligence (BIGAI)",
        date: "July 20, 2026",
        zh: "人类智能最深刻的特征，在于我们生活在由他人构成的社会世界之中。社会智能是通往AGI的最后屏障，也是中国路线独有的突破口。",
        en: "The most profound characteristic of human intelligence is that we live in a social world constituted by other people. Social intelligence is the final barrier on the road to AGI — and it is the unique breakthrough opportunity for the Chinese approach.",
        sourceTitle: "WAIC 2026｜朱松纯：通用智能，必须先回答'何以为人' (Guangming Daily)",
        sourceType: "Keynote",
        url: "https://baijiahao.baidu.com/s?id=1871287885074714527",
      },
      {
        speaker: "Yan Junjie (闫俊杰)",
        affiliation: "Founder and CEO, MiniMax",
        date: "July 5, 2025",
        zh: "AGI一定会实现，并且一定是服务大众的一件事。AI的模型或者AGI，它应该属于所有AI公司和它的用户，而不是只属于单独一家公司。",
        en: "AGI will certainly be achieved, and it will certainly serve the public. AI models, or AGI, should belong to all AI companies and their users — not to any single company alone.",
        sourceTitle: "MiniMax闫俊杰：AGI要服务大众，属于所有公司和用户 (WAIC 2025)",
        sourceType: "Conference talk",
        url: "",
      },
      {
        speaker: "Eddie Wu (吴泳铭)",
        affiliation: "CEO, Alibaba Group",
        date: "September 24, 2025",
        zh: "实现AGI——一个具备人类水平通用认知的智能系统——现在看来已是必然。然而，AGI并非AI的终点，而是一个新的开始。AI不会止步于AGI，它将迈向ASI——超越人类、能够自我迭代和持续进化的智能。",
        en: "Achieving AGI — an intelligent system with general human-level cognition — now appears inevitable. However, AGI is not AI's endpoint but a new beginning. AI will not stop at AGI; it will advance toward ASI — intelligence that surpasses humanity, capable of self-iteration and continuous evolution.",
        sourceTitle: "Alibaba Gets AGI-pilled (ChinaTalk)",
        sourceType: "Conference keynote",
        url: "https://www.chinatalk.media/p/alibabas-agi-prophecy",
      },
    ],
  },
];
