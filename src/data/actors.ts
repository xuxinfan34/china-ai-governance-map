// Auto-generated from China_AI_Risk_Actors_with_relationships.xlsx
// 89 items | Regenerated: 2026-07-20
// Do not edit by hand.

export type Actor = {
  id: string;
  layer: 'ecosystem' | 'bridge';
  name_en: string;
  name_zh: string;
  category: string;
  overview: string;
  leadership: { name: string; role: string }[];
  website: string;
  wikipedia?: string;
  short_name: string;
};

export const actors: Actor[] = [
  {
    "id": "npc",
    "layer": "ecosystem",
    "name_en": "National People's Congress (NPC)",
    "name_zh": "全国人民代表大会",
    "category": "Government agency – Legislator",
    "overview": "China's national legislature and highest organ of state power. Enacted the foundational laws underpinning AI governance (Cybersecurity Law, Data Security Law, Personal Information Protection Law), and a comprehensive AI Law has been placed on its legislative agenda.",
    "leadership": [
      {
        "name": "Zhao Leji",
        "role": "Chairman of the NPC Standing Committee"
      }
    ],
    "website": "http://www.npc.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/National_People%27s_Congress",
    "short_name": "NPC"
  },
  {
    "id": "cac",
    "layer": "ecosystem",
    "name_en": "Cyberspace Administration of China (CAC)",
    "name_zh": "国家互联网信息办公室",
    "category": "Government agency – Regulator & Standard-setter",
    "overview": "Central regulator for internet-related matters, covering online content, cybersecurity, data security, and personal information protection. Lead drafter and enforcer of China's core AI regulations, including the algorithm recommendation, deep synthesis, and generative AI rules, and operator of the algorithm and generative AI service filing regimes.",
    "leadership": [
      {
        "name": "Zhuang Rongwen",
        "role": "Director"
      }
    ],
    "website": "http://www.cac.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/Cyberspace_Administration_of_China",
    "short_name": "CAC"
  },
  {
    "id": "miit",
    "layer": "ecosystem",
    "name_en": "Ministry of Industry and Information Technology (MIIT)",
    "name_zh": "工业和信息化部",
    "category": "Government agency – Regulator & Standard-setter",
    "overview": "State agency responsible for industry and information technology, overseeing the telecom, software, and AI industries. Co-issuer of key AI regulations, supervisor of CAICT and industry standards work, and a driving force behind AI industry development and safety/testing infrastructure.",
    "leadership": [
      {
        "name": "Li Lecheng",
        "role": "Minister"
      }
    ],
    "website": "https://www.miit.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/Ministry_of_Industry_and_Information_Technology",
    "short_name": "MIIT"
  },
  {
    "id": "most",
    "layer": "ecosystem",
    "name_en": "Ministry of Science and Technology (MOST)",
    "name_zh": "科学技术部",
    "category": "Government agency – Regulator & Standard-setter",
    "overview": "Executive agency for national science and technology strategy. It coordinates implementation of the State Council's New Generation AI Development Plan, supports the New Generation AI Governance Professional Committee, and leads science and technology ethics governance, including ethics-review measures.",
    "leadership": [
      {
        "name": "Yin Hejun",
        "role": "Minister"
      }
    ],
    "website": "https://www.most.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/Ministry_of_Science_and_Technology_(China)",
    "short_name": "MOST"
  },
  {
    "id": "ndrc",
    "layer": "ecosystem",
    "name_en": "National Development and Reform Commission (NDRC)",
    "name_zh": "国家发展和改革委员会",
    "category": "Government agency – Regulator",
    "overview": "China's primary macroeconomic management agency under the State Council. Shapes AI-relevant industrial policy, compute and data infrastructure planning (e.g., national computing networks), and co-issued the generative AI measures.",
    "leadership": [
      {
        "name": "Zheng Shanjie",
        "role": "Director"
      }
    ],
    "website": "https://www.ndrc.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/National_Development_and_Reform_Commission",
    "short_name": "NDRC"
  },
  {
    "id": "mps",
    "layer": "ecosystem",
    "name_en": "Ministry of Public Security (MPS)",
    "name_zh": "公安部",
    "category": "Government agency – Regulator",
    "overview": "Principal police and security authority. Co-issuer and enforcer of AI-related regulations touching public security and law enforcement, including security assessment and filing requirements for algorithmic and generative AI services.",
    "leadership": [
      {
        "name": "Wang Xiaohong",
        "role": "Minister"
      }
    ],
    "website": "https://www.mps.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/Ministry_of_Public_Security_(China)",
    "short_name": "MPS"
  },
  {
    "id": "nrta",
    "layer": "ecosystem",
    "name_en": "National Radio and Television Administration (NRTA)",
    "name_zh": "国家广播电视总局",
    "category": "Government agency – Regulator",
    "overview": "National regulator for broadcasting and audiovisual content; a signatory regulator of the 2023 Interim Measures for Generative AI Services and active in rules on AI-generated audiovisual content.",
    "leadership": [
      {
        "name": "Cao Shumin",
        "role": "Director"
      }
    ],
    "website": "https://www.nrta.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/National_Radio_and_Television_Administration",
    "short_name": "NRTA"
  },
  {
    "id": "samr",
    "layer": "ecosystem",
    "name_en": "State Administration for Market Regulation (SAMR)",
    "name_zh": "国家市场监督管理总局",
    "category": "Government agency – Regulator & Standard-setter",
    "overview": "Ministerial-level market supervision agency responsible for competition, product quality, certification, and national standards administration. Relevant to AI governance through standards (via SAC), certification, and oversight of algorithmic market conduct.",
    "leadership": [
      {
        "name": "Luo Wen",
        "role": "Director"
      }
    ],
    "website": "https://www.samr.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/State_Administration_for_Market_Regulation",
    "short_name": "SAMR"
  },
  {
    "id": "sac",
    "layer": "ecosystem",
    "name_en": "Standardization Administration of China (SAC)",
    "name_zh": "国家标准化管理委员会",
    "category": "Government agency – Standard-setter",
    "overview": "Competent authority for national standardization work, operating under SAMR. Administers China's national standards system, including AI standards, and co-issued the 2024 Guidelines for Building a National AI Industry Comprehensive Standardization System that set targets for AI standards development.",
    "leadership": [
      {
        "name": "Deng Zhiyong",
        "role": "Director"
      }
    ],
    "website": "https://www.sac.gov.cn/AboutSAC/Whoweare/index.html",
    "wikipedia": "https://en.wikipedia.org/wiki/National_Standardization_Administration",
    "short_name": "SAC"
  },
  {
    "id": "moe",
    "layer": "ecosystem",
    "name_en": "Ministry of Education (MOE)",
    "name_zh": "教育部",
    "category": "Government agency – Regulator",
    "overview": "Primary agency for China's education system; increasingly involved in AI governance through rules and guidance on AI use in education, AI literacy, and ethics education, and as a co-issuer of the generative AI measures.",
    "leadership": [
      {
        "name": "Huai Jinpeng",
        "role": "Minister"
      }
    ],
    "website": "http://www.moe.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/Ministry_of_Education_of_the_People%27s_Republic_of_China",
    "short_name": "MOE"
  },
  {
    "id": "mfa",
    "layer": "ecosystem",
    "name_en": "Ministry of Foreign Affairs (MFA)",
    "name_zh": "外交部",
    "category": "Government agency – International governance",
    "overview": "China's central diplomatic agency and a principal international voice on AI governance. Its AI issues page publishes the Global AI Governance Initiative, the Shanghai Declaration, the AI Capacity-Building Action Plan, and the Global AI Governance Action Plan.",
    "leadership": [
      {
        "name": "Wang Yi",
        "role": "Minister"
      }
    ],
    "website": "https://www.mfa.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/Ministry_of_Foreign_Affairs_of_the_People%27s_Republic_of_China",
    "short_name": "MFA"
  },
  {
    "id": "nda",
    "layer": "ecosystem",
    "name_en": "National Data Administration (NDA)",
    "name_zh": "国家数据局",
    "category": "Government agency – Regulator / data governance",
    "overview": "Coordinates national data infrastructure, data standards, and development of data as a production factor. Its work includes high-quality datasets for AI and data-governance arrangements that shape the safety and reliability of AI development.",
    "leadership": [
      {
        "name": "Liu Liehong",
        "role": "Director"
      }
    ],
    "website": "https://www.nda.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/National_Data_Administration",
    "short_name": "NDA"
  },
  {
    "id": "tc260",
    "layer": "ecosystem",
    "name_en": "National Technical Committee 260 on Cybersecurity (TC260)",
    "name_zh": "全国网络安全标准化技术委员会",
    "category": "Government agency – Standard-setter",
    "overview": "National standards body under SAC responsible for cybersecurity, data security, personal information protection, and AI security standards. Author of the AI Safety Governance Framework and the technical standards operationalizing China's generative AI regulations (e.g., GB/T security requirements for generative AI services).",
    "leadership": [
      {
        "name": "Wang Jingtao",
        "role": "Chairman"
      },
      {
        "name": "Yang Xudong",
        "role": "Secretary-General"
      }
    ],
    "website": "https://www.tc260.org.cn/",
    "short_name": "TC260"
  },
  {
    "id": "nai-std-group",
    "layer": "ecosystem",
    "name_en": "National AI Standardization General Group",
    "name_zh": "国家人工智能标准化总体组",
    "category": "Government agency – Standard-setter",
    "overview": "Body established in 2018 under SAC and MIIT guidance, with CESI as group leader, to coordinate the development of China's national AI standards system, including standards relevant to AI safety, risk management, and governance.",
    "leadership": [
      {
        "name": "Zhao Bo",
        "role": "Group Leader"
      },
      {
        "name": "Pan Yunhe",
        "role": "Expert Advisory Group Leader"
      }
    ],
    "website": "https://www.cesi.cn/",
    "short_name": "AI Std Group"
  },
  {
    "id": "st-ethics-committee",
    "layer": "ecosystem",
    "name_en": "National Science and Technology Ethics Committee",
    "name_zh": "国家科技伦理委员会",
    "category": "Government agency – Expert advisory committee",
    "overview": "National expert committee under the Central Science and Technology Commission that guides and coordinates China's science and technology ethics governance system, including AI ethics; associated with the Ethical Norms for New Generation AI and ethics review requirements covering AI research.",
    "leadership": [
      {
        "name": "Ding Xuexiang",
        "role": "director of the Central Science and Technology Commission, which houses this committee"
      }
    ],
    "website": "https://www.most.gov.cn/",
    "short_name": "S&T Ethics Cmte"
  },
  {
    "id": "ai-gov-committee",
    "layer": "ecosystem",
    "name_en": "National New Generation AI Governance Professional Committee",
    "name_zh": "国家新一代人工智能治理专业委员会",
    "category": "Government agency – Expert advisory committee",
    "overview": "Expert advisory body under MOST's New Generation AI Development Plan Promotion Office focused on AI governance and ethics; issued the Governance Principles for New Generation AI – Developing Responsible AI (2019) and the Ethical Norms for New Generation AI (2021).",
    "leadership": [
      {
        "name": "Xue Lan",
        "role": "Chair"
      }
    ],
    "website": "https://www.most.gov.cn/kjbgz/202109/t20210926_177324.html",
    "short_name": "AI Gov Cmte"
  },
  {
    "id": "spc",
    "layer": "ecosystem",
    "name_en": "Supreme People's Court (SPC)",
    "name_zh": "最高人民法院",
    "category": "Government agency – Judiciary",
    "overview": "China's highest judicial body, responsible for adjudication, judicial interpretation, and oversight of all courts. Shapes AI governance through judicial policy — including its 2022 Opinions on regulating and strengthening the judicial application of AI, which set the principle that AI must assist rather than replace human judges — and through guidance on emerging AI-related case law.",
    "leadership": [
      {
        "name": "Zhang Jun",
        "role": "President & Chief Justice"
      }
    ],
    "website": "https://www.court.gov.cn/",
    "wikipedia": "https://en.wikipedia.org/wiki/Supreme_People%27s_Court",
    "short_name": "SPC"
  },
  {
    "id": "internet-courts",
    "layer": "ecosystem",
    "name_en": "Internet Courts (Beijing, Hangzhou & Guangzhou)",
    "name_zh": "互联网法院",
    "category": "Government agency – Judiciary",
    "overview": "Specialized courts established 2017–2018 to hear internet-related cases online. A de facto AI governance channel through precedent-setting rulings on AI-generated content — including the Beijing Internet Court's 2023 decision on copyright in AI-generated images and the Guangzhou Internet Court's 2024 ruling on generative AI platform liability — that define rules ahead of legislation.",
    "leadership": [
      {
        "name": "Jiang Ying",
        "role": "President, Beijing Internet Court"
      }
    ],
    "website": "https://www.bjinternetcourt.gov.cn/",
    "short_name": "Internet Courts"
  },
  {
    "id": "deepseek",
    "layer": "ecosystem",
    "name_en": "DeepSeek",
    "name_zh": "深度求索",
    "category": "AI company",
    "overview": "AI company founded in 2023 and backed by hedge fund High-Flyer, developing frontier open-weight large language models (DeepSeek-V and R series) in pursuit of AGI. Its Nature-published R1 work includes detailed frontier-safety and risk-evaluation disclosures, among the most substantive published by a Chinese lab.",
    "leadership": [
      {
        "name": "Liang Wenfeng",
        "role": "Founder & CEO"
      }
    ],
    "website": "https://www.deepseek.com/",
    "short_name": "DeepSeek"
  },
  {
    "id": "zhipu",
    "layer": "ecosystem",
    "name_en": "Zhipu AI",
    "name_zh": "智谱AI",
    "category": "AI company",
    "overview": "Tsinghua-spun AGI company founded in 2019, creator of the GLM model family. Active participant in Chinese AI safety and governance initiatives, including safety commitments and evaluation work alongside its frontier model development.",
    "leadership": [
      {
        "name": "Zhang Peng",
        "role": "CEO"
      },
      {
        "name": "Tang Jie",
        "role": "Co-founder & Chief Scientist"
      }
    ],
    "website": "https://www.zhipuai.cn/",
    "short_name": "Zhipu AI"
  },
  {
    "id": "moonshot",
    "layer": "ecosystem",
    "name_en": "Moonshot AI",
    "name_zh": "月之暗面",
    "category": "AI company",
    "overview": "LLM startup founded in 2023 pursuing AGI, best known for its Kimi models and assistant. One of China's frontier 'AI Tiger' labs whose model releases and safety practices are closely watched in the ecosystem.",
    "leadership": [
      {
        "name": "Yang Zhilin",
        "role": "Founder & CEO"
      }
    ],
    "website": "https://www.moonshot.ai/",
    "short_name": "Moonshot"
  },
  {
    "id": "minimax",
    "layer": "ecosystem",
    "name_en": "MiniMax",
    "name_zh": "稀宇科技",
    "category": "AI company",
    "overview": "AI company founded in 2022 developing proprietary multimodal foundation models (text, audio, image, video, music) that power consumer products and an open API platform; one of China's frontier model developers with in-house safety functions.",
    "leadership": [
      {
        "name": "Yan Junjie",
        "role": "Co-founder & CEO"
      }
    ],
    "website": "https://www.minimax.io/",
    "short_name": "MiniMax"
  },
  {
    "id": "stepfun",
    "layer": "ecosystem",
    "name_en": "StepFun",
    "name_zh": "阶跃星辰",
    "category": "AI company",
    "overview": "Shanghai-based AI company founded in 2023 by former Microsoft researchers, specializing in multimodal large models (Step series across text, vision, video, and audio); a frontier Chinese model developer engaged in the domestic AI ecosystem.",
    "leadership": [
      {
        "name": "Jiang Daxin",
        "role": "Founder"
      }
    ],
    "website": "https://stepfun.ai/",
    "short_name": "StepFun"
  },
  {
    "id": "alibaba",
    "layer": "ecosystem",
    "name_en": "Alibaba",
    "name_zh": "阿里巴巴集团",
    "category": "AI company",
    "overview": "Technology conglomerate and developer of the Qwen open-weight model family via Alibaba Cloud. A central actor in China's AI ecosystem whose model releases, safety practices, and governance participation (standards, industry alliances) carry system-wide weight.",
    "leadership": [
      {
        "name": "Joe Tsai",
        "role": "Chairman"
      },
      {
        "name": "Eddie Wu",
        "role": "CEO"
      }
    ],
    "website": "https://www.alibabagroup.com/",
    "short_name": "Alibaba"
  },
  {
    "id": "baidu",
    "layer": "ecosystem",
    "name_en": "Baidu",
    "name_zh": "百度",
    "category": "AI company",
    "overview": "Leading AI company with full-stack capabilities from AI chips to the ERNIE model family and applications. Long-standing participant in AI governance, ethics, and standards initiatives, with in-house safety and security functions.",
    "leadership": [
      {
        "name": "Robin Li",
        "role": "Co-founder, Chairman & CEO"
      }
    ],
    "website": "https://www.baidu.com/",
    "short_name": "Baidu"
  },
  {
    "id": "tencent",
    "layer": "ecosystem",
    "name_en": "Tencent",
    "name_zh": "腾讯",
    "category": "AI company",
    "overview": "Technology conglomerate developing the Hunyuan model family and applying AI across social, content, and gaming businesses. Maintains named security research units (e.g., Zhuque Lab) and research arms engaged in AI ethics and governance.",
    "leadership": [
      {
        "name": "Ma Huateng",
        "role": "Co-founder, Chairman & CEO"
      }
    ],
    "website": "https://www.tencent.com/",
    "short_name": "Tencent"
  },
  {
    "id": "bytedance",
    "layer": "ecosystem",
    "name_en": "ByteDance",
    "name_zh": "字节跳动",
    "category": "AI company",
    "overview": "Global technology company (Douyin/TikTok, Toutiao) and developer of the Doubao model family; operates large-scale recommendation systems and AI research teams, making its safety, alignment, and content governance practices highly consequential.",
    "leadership": [
      {
        "name": "Liang Rubo",
        "role": "Chairman"
      }
    ],
    "website": "https://www.bytedance.com/en/",
    "short_name": "ByteDance"
  },
  {
    "id": "china-mobile",
    "layer": "ecosystem",
    "name_en": "China Mobile",
    "name_zh": "中国移动",
    "category": "AI company",
    "overview": "China's largest mobile network operator and state-owned digital infrastructure provider; develops and deploys AI at scale (including the Jiutian model series) and has published analysis on AI security risks and coping strategies.",
    "leadership": [
      {
        "name": "Chen Zhongyue",
        "role": "Chairman"
      },
      {
        "name": "Chen Yangfan",
        "role": "CEO"
      }
    ],
    "website": "https://www.chinamobileltd.com/en/global/home.php",
    "short_name": "China Mobile"
  },
  {
    "id": "ant-group",
    "layer": "ecosystem",
    "name_en": "Ant Group",
    "name_zh": "蚂蚁集团",
    "category": "AI company",
    "overview": "Fintech and technology company (Alipay) that applies AI across finance and has published AI ethics principles to guide its use of intelligent technologies; participates in national AI governance initiatives and international AI safety dialogues.",
    "leadership": [
      {
        "name": "Eric Jing",
        "role": "Chairman"
      }
    ],
    "website": "https://www.antgroup.com/",
    "short_name": "Ant Group"
  },
  {
    "id": "huawei",
    "layer": "ecosystem",
    "name_en": "Huawei",
    "name_zh": "华为",
    "category": "AI company",
    "overview": "A major Chinese AI infrastructure and model developer. It has published an AI Security White Paper and lifecycle-oriented guidance on security and privacy for AI systems.",
    "leadership": [
      {
        "name": "David Wang",
        "role": "Rotating and Acting Chair, Apr–Sep 2026"
      }
    ],
    "website": "https://www.huawei.com/",
    "short_name": "Huawei"
  },
  {
    "id": "sensetime",
    "layer": "ecosystem",
    "name_en": "SenseTime",
    "name_zh": "商汤科技",
    "category": "AI company",
    "overview": "A major Chinese AI company with a Committee of AI Ethics and Governance. It has published a Code of Ethics for AI Sustainable Development and reports certification against the ISO/IEC 42001 AI management-system standard.",
    "leadership": [
      {
        "name": "Xu Li",
        "role": "Co-founder, Executive Chairman & CEO"
      }
    ],
    "website": "https://www.sensetime.com/",
    "short_name": "SenseTime"
  },
  {
    "id": "caict",
    "layer": "ecosystem",
    "name_en": "China Academy of Information and Communications Technology (CAICT)",
    "name_zh": "中国信息通信研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "MIIT-affiliated national think tank and industry platform founded in 1957. A central node for AI policy support, standards, and testing/certification, including AI safety evaluation work such as the Fangsheng AI risk-testing platform, and the operational backbone of the AI Industry Alliance (AIIA).",
    "leadership": [
      {
        "name": "Yu Xiaohui",
        "role": "President"
      }
    ],
    "website": "http://www.caict.ac.cn/",
    "short_name": "CAICT"
  },
  {
    "id": "ccid",
    "layer": "ecosystem",
    "name_en": "China Center for Information Industry Development (CCID)",
    "name_zh": "中国电子信息产业发展研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "Public institution directly under MIIT functioning as a national high-end think tank for the information technology sector, with work spanning policy research, consulting, and evaluation and certification for emerging technologies including AI. A member institution of CnAISDA.",
    "leadership": [
      {
        "name": "Zhang Li",
        "role": "President"
      }
    ],
    "website": "http://www.ccidgroup.com/",
    "short_name": "CCID"
  },
  {
    "id": "cesi",
    "layer": "ecosystem",
    "name_en": "China Electronics Standardization Institute (CESI)",
    "name_zh": "中国电子技术标准化研究院",
    "category": "Research institute – Government-affiliated / standard-setter",
    "overview": "A Ministry of Industry and Information Technology-affiliated institute that conducts electronics and information-technology standardization, testing, and certification. It serves standardization bodies working on AI and has published AI standardization research and guidance.",
    "leadership": [],
    "website": "https://www.cesi.cn/page/",
    "short_name": "CESI"
  },
  {
    "id": "cacs",
    "layer": "ecosystem",
    "name_en": "Chinese Academy of Cyberspace Studies (CACS)",
    "name_zh": "中国网络空间研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "Think tank within China's cyberspace governance system providing research and policy support on cybersecurity, data governance, and cyberspace governance; produces the annual China Internet Development and World Internet Development reports supporting the World Internet Conference.",
    "leadership": [
      {
        "name": "Xia Xueping",
        "role": "president"
      }
    ],
    "website": "https://www.cac.gov.cn/2017-10/09/c_1121779900.htm",
    "short_name": "CACS"
  },
  {
    "id": "drc",
    "layer": "ecosystem",
    "name_en": "Development Research Center of the State Council (DRC)",
    "name_zh": "国务院发展研究中心",
    "category": "Research institute – Government-affiliated",
    "overview": "Policy research institution under the direct leadership of the State Council, providing research and consulting on economic and social development. Contributes to national AI policy thinking on development, industrial transformation, and governance implications of AI.",
    "leadership": [
      {
        "name": "Lu Hao",
        "role": "Director"
      }
    ],
    "website": "https://www.drc.gov.cn/",
    "short_name": "DRC"
  },
  {
    "id": "shlab",
    "layer": "ecosystem",
    "name_en": "Shanghai Artificial Intelligence Laboratory",
    "name_zh": "上海人工智能实验室",
    "category": "Research institute – Government-affiliated",
    "overview": "National-level AI research institution unveiled at WAIC 2020 with a stated vision of open, controllable, and trustworthy AI. Alongside frontier research, it runs prominent safety-relevant efforts including the OpenCompass evaluation platform and the FLAMES and SALAD-Bench safety benchmarks, and hosts the Shanghai AI Safety and Governance Institute.",
    "leadership": [
      {
        "name": "Zhou Bowen",
        "role": "Director & Chief Scientist"
      }
    ],
    "website": "https://www.shlab.org.cn/",
    "short_name": "Shanghai Artif"
  },
  {
    "id": "beijing-aisi",
    "layer": "ecosystem",
    "name_en": "Beijing Institute of AI Safety and Governance (Beijing-AISI)",
    "name_zh": "北京前瞻人工智能安全与治理研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "New-type R&D institution dedicated to AI safety and governance, supervised by the Beijing Municipal Bureau of Economy and Information Technology. Builds systematic safety and governance frameworks, released an AI Application Risk Assessment Tool, and works on AI ethics/safety evaluation systems and a Safe AI foundational model.",
    "leadership": [
      {
        "name": "Yi Zeng",
        "role": "Dean"
      }
    ],
    "website": "https://beijing-aisi.ac.cn/",
    "short_name": "Beijing-AISI"
  },
  {
    "id": "bjlab-safeai",
    "layer": "ecosystem",
    "name_en": "Beijing Key Laboratory for Safe AI and Superalignment",
    "name_zh": "北京市安全人工智能与超级对齐重点实验室",
    "category": "Research institute – Government-affiliated",
    "overview": "Key laboratory led by the CAS Institute of Automation, in collaboration with Peking University and Beijing Normal University, focused on safety risks of frontier AI and research breakthroughs in AI safety and superalignment.",
    "leadership": [],
    "website": "https://brain-cog.ai/safelab",
    "short_name": "BJ Safe AI Lab"
  },
  {
    "id": "baai",
    "layer": "ecosystem",
    "name_en": "Beijing Academy of Artificial Intelligence (BAAI)",
    "name_zh": "北京智源人工智能研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "Non-profit AI research institution established in 2018 and a hub of China's AI research community. Active in AI safety and governance convening, including safety commitments and international dialogues, and a founding member of CnAISDA.",
    "leadership": [
      {
        "name": "Huang Tiejun",
        "role": "Chairman"
      },
      {
        "name": "Wang Zhongyuan",
        "role": "President"
      }
    ],
    "website": "https://www.baai.ac.cn/",
    "short_name": "BAAI"
  },
  {
    "id": "bigai",
    "layer": "ecosystem",
    "name_en": "Beijing Institute for General Artificial Intelligence (BIGAI)",
    "name_zh": "北京通用人工智能研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "Non-profit research institute supported by the Beijing municipal government and MOST, in partnership with Peking and Tsinghua Universities, pursuing a unified theory of general intelligent agents; engages with AI safety and governance questions around AGI development.",
    "leadership": [
      {
        "name": "Zhu Songchun",
        "role": "Founder & Dean"
      }
    ],
    "website": "https://www.bigai.ai/",
    "short_name": "BIGAI"
  },
  {
    "id": "casia-aieg",
    "layer": "ecosystem",
    "name_en": "Research Center for AI Ethics and Governance, CAS Institute of Automation",
    "name_zh": "人工智能伦理与治理研究中心（中科院自动化所）",
    "category": "Research institute – Government-affiliated",
    "overview": "The CAS Institute of Automation's dedicated center for AI ethics and governance research, focusing on responsible AI models, applications, and governance for sustainable AI development.",
    "leadership": [
      {
        "name": "Zeng Yi",
        "role": "Director"
      }
    ],
    "website": "https://www.ia.cas.cn/jgsz/kyxt/llyzl/",
    "short_name": "CASIA-AIEG"
  },
  {
    "id": "ircaieg",
    "layer": "ecosystem",
    "name_en": "International Research Center for AI Ethics and Governance (IRCAIEG)",
    "name_zh": "",
    "category": "Research institute – Government-affiliated",
    "overview": "Cross-cultural research center at the CAS Institute of Automation. Released the Beijing AI Principles (2019), endorsed by Tsinghua, Peking University, and AITISA, and co-initiated the AGILE international AI governance evaluation index.",
    "leadership": [
      {
        "name": "Zeng Yi",
        "role": "Director"
      }
    ],
    "website": "https://ai-ethics-and-governance.institute/",
    "short_name": "IRCAIEG"
  },
  {
    "id": "clai",
    "layer": "ecosystem",
    "name_en": "Center for Long-term Artificial Intelligence (CLAI)",
    "name_zh": "",
    "category": "Research institute – Government-affiliated",
    "overview": "Research center associated with the CAS Institute of Automation focused on long-term AI safety and the trajectory toward advanced AI; co-initiated the AGILE AI Governance International Evaluation Index assessing AI governance across countries.",
    "leadership": [
      {
        "name": "Zeng Yi",
        "role": "Founder"
      }
    ],
    "website": "https://longtermai.cn/",
    "short_name": "CLAI"
  },
  {
    "id": "sh-aisgi",
    "layer": "ecosystem",
    "name_en": "Shanghai AI Safety and Governance Institute",
    "name_zh": "上海人工智能安全治理研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "City-level public service platform for AI safety and governance unveiled at WAIC 2024, operating under the Shanghai AI Laboratory to support Shanghai's development as an AI governance hub.",
    "leadership": [],
    "website": "https://www.shlab.org.cn/",
    "short_name": "Shanghai AISGI"
  },
  {
    "id": "sqz",
    "layer": "ecosystem",
    "name_en": "Shanghai Qi Zhi Institute",
    "name_zh": "上海期智研究院",
    "category": "Research institute – Government-affiliated",
    "overview": "A Shanghai-supported research institute founded in 2020, with programs spanning artificial intelligence, information security, and quantum computing. It has participated in the International Dialogues on AI Safety and China's AI-safety research ecosystem.",
    "leadership": [
      {
        "name": "Andrew Yao / Yao Qizhi",
        "role": "President"
      }
    ],
    "website": "https://www.sqz.ac.cn/",
    "short_name": "Qi Zhi Institute"
  },
  {
    "id": "iaiig",
    "layer": "ecosystem",
    "name_en": "Tsinghua University – Institute for AI International Governance (I-AIIG)",
    "name_zh": "清华大学人工智能国际治理研究院",
    "category": "Research institute – Academia",
    "overview": "University-level research institution established in 2020 focused on major theoretical and policy issues in global AI governance; provides intellectual support to China's participation in international AI governance and convenes international dialogues.",
    "leadership": [
      {
        "name": "Xue Lan",
        "role": "Dean"
      },
      {
        "name": "Liang Zheng",
        "role": "Vice Dean"
      },
      {
        "name": "Xiao Qian",
        "role": "Vice Dean"
      }
    ],
    "website": "https://aiig.tsinghua.edu.cn/en/",
    "short_name": "I-AIIG"
  },
  {
    "id": "ciss",
    "layer": "ecosystem",
    "name_en": "Tsinghua University – Center for International Security and Strategy (CISS)",
    "name_zh": "清华大学战略与安全研究中心",
    "category": "Research institute – Academia",
    "overview": "Policy think tank at Tsinghua University bridging government, industry, and academia on security and strategy, including Track II dialogues and policy work on AI security and international AI governance.",
    "leadership": [
      {
        "name": "Da Wei",
        "role": "Director"
      }
    ],
    "website": "https://ciss.tsinghua.edu.cn/",
    "short_name": "CISS"
  },
  {
    "id": "pku-aisg",
    "layer": "ecosystem",
    "name_en": "Peking University – Center for AI Safety and Governance",
    "name_zh": "北京大学人工智能安全与治理中心",
    "category": "Research institute – Academia",
    "overview": "Interdisciplinary center spanning computer science, law, and ethics with a core mission of preventing and managing risks from frontier AI; research spans AI ethics, value alignment, and safety governance.",
    "leadership": [
      {
        "name": "Zhang Ping",
        "role": "Director"
      },
      {
        "name": "Yang Yaodong",
        "role": "Executive Director"
      }
    ],
    "website": "https://www.ai.pku.edu.cn/en/Centers/Centers_for_AI_Humanities_and_Social_Sciences/Center_for_AI_Safety_and_Governance.htm",
    "short_name": "PKU-AISG"
  },
  {
    "id": "fudan-cgaig",
    "layer": "ecosystem",
    "name_en": "Fudan University – Center for Global AI Innovative Governance",
    "name_zh": "复旦大学全球人工智能创新治理中心",
    "category": "Research institute – Academia",
    "overview": "Center inaugurated at WAIC 2025 building a collaborative platform connecting Shanghai, China, and the world on AI governance, talent development, and AI for social good, with the aim of contributing to global AI governance frameworks.",
    "leadership": [],
    "website": "https://www.fdsm.fudan.edu.cn/",
    "short_name": "Fudan CGAIG"
  },
  {
    "id": "sjtu-aigl",
    "layer": "ecosystem",
    "name_en": "SJTU Center for AI Governance and Law",
    "name_zh": "上海交通大学人工智能治理与法律研究中心",
    "category": "Research institute – Academia",
    "overview": "Joint center of the SJTU AI Institute and the China Institute for Law and Society focusing on AI governance, AI and law, legal AI, and data governance through interdisciplinary research and policy/legal frameworks.",
    "leadership": [
      {
        "name": "Ji Weidong",
        "role": "Director"
      }
    ],
    "website": "https://www.socio-legal.sjtu.edu.cn/gk/index.aspx",
    "short_name": "SJTU-AIGL"
  },
  {
    "id": "tongji-aisg",
    "layer": "ecosystem",
    "name_en": "Shanghai Collaborative Innovation Center for AI Social Governance, Tongji University Law School",
    "name_zh": "上海市人工智能社会治理协同创新中心（同济大学法学院）",
    "category": "Research institute – Academia",
    "overview": "Law school hosting the Shanghai Collaborative Innovation Center for AI Social Governance, a municipal platform for research on the social governance of AI. Co-organizes AI governance forums with the National Experimental Comprehensive Base of Intelligent Social Governance, connecting legal scholarship to Shanghai's AI governance experimentation.",
    "leadership": [
      {
        "name": "Xu Gang",
        "role": "Secretary-general"
      }
    ],
    "website": "https://aisg.tongji.edu.cn/",
    "short_name": "Tongji AISG"
  },
  {
    "id": "cass-law",
    "layer": "ecosystem",
    "name_en": "Chinese Academy of Social Sciences – Institute of Law",
    "name_zh": "中国社会科学院法学研究所",
    "category": "Research institute – Government-affiliated",
    "overview": "National-level legal research institution and government think tank; a leading academic home for AI legislation research in China, including scholar-drafted model AI law proposals and work on the rule of law for AI and data governance.",
    "leadership": [
      {
        "name": "Mo Jihong",
        "role": "Director"
      }
    ],
    "website": "http://iolaw.cssn.cn/",
    "short_name": "CASS Law"
  },
  {
    "id": "realai",
    "layer": "ecosystem",
    "name_en": "RealAI",
    "name_zh": "瑞莱智慧",
    "category": "AI safety company",
    "overview": "AI safety and security company founded in 2018 out of Tsinghua University's Institute for AI. Provides AI security platforms and solutions (adversarial robustness, deepfake detection, model safety evaluation) for sectors including finance and government, and runs its own AI governance research institute.",
    "leadership": [
      {
        "name": "Tian Tian",
        "role": "CEO"
      },
      {
        "name": "advisors incl. Zhang Bo and Zhu Jun",
        "role": "Tsinghua"
      }
    ],
    "website": "https://www.realai.ai/",
    "short_name": "RealAI"
  },
  {
    "id": "cnaisda",
    "layer": "ecosystem",
    "name_en": "China AI Safety and Development Association (CnAISDA)",
    "name_zh": "中国人工智能发展与安全研究网络",
    "category": "Professional association",
    "overview": "Consortium of leading Chinese AI institutions (incl. BAAI, CAICT, CCID, CAS Institute of Automation, Peking University, Shanghai AI Lab, Shanghai Qi Zhi Institute, Tsinghua University) launched around the 2025 Paris AI Action Summit. Functions as China's counterpart in international AI safety institute dialogues, spanning AI safety research from theory to testing, audits, and governance.",
    "leadership": [
      {
        "name": "Convening experts incl. Andrew Yao, Fu Ying, Xue Lan, Zeng Yi",
        "role": ""
      }
    ],
    "website": "https://cnaisi.cn/",
    "short_name": "CnAISDA"
  },
  {
    "id": "aiia",
    "layer": "ecosystem",
    "name_en": "AI Industry Alliance of China (AIIA)",
    "name_zh": "中国人工智能产业发展联盟",
    "category": "Professional association",
    "overview": "Industry alliance launched in 2017 under the guidance of NDRC, MOST, MIIT, and CAC, led operationally by CAICT, with 250+ members across companies and universities. Conducts AI safety/trustworthiness evaluation and standards work and issued a joint self-discipline pledge for the AI industry.",
    "leadership": [
      {
        "name": "Pan Yunhe",
        "role": "Chairman"
      },
      {
        "name": "Gao Wen",
        "role": "Expert Committee Director"
      }
    ],
    "website": "https://aiiaorg.cn/",
    "short_name": "AIIA"
  },
  {
    "id": "csac",
    "layer": "ecosystem",
    "name_en": "Cyber Security Association of China (CSAC)",
    "name_zh": "中国网络空间安全协会",
    "category": "Professional association",
    "overview": "National non-profit association established in 2016 under CAC supervision, spanning cybersecurity companies, research institutions, and experts. Serves as a bridge between industry and regulators on cybersecurity and data security governance, increasingly extending to AI security issues.",
    "leadership": [
      {
        "name": "Wang Xiujun",
        "role": "Chairman"
      }
    ],
    "website": "http://www.cybersac.cn",
    "short_name": "CSAC"
  },
  {
    "id": "waic",
    "layer": "ecosystem",
    "name_en": "World Artificial Intelligence Conference (WAIC) Organizing Committee",
    "name_zh": "世界人工智能大会组委会",
    "category": "Convening platform",
    "overview": "State Council-approved annual conference in Shanghai, co-hosted by national ministries and the Shanghai Municipal Government. The system's flagship convening for AI development and governance — the launch venue for major governance initiatives, institutions (Shanghai AI Lab, Fudan's governance center), and international governance proposals including the 2025 Global AI Governance Action Plan.",
    "leadership": [
      {
        "name": "Organized by Donghao Lansheng Exhibition Group",
        "role": "Shanghai SOE"
      },
      {
        "name": "operated via wholly-owned subsidiary Weike Yinli",
        "role": ""
      }
    ],
    "website": "https://www.worldaic.com.cn/",
    "short_name": "WAIC"
  },
  {
    "id": "weike-yinli",
    "layer": "ecosystem",
    "name_en": "Weike Yinli (WAIC operating company)",
    "name_zh": "上海东浩兰生威客引力信息科技有限公司",
    "category": "Convening platform – Operator",
    "overview": "Wholly-owned subsidiary established in December 2024 by Donghao Lansheng Exhibition Group (Shanghai SOE, SSE 600826) to run WAIC as a standalone operation, positioned as a 'global AI ecosystem connector.' Runs the conference's year-round ecosystem sub-brands — WAIC FutureTech (startup-capital matchmaking), WAIC Connect (industry matchmaking), WAIC UP! (online journal), WAIC Young (early-career talent) — plus a membership system and the 'Hi WAIC' app, turning the annual convening into an always-on platform.",
    "leadership": [
      {
        "name": "Qiu Haoming",
        "role": "CEO"
      }
    ],
    "website": "https://www.worldaic.com.cn/",
    "short_name": "Weike Yinli"
  },
  {
    "id": "concordia",
    "layer": "ecosystem",
    "name_en": "Concordia AI",
    "name_zh": "安远AI",
    "category": "Civil society",
    "overview": "Beijing- and Singapore-based social enterprise dedicated to AI safety and governance. Advises on AI safety and governance, supports China's AI safety community, promotes international cooperation, and publishes the State of AI Safety in China reports that make the Chinese ecosystem legible internationally.",
    "leadership": [
      {
        "name": "Brian Tse",
        "role": "Founder & CEO"
      }
    ],
    "website": "https://concordia-ai.com/",
    "short_name": "Concordia AI"
  },
  {
    "id": "fungimind",
    "layer": "ecosystem",
    "name_en": "Fungimind",
    "name_zh": "智幻时刻",
    "category": "Civil society – Media / podcast",
    "overview": "Chinese-language podcast at the intersection of AI and public issues — covering AI governance, safety narratives, technology law, and STS — that brings governance and safety discourse to domestic Chinese audiences. Hosted by Zhuoran Zhou, an AI governance researcher with a background in financial media and the cloud/AI industry.",
    "leadership": [
      {
        "name": "Zhuoran Zhou",
        "role": "Founder & Host"
      }
    ],
    "website": "https://podcasts.apple.com/ca/podcast/%E6%99%BA%E5%B9%BB%E6%97%B6%E5%88%BBfungimind/id1802110330",
    "short_name": "Fungimind"
  },
  {
    "id": "waico",
    "layer": "ecosystem",
    "name_en": "World Artificial Intelligence Cooperation Organization (WAICO)",
    "name_zh": "世界人工智能合作组织",
    "category": "Intergovernmental organization (China-hosted)",
    "overview": "An intergovernmental international organization established July 16, 2026 in Shanghai on the eve of WAIC 2026, with 29 founding member countries. Following the UN Charter, WAICO's mission is to promote cooperation on global AI governance, capacity-building, and safety, with an emphasis on bridging developed and developing economies. The signing ceremony was jointly hosted by China's Ministry of Foreign Affairs, MIIT, and the Shanghai Municipal Government; Foreign Minister Wang Yi signed on China's behalf, with UN Secretary-General António Guterres in attendance. Shanghai AI Laboratory and Fudan University served as the de facto secretariat during the establishment process. First proposed by Premier Li Qiang at WAIC 2025, reiterated by President Xi Jinping at APEC 2025, and formally announced by Xi in his July 17, 2026 WAIC 2026 opening keynote titled \"Joining Hands to Build a Just and Equitable System for Global AI Governance\" (Xinhua English full text linked as reference URL; additional coverage via Xinhua Chinese, gov.cn, CGTN, and China's State Council Information Office). No standalone WAICO website has been established at time of entry.",
    "leadership": [],
    "website": "https://english.news.cn/20260717/893fe11097db460ea31b98f131e34ef0/c.html",
    "wikipedia": "https://en.wikipedia.org/wiki/World_Artificial_Intelligence_Cooperation_Organization",
    "short_name": "WAICO"
  },
  {
    "id": "chinai",
    "layer": "bridge",
    "name_en": "ChinAI Newsletter",
    "name_zh": "",
    "category": "Bridge – Newsletter / Substack",
    "overview": "Jeff Ding's weekly Substack translating writings from Chinese thinkers on China's AI landscape, including AI safety benchmarks, governance reports, and policy debates. Running since 2018 with tens of thousands of subscribers, it is the canonical translation channel between Chinese-language AI discourse and English-speaking audiences. Ding is an Assistant Professor of Political Science at George Washington University.",
    "leadership": [
      {
        "name": "Jeffrey Ding (Author",
        "role": ""
      },
      {
        "name": "Assistant Professor, George Washington University)",
        "role": ""
      }
    ],
    "website": "https://chinai.substack.com/",
    "short_name": "ChinAI"
  },
  {
    "id": "chinatalk",
    "layer": "bridge",
    "name_en": "ChinaTalk",
    "name_zh": "",
    "category": "Bridge – Podcast & newsletter",
    "overview": "Newsletter and podcast covering China, technology, and US-China relations, with deep coverage of Chinese AI labs, semiconductor policy, and AI governance through interviews with leading researchers and policymakers.",
    "leadership": [
      {
        "name": "Jordan Schneider",
        "role": "Founder"
      }
    ],
    "website": "https://www.chinatalk.media/",
    "short_name": "ChinaTalk"
  },
  {
    "id": "recode-china-ai",
    "layer": "bridge",
    "name_en": "Recode China AI",
    "name_zh": "",
    "category": "Bridge – Newsletter / Substack",
    "overview": "Weekly newsletter tracking and decoding developments in China's AI ecosystem — model releases, AI companies, chips, and policy — written for international audiences. Author Tony Peng is a former AI reporter (Synced) and former Baidu global communications lead.",
    "leadership": [
      {
        "name": "Tony Peng",
        "role": "Author"
      }
    ],
    "website": "https://recodechinaai.substack.com/",
    "short_name": "Recode China AI"
  },
  {
    "id": "concordia-substack",
    "layer": "bridge",
    "name_en": "AI Safety in China (Concordia AI Substack)",
    "name_zh": "",
    "category": "Bridge – Newsletter / Substack",
    "overview": "Concordia AI's dedicated English-language publication tracking Chinese AI safety and governance developments — technical safety research, governance moves, lab practices, and expert views — the companion channel to its State of AI Safety in China reports. (Concordia AI itself appears on the Inside sheet.)",
    "leadership": [
      {
        "name": "Concordia AI team",
        "role": ""
      }
    ],
    "website": "https://aisafetychina.substack.com/",
    "short_name": "AI Safety in China"
  },
  {
    "id": "weijin",
    "layer": "bridge",
    "name_en": "Weijin Research",
    "name_zh": "未尽研究",
    "category": "Bridge – Newsletter / Substack",
    "overview": "Shanghai-based research publication founded by media executive Zhou Jiangong, analyzing China's technology, AI, and energy transformation through industrial logic. Publishes an English-language Substack (part of the TechBuzz China content network) whose close readings of China's AI industry — DeepSeek releases, token economics, open-source dynamics — interpret the industrial layer of the ecosystem for international readers.",
    "leadership": [
      {
        "name": "Zhou Jiangong",
        "role": "Founder"
      }
    ],
    "website": "https://weijinresearch.substack.com/",
    "short_name": "Weijin Research"
  },
  {
    "id": "sinoai-insights",
    "layer": "bridge",
    "name_en": "SinoAI Insights (Tsinghua CISS podcast)",
    "name_zh": "",
    "category": "Bridge – Podcast",
    "overview": "English-language podcast launched in 2026 by Tsinghua University's Center for International Security and Strategy, featuring leading Chinese experts on AI competition, shared security risks, and US-China cooperation — a rare outward-facing channel conveying how Chinese strategists themselves frame AI risk. (CISS appears on the Ecosystem Actors sheet.)",
    "leadership": [
      {
        "name": "Produced by Tsinghua CISS",
        "role": ""
      }
    ],
    "website": "https://ciss.tsinghua.edu.cn/",
    "short_name": "SinoAI Insights"
  },
  {
    "id": "cset",
    "layer": "bridge",
    "name_en": "Center for Security and Emerging Technology (CSET)",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "Georgetown University policy research organization producing data-driven analysis of AI and emerging technology for security policy, with a strong China focus including a program translating original Chinese AI policy and strategy documents.",
    "leadership": [
      {
        "name": "Dewey Murdick",
        "role": "Executive Director"
      }
    ],
    "website": "https://cset.georgetown.edu/",
    "short_name": "CSET"
  },
  {
    "id": "digichina",
    "layer": "bridge",
    "name_en": "DigiChina (Stanford University)",
    "name_zh": "",
    "category": "Bridge – Translation resource",
    "overview": "Stanford-based collaborative project translating and analyzing Chinese digital policy, including authoritative annotated translations and expert analysis of China's AI regulations and governance institutions.",
    "leadership": [
      {
        "name": "Graham Webster",
        "role": "Editor-in-Chief"
      }
    ],
    "website": "https://digichina.stanford.edu/",
    "short_name": "DigiChina"
  },
  {
    "id": "china-law-translate",
    "layer": "bridge",
    "name_en": "China Law Translate",
    "name_zh": "",
    "category": "Bridge – Translation resource",
    "overview": "Translation project run by Jeremy Daum of Yale Law School's Paul Tsai China Center, providing timely English translations of Chinese laws and regulations — including the algorithm, deep synthesis, generative AI, and AI labeling rules — that international researchers rely on as primary sources.",
    "leadership": [
      {
        "name": "Jeremy Daum (Founder",
        "role": ""
      },
      {
        "name": "Senior Fellow, Yale Law School Paul Tsai China Center)",
        "role": ""
      }
    ],
    "website": "https://www.chinalawtranslate.com/",
    "short_name": "China Law Trans."
  },
  {
    "id": "interpret-china",
    "layer": "bridge",
    "name_en": "Interpret: China (CSIS)",
    "name_zh": "",
    "category": "Bridge – Translation resource",
    "overview": "CSIS project providing English translations of Chinese primary sources — policy documents, speeches, and articles — paired with expert analysis, with the stated goal of enabling a more objective understanding of China. Supported by the Carnegie Corporation of New York, with an advisory board of leading China scholars, and documented selection criteria (publisher affiliation, citation weight, official-line vs. novel argument, signaling intent). A core primary-source layer for China AI governance research.",
    "leadership": [
      {
        "name": "CSIS project",
        "role": ""
      },
      {
        "name": "advisory board of China scholars incl. Taylor Fravel, Susan Shirk, Elsa Kania, Scott Kennedy",
        "role": ""
      }
    ],
    "website": "https://interpret.csis.org/",
    "short_name": "Interpret: China"
  },
  {
    "id": "carnegie",
    "layer": "bridge",
    "name_en": "Carnegie Endowment for International Peace – Technology and International Affairs",
    "name_zh": "China AI research",
    "category": "Bridge – Research organization / think tank",
    "overview": "Global think tank whose AI program includes leading research on China's AI governance system and US-China AI relations, anchored by Matt Sheehan's widely cited work tracing how China's AI regulations are made.",
    "leadership": [
      {
        "name": "Matt Sheehan",
        "role": "Senior Fellow"
      }
    ],
    "website": "https://carnegieendowment.org/",
    "short_name": "Carnegie"
  },
  {
    "id": "trivium",
    "layer": "bridge",
    "name_en": "Trivium China",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "Beijing- and international-based policy research consultancy that monitors Chinese policymaking daily; its tech policy team provides close, practitioner-oriented tracking and interpretation of China's AI and data regulations for international audiences.",
    "leadership": [
      {
        "name": "Kendra Schaefer",
        "role": "Head of Tech Policy"
      }
    ],
    "website": "https://triviumchina.com/",
    "short_name": "Trivium"
  },
  {
    "id": "govai",
    "layer": "bridge",
    "name_en": "Centre for the Governance of AI (GovAI)",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "Oxford-based non-profit research organization dedicated to the governance of advanced AI, founded in 2018 out of Oxford's Future of Humanity Institute. Builds the global AI governance research field through research, fellowships, and convening; its team and affiliate community span US-China relations, and it has served as an institutional home for China-focused AI governance scholars including Jeff Ding.",
    "leadership": [
      {
        "name": "Ben Garfinkel",
        "role": "Director"
      },
      {
        "name": "Allan Dafoe",
        "role": "President"
      }
    ],
    "website": "https://www.governance.ai/",
    "short_name": "GovAI"
  },
  {
    "id": "csis-wadhwani",
    "layer": "bridge",
    "name_en": "CSIS – Wadhwani AI Center",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "Washington think tank center (est. 2023) researching AI policy, governance, geopolitics, and national security. Its analysis of US-China AI competition and semiconductor export controls — anchored by Gregory C. Allen's work — is among the most influential interpretation of China's AI trajectory for US and allied policymakers.",
    "leadership": [
      {
        "name": "Gregory C. Allen (founding Director",
        "role": ""
      },
      {
        "name": "Senior Adviser)",
        "role": ""
      }
    ],
    "website": "https://www.csis.org/programs/wadhwani-ai-center",
    "short_name": "CSIS Wadhwani"
  },
  {
    "id": "rand",
    "layer": "bridge",
    "name_en": "RAND Corporation",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "Global policy research organization whose Global and Emerging Risks division — including the Center on AI, Security, and Technology and the Center for the Geopolitics of AGI — and China Research Center produce research on China's AI ecosystem, US-China AI market competition, China's science and technology strategy, and verification approaches for international AI agreements.",
    "leadership": [
      {
        "name": "Jason Matheny",
        "role": "President & CEO"
      }
    ],
    "website": "https://www.rand.org/",
    "short_name": "RAND"
  },
  {
    "id": "cnas",
    "layer": "bridge",
    "name_en": "Center for a New American Security (CNAS)",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "Washington national security think tank whose Technology and National Security program analyzes US-China AI competition, military AI, and China's AI safety and governance discourse for US policy audiences.",
    "leadership": [
      {
        "name": "Paul Scharre",
        "role": "Executive Vice President"
      }
    ],
    "website": "https://www.cnas.org/",
    "short_name": "CNAS"
  },
  {
    "id": "brookings",
    "layer": "bridge",
    "name_en": "Brookings Institution – John L. Thornton China Center & AI work",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "Major US think tank whose China Center and AI governance research interpret China's technology policy for policy audiences; co-organized with Tsinghua University's CISS a sustained US-China Track II dialogue on AI, one of the principal bilateral channels on AI governance.",
    "leadership": [
      {
        "name": "Ryan Hass",
        "role": "Director, John L. Thornton China Center"
      }
    ],
    "website": "https://www.brookings.edu/",
    "short_name": "Brookings"
  },
  {
    "id": "paul-triolo",
    "layer": "bridge",
    "name_en": "Paul Triolo",
    "name_zh": "",
    "category": "Bridge – Individual analyst",
    "overview": "Partner and China/technology policy lead at DGA-Albright Stonebridge Group and honorary senior fellow at the Asia Society Policy Institute. Veteran interpreter of China's AI, semiconductor, and technology policy for international audiences, with 25+ years of prior US government experience and participation in Track II dialogues with China on AI and data governance.",
    "leadership": [
      {
        "name": "N/A",
        "role": ""
      }
    ],
    "website": "https://asiasociety.org/policy-institute/paul-triolo",
    "short_name": "Paul Triolo"
  },
  {
    "id": "angela-zhang",
    "layer": "bridge",
    "name_en": "Angela Huyue Zhang",
    "name_zh": "",
    "category": "Bridge – Individual analyst",
    "overview": "Professor of Law at the USC Gould School of Law and a leading authority on Chinese tech regulation. Her scholarship and commentary on how China regulates its technology sector, including AI, shape international understanding of Chinese digital governance.",
    "leadership": [
      {
        "name": "N/A",
        "role": ""
      }
    ],
    "website": "https://gould.usc.edu/",
    "short_name": "Angela Zhang"
  },
  {
    "id": "samm-sacks",
    "layer": "bridge",
    "name_en": "Samm Sacks",
    "name_zh": "",
    "category": "Bridge – Individual analyst",
    "overview": "Research Scholar in Law and Senior Fellow at Yale Law School's Paul Tsai China Center, focused on China's cybersecurity legal system, data governance, and the US-China technology relationship — foundational context for China's AI regulatory regime.",
    "leadership": [
      {
        "name": "N/A",
        "role": ""
      }
    ],
    "website": "https://law.yale.edu/samm-sacks",
    "short_name": "Samm Sacks"
  },
  {
    "id": "selina-xu",
    "layer": "bridge",
    "name_en": "Selina Xu",
    "name_zh": "",
    "category": "Bridge – Individual analyst",
    "overview": "Head of China, AI Research and Strategic Initiatives in the Office of Eric Schmidt, and former Bloomberg News China reporter. Writes on China's AI trajectory and US-China technology competition for major outlets including co-authored New York Times essays with Eric Schmidt that have shaped elite US understanding of China's AI momentum.",
    "leadership": [
      {
        "name": "N/A",
        "role": ""
      }
    ],
    "website": "https://selinaxu.com/",
    "short_name": "Selina Xu"
  },
  {
    "id": "china-ai-bulletin",
    "layer": "bridge",
    "name_en": "China AI Bulletin",
    "name_zh": "",
    "category": "Bridge – Newsletter / Substack",
    "overview": "A fortnightly newsletter that tracks AI development, governance, and safety in China by monitoring and contextualizing Chinese-language primary sources. It is maintained by the Safe AI Forum.",
    "leadership": [
      {
        "name": "Emmie Hine",
        "role": "Author"
      }
    ],
    "website": "https://chinaaibulletin.substack.com/",
    "short_name": "China AI Bulletin"
  },
  {
    "id": "oxford-cpl",
    "layer": "bridge",
    "name_en": "Oxford China Policy Lab",
    "name_zh": "",
    "category": "Bridge – Research organization / policy lab",
    "overview": "An Oxford-based nonprofit research group focused on China, emerging technology, and policy. Its work examines how US–China competition—especially around AI and other emerging technologies—can generate global risks and how policy can mitigate them.",
    "leadership": [
      {
        "name": "Scott Singer (Co-founder",
        "role": ""
      },
      {
        "name": "Strategic Advisor)",
        "role": ""
      }
    ],
    "website": "https://oxfordchinapolicylab.org/",
    "short_name": "Oxford CPL"
  },
  {
    "id": "iaps",
    "layer": "bridge",
    "name_en": "Institute for AI Policy and Strategy (IAPS)",
    "name_zh": "",
    "category": "Bridge – Research organization / think tank",
    "overview": "A nonpartisan AI policy think tank. Its International Governance & China research includes Chinese AI-safety institutions, comparisons of US and Chinese approaches to general-purpose AI governance, and prospects for bilateral or multilateral safety dialogue.",
    "leadership": [
      {
        "name": "Jennifer Marron",
        "role": "Executive Director"
      }
    ],
    "website": "https://www.iaps.ai/",
    "short_name": "IAPS"
  },
  {
    "id": "saif",
    "layer": "bridge",
    "name_en": "Safe AI Forum (SAIF)",
    "name_zh": "",
    "category": "Bridge – Research / convening organization",
    "overview": "A US 501(c)(3) nonprofit working on global coordination around extreme AI risks. It maintains China AI Bulletin and co-convenes the International Dialogues on AI Safety with Chinese research partners.",
    "leadership": [
      {
        "name": "Fynn Heide",
        "role": "Executive Director"
      }
    ],
    "website": "https://saif.org/",
    "short_name": "SAIF"
  },
  {
    "id": "emmie-hine",
    "layer": "bridge",
    "name_en": "Emmie Hine",
    "name_zh": "",
    "category": "Bridge – Individual researcher / newsletter author",
    "overview": "A researcher focused on the Chinese AI governance ecosystem and broader questions of technology governance. She writes China AI Bulletin and has published research and commentary that interprets Chinese AI policy for English-speaking audiences.",
    "leadership": [
      {
        "name": "N/A",
        "role": ""
      }
    ],
    "website": "https://emmiehine.com/",
    "short_name": "Emmie Hine"
  },
  {
    "id": "scott-singer",
    "layer": "bridge",
    "name_en": "Scott Singer",
    "name_zh": "",
    "category": "Bridge – Individual researcher",
    "overview": "A researcher working on global AI development and governance with a focus on China. He co-founded the Oxford China Policy Lab and is a fellow at the Carnegie Endowment for International Peace.",
    "leadership": [
      {
        "name": "N/A",
        "role": ""
      }
    ],
    "website": "https://carnegieendowment.org/people/scott-singer",
    "short_name": "Scott Singer"
  }
] as const;
