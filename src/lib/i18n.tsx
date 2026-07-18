import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof strings["en"]) => string;
};

export const strings = {
  en: {
    site_title: "China AI Governance Map",
    tagline: "A tool to navigate China AI Governance",

    nav_home: "Home",
    nav_ecosystem: "Ecosystem Actors",
    nav_bridges: "Bridges & Interpreters",
    nav_network: "Network",
    nav_about: "About",
    lang_toggle: "中文",
    ecosystem_title: "Ecosystem Actors",
    ecosystem_sub: "Regulators, research institutes, standards bodies, and firms shaping AI governance in China.",
    bridges_title: "Bridges & Interpreters",
    bridges_sub: "Newsletters, podcasts, organizations, and individuals translating Chinese AI discourse.",
    search_ph: "Search by name…",
    filter_type: "Type",
    filter_stakeholder: "Stakeholder",
    filter_layer: "Layer",
    filter_bridge_type: "Bridge type",
    filter_location: "Location",
    filter_safety: "Safety relevance",
    filter_all: "All",
    map_tab: "Directory",
    map_soon: "Map view (coming soon)",
    overview: "Overview",
    why: "Why it's on this map",
    leadership: "Leadership",
    website: "Website",
    sources: "Sources",
    issued_documents: "Issued documents",
    evidence: "Evidence",
    related: "Related actors",
    back: "Back",
    stat_ecosystem: "ecosystem actors",
    stat_bridges: "bridges",
    stat_relationships: "verified relationships",
    stat_total: "total entries",
    home_intro: "A bilingual reference to the institutions, people, and channels that shape and interpret China's approach to artificial intelligence governance.",
    enter: "Enter",
    about_title: "About",
    about_body: "Methodology and inclusion criteria forthcoming. This project maps the actors — Chinese and international — most consequential to how AI is governed, evaluated, and interpreted in and around the People's Republic of China.",
    safety_core: "Core",
    safety_significant: "Significant",
    safety_contextual: "Contextual",
    location: "Location",
    no_results: "No entries match these filters.",
    network_title: "Network",
    network_sub: "Verified institutional relationships among China-based ecosystem actors.",
    network_notice: "This network shows 126 verified institutional relationships across China's AI governance ecosystem and its cross-border interpretive network. Bridge actors (squares) sit alongside China-based ecosystem actors (circles).",
    network_mobile: "Network view is available on desktop. Explore actors as a list on the Actors page.",
    conf_high_only: "High only",
    conf_high_medium: "High + Medium",
    conf_all: "All confidence",
    status_current: "Current only",
    status_all: "All status",
    see_profile: "See profile",
  },
  zh: {
    site_title: "Sinograph AI",
    tagline: "中国人工智能治理导航工具",

    nav_home: "首页",
    nav_ecosystem: "生态参与者",
    nav_bridges: "桥梁与解读者",
    nav_network: "关系网络",
    nav_about: "关于",
    lang_toggle: "EN",
    ecosystem_title: "生态参与者",
    ecosystem_sub: "塑造中国人工智能治理的监管机构、研究院所、标准组织与企业。",
    bridges_title: "桥梁与解读者",
    bridges_sub: "翻译并解读中国人工智能话语的通讯、播客、机构与个人。",
    search_ph: "按名称搜索…",
    filter_type: "类别",
    filter_stakeholder: "参与者类型",
    filter_layer: "层级",
    filter_bridge_type: "桥梁类型",
    filter_location: "地区",
    filter_safety: "安全相关性",
    filter_all: "全部",
    map_tab: "名录",
    map_soon: "图谱视图(即将推出)",
    overview: "概述",
    why: "入选理由",
    leadership: "主要负责人",
    website: "网站",
    sources: "来源",
    issued_documents: "发布文件",
    evidence: "证据",
    related: "相关条目",
    back: "返回",
    stat_ecosystem: "生态参与者",
    stat_bridges: "桥梁",
    stat_relationships: "已核实关系",
    stat_total: "条目总数",
    home_intro: "一部双语参考:汇集塑造与解读中华人民共和国及其周边人工智能治理的机构、人物与渠道。",
    enter: "进入",
    about_title: "关于本站",
    about_body: "方法论与收录标准即将公布。本项目梳理对中国及其周边人工智能治理、评估与阐释最具影响的中外行动者。",
    safety_core: "核心",
    safety_significant: "重要",
    safety_contextual: "背景",
    location: "地点",
    no_results: "没有条目符合当前筛选。",
    network_title: "关系网络",
    network_sub: "中国生态参与者之间已核实的机构关系。",
    network_notice: "本图呈现 126 条已核实的机构关系,覆盖中国人工智能治理生态及其跨境解读网络。桥梁参与者(方形)与中国境内生态参与者(圆形)并列显示。",
    network_mobile: "网络视图仅在桌面端可用。请在参与者页面以列表方式浏览。",
    conf_high_only: "仅高置信",
    conf_high_medium: "高 + 中",
    conf_all: "全部置信",
    status_current: "仅现行",
    status_all: "全部状态",
    see_profile: "查看条目",
  },
} as const;

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const saved = document.documentElement.getAttribute("data-lang") as Lang | null;
      if (saved === "zh" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-lang", l);
      document.documentElement.lang = l === "zh" ? "zh" : "en";
    }
  };

  const t = (key: keyof typeof strings["en"]) => strings[lang][key] ?? strings.en[key];

  return (
    <LangContext.Provider value={{ lang: hydrated ? lang : "en", setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
}