(() => {
  "use strict";

  const storageKey = "pinlaunch.website.language";
  const translations = {
    en: {
      pageTitle: "PinLaunch — Your taskbar, organized",
      skip: "Skip to content", navLabel: "Primary navigation", homeLabel: "PinLaunch home", backToTop: "Back to top", languageLabel: "Language",
      navFeatures: "Features", navHow: "How it works", navPrivacy: "Privacy",
      eyebrow: "LOCAL-FIRST WINDOWS UTILITY", heroTitle: "One taskbar pin.<br><em>Everything within reach.</em>",
      heroLead: "PinLaunch gives your everyday apps, folders, web apps, and commands one calm, configurable place to start.",
      storeButton: "Microsoft Store", storeStatus: "Available after Microsoft Store certification.", markCaption: "ONE PIN. YOUR WAY.",
      platformLabel: "Platform support", platformStrong: "Built for the desktop.", platformText: "Windows 10 version 1809+ and Windows 11, x64.", platformLocal: "Your menu stays on your device. Your workflow stays yours.",
      menuEyebrow: "THE TASKBAR MENU", menuTitle: "The things you need,<br><em>where you already look.</em>",
      menuText: "PinLaunch opens from a taskbar icon into a focused menu of the apps, folders, links, documents, and commands you choose.", menuNote: "Open once. Reach what matters. Get back to work.",
      menuAlt: "Placeholder for a PinLaunch taskbar menu screenshot", menuCaption: "Replace with: taskbar-menu.png",
      settingsEyebrow: "SETTINGS THAT FIT", settingsTitle: "Set the pace.<br><em>Keep control.</em>",
      settingsLead: "Two focused settings areas make PinLaunch feel like your tool—not a fixed launcher you have to work around.",
      appearanceAlt: "Placeholder for a PinLaunch appearance settings screenshot", appearanceCaption: "Replace with: appearance-settings.png", appearanceTitle: "Appearance settings",
      appearanceText: "Choose the theme, size, icon scale, and visual rhythm that feel right on your desktop.",
      appListAlt: "Placeholder for a PinLaunch application list settings screenshot", appListCaption: "Replace with: app-list-settings.png", appListTitle: "Application list",
      appListText: "Build groups, reorder entries, and add the Windows apps and supported PWAs you actually use.",
      stepsEyebrow: "HOW IT WORKS", stepsTitle: "Three small steps.<br><em>A faster start.</em>",
      stepOneTitle: "Pin it", stepOneText: "Place PinLaunch on the taskbar for one-click access.", stepTwoTitle: "Shape it", stepTwoText: "Add and arrange the shortcuts that belong in your day.", stepThreeTitle: "Launch it", stepThreeText: "Open the menu and move on without hunting through windows.",
      privacyEyebrow: "PRIVACY", privacyTitle: "Nothing leaves<br><em>your device.</em>",
      privacyTextOne: "PinLaunch does not collect, transmit, sell, or share personal information. Menu configuration and shortcut or app discovery are processed locally on your device only.",
      privacyTextTwo: "PinLaunch does not include telemetry, analytics, advertising, account sign-in, cloud sync, or automatic update checking.",
      privacyNote: "If a future version adds a network or data-collection feature, this statement will be updated before that version is released.",
      footerText: "Local-first taskbar launching for Windows."
    },
    "zh-CN": {
      pageTitle: "PinLaunch — 整理你的任务栏", skip: "跳到主要内容", navLabel: "主导航", homeLabel: "PinLaunch 首页", backToTop: "回到顶部", languageLabel: "语言",
      navFeatures: "功能", navHow: "使用方法", navPrivacy: "隐私",
      eyebrow: "本地优先的 WINDOWS 工具", heroTitle: "一个任务栏固定点。<br><em>常用入口尽在眼前。</em>",
      heroLead: "PinLaunch 将常用应用、文件夹、网页应用和命令收拢到一个简洁、可配置的启动入口。",
      storeButton: "Microsoft Store", storeStatus: "将在通过 Microsoft Store 认证后提供。", markCaption: "一个固定点，按你的方式启动。",
      platformLabel: "平台支持", platformStrong: "为桌面而生。", platformText: "支持 Windows 10 1809 及更高版本和 Windows 11，仅限 x64。", platformLocal: "菜单留在你的设备上，工作流始终由你掌控。",
      menuEyebrow: "任务栏菜单", menuTitle: "需要的一切，<br><em>就在你熟悉的位置。</em>",
      menuText: "从任务栏图标打开 PinLaunch，即可看到由你选择的应用、文件夹、链接、文档和命令。", menuNote: "打开一次，直达所需，然后继续工作。",
      menuAlt: "PinLaunch 任务栏弹出菜单截图占位", menuCaption: "替换文件：taskbar-menu.png",
      settingsEyebrow: "贴合你的设置", settingsTitle: "设定节奏，<br><em>始终保持掌控。</em>",
      settingsLead: "两个聚焦的设置区域，让 PinLaunch 成为适合你的工具，而不是需要迁就的固定启动器。",
      appearanceAlt: "PinLaunch 外观设置截图占位", appearanceCaption: "替换文件：appearance-settings.png", appearanceTitle: "外观设置",
      appearanceText: "选择适合你桌面的主题、菜单尺寸、图标缩放和视觉节奏。",
      appListAlt: "PinLaunch 应用列表设置截图占位", appListCaption: "替换文件：app-list-settings.png", appListTitle: "应用列表设置",
      appListText: "创建分组、调整顺序，并添加你实际使用的 Windows 应用和受支持的 PWA。",
      stepsEyebrow: "使用方法", stepsTitle: "三个小步骤。<br><em>更快地开始。</em>",
      stepOneTitle: "固定到任务栏", stepOneText: "将 PinLaunch 固定到任务栏，一键打开。", stepTwoTitle: "整理菜单", stepTwoText: "添加并排序每天都会用到的快捷入口。", stepThreeTitle: "快速启动", stepThreeText: "打开菜单，无需在窗口和开始菜单之间反复查找。",
      privacyEyebrow: "隐私", privacyTitle: "没有任何信息离开<br><em>你的设备。</em>",
      privacyTextOne: "PinLaunch 不收集、传输、出售或共享个人信息。菜单配置、快捷方式和应用发现只会在你的设备本地进行。",
      privacyTextTwo: "PinLaunch 不包含遥测、分析、广告、账号登录、云同步或自动更新检查。",
      privacyNote: "如果未来版本加入网络或数据收集功能，此声明会在该版本发布前更新。",
      footerText: "为 Windows 打造的本地优先任务栏启动工具。"
    }
  };

  const languageSelect = document.querySelector("#language-select");
  const languageFromBrowser = () => {
    const preferences = [...(navigator.languages || []), navigator.language].filter(Boolean);
    return preferences.some((language) => language.toLowerCase().startsWith("zh")) ? "zh-CN" : "en";
  };
  const savedLanguage = () => {
    try { return localStorage.getItem(storageKey); } catch { return null; }
  };
  const saveLanguage = (language) => {
    try { localStorage.setItem(storageKey, language); } catch { /* Browser privacy settings may block storage. */ }
  };

  const applyLanguage = (language) => {
    const selectedLanguage = translations[language] ? language : "en";
    const text = translations[selectedLanguage];
    document.documentElement.lang = selectedLanguage;
    document.title = text.pageTitle;
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = text[element.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = text[element.dataset.i18nHtml]; });
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(",").forEach((mapping) => {
        const [attribute, key] = mapping.split(":");
        element.setAttribute(attribute, text[key]);
      });
    });
    languageSelect.value = selectedLanguage;
  };

  document.documentElement.classList.remove("no-js");
  languageSelect.disabled = false;
  applyLanguage(savedLanguage() || languageFromBrowser());
  languageSelect.addEventListener("change", (event) => { saveLanguage(event.target.value); applyLanguage(event.target.value); });

})();
