export type LocaleCode = "en" | "ja" | "zh-CN";

export type LocaleContent = {
  code: LocaleCode;
  path: "" | "ja" | "zh-CN";
  name: string;
  nativeName: string;
  direction: "ltr";
  meta: { title: string; description: string; socialTitle: string; socialDescription: string };
  nav: { how: string; features: string; privacy: string; language: string; skip: string };
  hero: { eyebrow: string; title: string; emphasis: string; lead: string; availability: string; platform: string; points: string[]; demoLabel: string; openMenu: string; closeMenu: string; menuTitle: string };
  strip: string[];
  problem: { eyebrow: string; title: string; lead: string; steps: { number: string; title: string; text: string }[] };
  features: { eyebrow: string; title: string; lead: string; items: { number: string; title: string; text: string }[] };
  privacy: { eyebrow: string; title: string; lead: string; items: string[]; artLabel: string };
  settings: { eyebrow: string; title: string; lead: string; sheetTitle: string; rows: { label: string; value: string; enabled?: boolean }[] };
  closing: { eyebrow: string; title: string; lead: string; availability: string };
  footer: { copyright: string; privacy: string; features: string };
};

export const locales: Record<LocaleCode, LocaleContent> = {
  en: {
    code: "en", path: "", name: "English", nativeName: "English", direction: "ltr",
    meta: {
      title: "PinLaunch — Launch your apps, fast.",
      description: "PinLaunch is a local-first Windows taskbar launcher for the apps, folders, documents, websites, commands, and supported PWAs you use every day.",
      socialTitle: "PinLaunch — Launch your apps, fast.",
      socialDescription: "A local-first, configurable taskbar launcher for Windows."
    },
    nav: { how: "How it works", features: "Features", privacy: "Privacy", language: "Language", skip: "Skip to content" },
    hero: {
      eyebrow: "Local-first launcher for Windows", title: "One icon.", emphasis: "Launch your apps, fast.",
      lead: "Bring the apps, folders, documents, websites, commands, and PWAs you reach for into one focused menu on your taskbar.",
      availability: "Public download will be available after Microsoft Store certification.", platform: "Windows 10 version 1809+ and Windows 11, x64.",
      points: ["Works offline", "English, Japanese, and Simplified Chinese", "No account required"], demoLabel: "Interactive PinLaunch taskbar menu demonstration", openMenu: "Open the PinLaunch demo menu", closeMenu: "Close the demo menu", menuTitle: "PinLaunch demo menu"
    },
    strip: ["Windows apps", "Folders & documents", "Websites & commands", "Chrome · Edge PWAs"],
    problem: {
      eyebrow: "A tidier taskbar. A clearer start.", title: "Keep icons light.\nStop digging through Start.",
      lead: "A full taskbar takes space. A full Start menu makes you search. PinLaunch keeps only the destinations you chose, right where you expect them.",
      steps: [
        { number: "01 / Gather", title: "Bring loose icons together", text: "Put everyday apps, folders, documents, websites, and commands behind one taskbar entry." },
        { number: "02 / Curate", title: "Keep only familiar targets", text: "Choose the shortcuts and apps that matter instead of filtering through every installed program." },
        { number: "03 / Reach", title: "Launch in one click", text: "Open your configured menu from the taskbar, then use groups and order to keep each destination close." }
      ]
    },
    features: {
      eyebrow: "One entry. The essentials only.", title: "Put your everyday tools\nin one menu.",
      lead: "PinLaunch replaces a row of taskbar icons and a long list of installed apps with a menu shaped around what you actually use.",
      items: [
        { number: "01", title: "Consolidate common destinations", text: "Collect multiple taskbar pins in a single menu while preserving one-click access." },
        { number: "02", title: "Choose exactly what appears", text: "Add the applications, folders, files, websites, and commands you want to reach—nothing else." },
        { number: "03", title: "Organize around your habits", text: "Use groups, ordering, icons, and display settings to make each launch path feel familiar." }
      ]
    },
    privacy: {
      eyebrow: "Local-first, with no trail", title: "Your shortcuts stay\non your computer.",
      lead: "PinLaunch processes its configuration and shortcut discovery locally. It is built to launch what you choose—not to collect how you work.",
      items: ["No telemetry", "No advertising", "No sign-in account", "No cloud sync", "No automatic update checks"], artLabel: "Local privacy illustration"
    },
    settings: {
      eyebrow: "A launcher that looks like yours", title: "More than launch.\nMade for your rhythm.",
      lead: "Tune visual details such as theme, menu size, and icon style. Switch between English and Simplified Chinese when it suits your desktop.",
      sheetTitle: "Appearance & behavior",
      rows: [{ label: "Interface language", value: "English" }, { label: "Follow system theme", value: "On", enabled: true }, { label: "Menu icon size", value: "Standard" }, { label: "Start with Windows", value: "On", enabled: true }, { label: "Show on multiple displays", value: "On", enabled: true }]
    },
    closing: { eyebrow: "Ready when you are", title: "Make the tools you use\nshow up faster.", lead: "PinLaunch is built for x64 Windows 10 version 1809 and later, and Windows 11.", availability: "Public download is coming after Microsoft Store certification." },
    footer: { copyright: "© 2026 PinLaunch. A local-first Windows launcher.", privacy: "Privacy promise", features: "Features" }
  },
  ja: {
    code: "ja", path: "ja", name: "Japanese", nativeName: "日本語", direction: "ltr",
    meta: {
      title: "PinLaunch — アプリをすばやく起動",
      description: "PinLaunch は、よく使うアプリ、フォルダー、文書、Web サイト、コマンド、対応 PWA をタスクバー上のひとつのメニューにまとめる、Windows 向けローカルファーストランチャーです。",
      socialTitle: "PinLaunch — アプリをすばやく起動", socialDescription: "Windows 向けのローカルファーストでカスタマイズ可能なタスクバーランチャー。"
    },
    nav: { how: "使い方", features: "機能", privacy: "プライバシー", language: "言語", skip: "メイン コンテンツへ移動" },
    hero: {
      eyebrow: "Windows 向けローカルファーストランチャー", title: "ひとつのアイコンで、", emphasis: "アプリをすばやく起動。",
      lead: "毎日使うアプリ、フォルダー、文書、Web サイト、コマンド、PWA を、タスクバーのひとつの使いやすいメニューにまとめます。",
      availability: "Microsoft Store の認定後に公開ダウンロードを提供予定です。", platform: "Windows 10 バージョン 1809 以降、Windows 11、x64 に対応。",
      points: ["オフラインで利用可能", "英語・日本語・簡体字中国語に対応", "アカウント不要"], demoLabel: "操作できる PinLaunch タスクバーメニューのデモ", openMenu: "PinLaunch のデモメニューを開く", closeMenu: "デモメニューを閉じる", menuTitle: "PinLaunch デモメニュー"
    },
    strip: ["Windows アプリ", "フォルダーと文書", "Web サイトとコマンド", "Chrome · Edge PWA"],
    problem: {
      eyebrow: "すっきりしたタスクバー。迷わないスタート。", title: "アイコンを増やしすぎず、\nスタートメニューを探し回らない。",
      lead: "タスクバーがいっぱいだと場所を取り、スタートメニューが長いと探す手間がかかります。PinLaunch には、あなたが選んだよく使う項目だけを残せます。",
      steps: [
        { number: "01 / 集約", title: "散らばったアイコンをまとめる", text: "毎日使うアプリ、フォルダー、文書、Web サイト、コマンドをひとつのタスクバー項目に集約します。" },
        { number: "02 / 厳選", title: "使い慣れた項目だけを残す", text: "インストール済みのすべてのプログラムから探すのではなく、必要なショートカットとアプリだけを選べます。" },
        { number: "03 / すぐ開く", title: "ワンクリックで起動する", text: "タスクバーから設定済みのメニューを開き、グループと並び順で目的の項目にすばやくアクセスできます。" }
      ]
    },
    features: {
      eyebrow: "ひとつの入口に、必要なものだけ", title: "いつものツールを\nひとつのメニューに。",
      lead: "PinLaunch は、タスクバーに並ぶアイコンや長いアプリ一覧を、あなたが実際に使うものを中心にしたメニューへ置き換えます。",
      items: [
        { number: "01", title: "よく使う項目をまとめる", text: "複数のタスクバー固定アイコンをひとつのメニューに集めながら、ワンクリックの手軽さは保てます。" },
        { number: "02", title: "表示する項目を自分で選ぶ", text: "アクセスしたいアプリ、フォルダー、ファイル、Web サイト、コマンドだけを追加できます。" },
        { number: "03", title: "習慣に合わせて整理する", text: "グループ、並び順、アイコン、表示設定を使って、いつもの起動手順をわかりやすく整えます。" }
      ]
    },
    privacy: {
      eyebrow: "ローカルファースト、余計な痕跡は残さない", title: "ショートカットは、\nあなたのコンピューターにだけ。",
      lead: "PinLaunch は設定とショートカットの検出をローカルで処理します。使い方を収集するのではなく、選んだ項目を起動することに専念します。",
      items: ["テレメトリなし", "広告なし", "サインインアカウント不要", "クラウド同期なし", "自動更新チェックなし"], artLabel: "ローカルプライバシーのイラスト"
    },
    settings: {
      eyebrow: "自分らしく使えるランチャー", title: "起動するだけでなく、\n自分のリズムに合わせる。",
      lead: "テーマ、メニューサイズ、アイコンスタイルなどの見た目を調整できます。デスクトップに合わせて英語、日本語、簡体字中国語を切り替えることもできます。",
      sheetTitle: "外観と動作",
      rows: [{ label: "表示言語", value: "日本語" }, { label: "システムテーマに合わせる", value: "オン", enabled: true }, { label: "メニューのアイコンサイズ", value: "標準" }, { label: "Windows と同時に起動", value: "オン", enabled: true }, { label: "複数のディスプレイに表示", value: "オン", enabled: true }]
    },
    closing: { eyebrow: "始める準備はできましたか", title: "いつものツールを、\nもっと速く。", lead: "PinLaunch は x64 の Windows 10 バージョン 1809 以降と Windows 11 向けに作られています。", availability: "Microsoft Store の認定後に公開ダウンロードを提供予定です。" },
    footer: { copyright: "© 2026 PinLaunch. Windows 向けローカルファーストランチャー。", privacy: "プライバシーについて", features: "機能一覧" }
  },
  "zh-CN": {
    code: "zh-CN", path: "zh-CN", name: "Simplified Chinese", nativeName: "简体中文", direction: "ltr",
    meta: {
      title: "PinLaunch — 快速启动你的应用",
      description: "PinLaunch 是一款为 Windows 打造的本地优先任务栏启动工具，将常用应用、文件夹、文档、网站、命令和受支持的 PWA 集中到一个菜单中。",
      socialTitle: "PinLaunch — 快速启动你的应用", socialDescription: "为 Windows 打造的本地优先、可配置任务栏启动工具。"
    },
    nav: { how: "如何工作", features: "功能", privacy: "隐私", language: "语言", skip: "跳到主要内容" },
    hero: {
      eyebrow: "为 Windows 打造的本地优先启动工具", title: "一枚图标，", emphasis: "快速启动你的应用。",
      lead: "把每天需要的应用、文件夹、文档、网站、命令与 PWA，收进任务栏里一个真正属于你的入口。",
      availability: "将在通过 Microsoft Store 认证后提供公开下载。", platform: "适用于 Windows 10 1809 及更高版本和 Windows 11，仅限 x64。",
      points: ["离线可用", "支持英文、日语与简体中文", "无需账号"], demoLabel: "可交互的 PinLaunch 任务栏菜单演示", openMenu: "打开 PinLaunch 演示菜单", closeMenu: "关闭演示菜单", menuTitle: "PinLaunch 演示菜单"
    },
    strip: ["Windows 应用", "文件夹与文档", "网站与命令", "Chrome · Edge PWA"],
    problem: {
      eyebrow: "任务栏更清爽，查找更直接", title: "别让图标堆满，\n也别在开始菜单里翻找。",
      lead: "任务栏塞满固定图标会占据空间；开始菜单又囊括所有已安装应用。PinLaunch 只保留你指定、真正常用的入口。",
      steps: [
        { number: "01 / 集中", title: "收起散落的图标", text: "将常用应用、文件夹、文档、网站和命令集中在一个任务栏入口中，为任务栏腾出空间。" },
        { number: "02 / 精选", title: "只留下常用目标", text: "不必在开始菜单的全部程序中筛选；只添加你指定的快捷方式和应用。" },
        { number: "03 / 直达", title: "一次点击快速启动", text: "点击任务栏图标即可打开定制菜单，用分组与排序让每个常用工具更快抵达。" }
      ]
    },
    features: {
      eyebrow: "一个入口，专注常用", title: "把常用工具\n收进一个菜单。",
      lead: "PinLaunch 将用户指定的应用、文件、网站与命令集中到任务栏中的一个入口：既减少图标占用，也免去在开始菜单中反复查找。",
      items: [
        { number: "01", title: "集中常用入口", text: "将任务栏上的多个固定图标收纳进一个菜单，减少占用，同时保留一键启动的触达速度。" },
        { number: "02", title: "筛选用户指定内容", text: "手动添加最常用的应用、文件、网站和命令；菜单只展示你关心的内容。" },
        { number: "03", title: "按习惯组织启动菜单", text: "用分组、排序、图标和显示设置建立自己的启动路径，让目标始终出现在熟悉的位置。" }
      ]
    },
    privacy: {
      eyebrow: "本地优先，不留尾巴", title: "你的快捷方式，\n只在你的电脑里。",
      lead: "PinLaunch 的配置和快捷方式发现都在本机完成。它专注于启动，而不是收集你的使用习惯。",
      items: ["不收集遥测数据", "不展示广告", "不要求登录账号", "不进行云同步", "不自动检查更新"], artLabel: "本地隐私插图"
    },
    settings: {
      eyebrow: "看起来，也像你的工具", title: "不止于启动。\n也关乎习惯。",
      lead: "从主题、菜单尺寸到图标样式，PinLaunch 允许你调整视觉细节；需要时，也能切换中英文界面。",
      sheetTitle: "外观与行为",
      rows: [{ label: "界面语言", value: "简体中文" }, { label: "跟随系统主题", value: "已开启", enabled: true }, { label: "菜单图标大小", value: "标准" }, { label: "开机自动启动", value: "已开启", enabled: true }, { label: "在多显示器上显示", value: "已开启", enabled: true }]
    },
    closing: { eyebrow: "准备好开始了吗", title: "让常用工具，\n更快出现。", lead: "PinLaunch 为 Windows 10 1809 及以上版本与 Windows 11 x64 设备而生。", availability: "将在通过 Microsoft Store 认证后提供公开下载。" },
    footer: { copyright: "© 2026 PinLaunch. 本地优先的 Windows 启动工具。", privacy: "隐私承诺", features: "功能一览" }
  }
};

export const localeList = Object.values(locales);
export const defaultLocale: LocaleCode = "en";

export function hrefForLocale(locale: LocaleContent, base: string) {
  return `${base}${locale.path ? `${locale.path}/` : ""}`;
}

export function privacyHrefForLocale(locale: LocaleContent, base: string) {
  return `${hrefForLocale(locale, base)}privacy/`;
}
