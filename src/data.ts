export const pages = [
  "home",
  "products",
  "studio",
  "services",
  "contact",
] as const;
export type Page = (typeof pages)[number];
export type Lang = "zh-cn" | "en";
type Pair = [zh: string, en: string];
export const t = (lang: Lang, pair: Pair) => pair[lang === "en" ? 1 : 0];
export const labels: Record<Page, Pair> = {
  home: ["首页", "Home"],
  products: ["产品", "Products"],
  studio: ["工作室", "Studio"],
  services: ["购买与支持", "Licensing & support"],
  contact: ["联系", "Contact"],
};
export const categories = {
  capture: ["截图与录屏", "Capture & recording"],
  image: ["图片与窗口", "Images & windows"],
  demo: ["演示与教学", "Demos & tutorials"],
} satisfies Record<string, Pair>;
type Product = {
  name: string;
  domain: string;
  category: keyof typeof categories;
  tagline: Pair;
  description: Pair;
  status: Pair;
  tone: string;
  mark: string;
  image?: string;
  imageLabel?: Pair;
};
export const products: Product[] = [
  {
    name: "Shotera",
    domain: "shotera",
    category: "capture",
    tone: "blue",
    mark: "◈",
    image: "shotera.webp",
    imageLabel: [
      "Shotera 官网产品演示",
      "Product illustration from the Shotera site",
    ],
    tagline: [
      "把截图、录屏与标注放进同一套流程",
      "Capture, record and annotate in one workflow",
    ],
    description: [
      "适合经常做教程、反馈问题或整理资料的人。截图、滚动截长图、录屏，再把关键处标清楚。",
      "For tutorials, bug reports and documentation. Capture a region, a scrolling page or a recording, then mark the details that matter.",
    ],
    status: ["可下载", "Download available"],
  },
  {
    name: "SnipArc",
    domain: "sniparc",
    category: "capture",
    tone: "green",
    mark: "◩",
    image: "sniparc.webp",
    imageLabel: [
      "SnipArc 中文程序实拍",
      "SnipArc app screenshot with Chinese UI",
    ],
    tagline: [
      "截下重点，标清楚，马上分享",
      "Capture the point, mark it, share it",
    ],
    description: [
      "为日常沟通设计的 Windows 截图与标注工具。从选区到剪贴板，随手把问题讲清楚。",
      "A Windows screenshot and annotation tool for everyday communication. Take a region capture and send a clearly marked result from your clipboard.",
    ],
    status: ["查看发布状态", "Check release status"],
  },
  {
    name: "WindowSift",
    domain: "windowsift",
    category: "image",
    tone: "blue",
    mark: "⌖",
    tagline: ["这个窗口是哪个程序打开的？", "Find the app behind a window"],
    description: [
      "追踪窗口来源，浏览窗口树、检查属性和短暂出现的弹窗。",
      "Trace a window to its process, inspect the window tree and review transient pop-ups.",
    ],
    status: ["独立版本待发布", "Standalone release pending"],
  },
  {
    name: "ImagePerch",
    domain: "imageperch",
    category: "image",
    tone: "rose",
    mark: "▧",
    tagline: ["长图浏览、裁切与编辑", "Navigate, trim and edit long images"],
    description: [
      "在全貌与细节之间切换，裁去多余内容，再标注、复制或导出。",
      "Move between the overview and the details, trim the edges, then annotate, copy or export.",
    ],
    status: ["独立版本待发布", "Standalone release pending"],
  },
  {
    name: "KeySplera",
    domain: "keysplera",
    category: "demo",
    tone: "lilac",
    mark: "⌨",
    tagline: [
      "让观众看见你的按键和点击",
      "Let viewers see your keys and clicks",
    ],
    description: [
      "把键帽、鼠标与点击涟漪显示在屏幕上，为录屏和现场演示补上操作细节。",
      "Show keycaps, mouse buttons and click ripples on screen during recordings and live demos.",
    ],
    status: ["v0.1.0 可下载", "v0.1.0 available"],
  },
];
export const descriptions: Record<Page, Pair> = {
  home: [
    "Mosuzo Studio 的 Windows 软件作品集。发现截图、录屏、图片处理、窗口检查与演示工具。",
    "Discover Windows tools for screen capture, recording, image work, window inspection and tutorials from Mosuzo Studio.",
  ],
  products: [
    "按使用场景浏览 Mosuzo Studio 的五款 Windows 工具，并访问各自的官网。",
    "Browse five Windows tools from Mosuzo Studio and visit their official product sites.",
  ],
  studio: [
    "了解 Mosuzo Studio 如何设计桌面工具，以及我们希望和谁一起做产品。",
    "Meet Mosuzo Studio and learn how we design desktop tools and work with collaborators.",
  ],
  services: [
    "查找产品下载、购买与激活规划，以及授权和售后咨询方式。",
    "Find downloads, purchasing and activation plans, and licensing and support contacts.",
  ],
  contact: [
    "通过邮箱或 GitHub 联系 Mosuzo Studio，提出反馈、授权咨询或合作邀请。",
    "Contact Mosuzo Studio by email or GitHub for feedback, licensing questions and partnerships.",
  ],
};
export const email = "mosuzo.studio@gmail.com";
export const github = "https://github.com/mosuzo-studio";
export const canonicalPath = (lang: Lang, page: Page) =>
  "/" +
  [lang === "en" ? "en" : "", page === "home" ? "" : page]
    .filter(Boolean)
    .map((part) => part + "/")
    .join("");
export const localPath = (lang: Lang, page: Page) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + canonicalPath(lang, page);
export const asset = (file: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + "/media/" + file;
export const productUrl = (lang: Lang, domain: string) =>
  "https://" + domain + ".mosuzo.com/" + (lang === "zh-cn" ? "zh-cn/" : "");
export const mail = (subject: string) =>
  "mailto:" + email + "?subject=" + encodeURIComponent(subject);
