import type { LocaleCode } from "./content";

export type PrivacyPolicyContent = {
  meta: { title: string; description: string; socialTitle: string; socialDescription: string };
  eyebrow: string;
  title: string;
  effectiveDateLabel: string;
  effectiveDate: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
  contact: { title: string; text: string; emailLabel: string };
  backToHome: string;
};

export const privacyPolicies: Record<LocaleCode, PrivacyPolicyContent> = {
  en: {
    meta: {
      title: "Privacy Policy — PinLaunch",
      description: "PinLaunch privacy policy, effective October 22, 2026.",
      socialTitle: "Privacy Policy — PinLaunch",
      socialDescription: "How PinLaunch handles information."
    },
    eyebrow: "Privacy policy",
    title: "Your data stays under your control.",
    effectiveDateLabel: "Effective date",
    effectiveDate: "October 22, 2026",
    intro: "This Privacy Policy explains how PinLaunch handles information in the PinLaunch Windows application and on this privacy-policy website.",
    sections: [
      { title: "Information processed on your device", paragraphs: ["PinLaunch processes its configuration and shortcut discovery on your device. This can include configured apps, folders, documents, websites, commands, groups, display preferences, and shortcut-discovery results.", "Names, paths, and URLs in your configuration may contain personal information. PinLaunch does not send that information to us."] },
      { title: "No collection, transfer, sale, or sharing", paragraphs: ["The current version of PinLaunch does not include telemetry, analytics, advertising SDKs, account sign-in, cloud sync, automatic update checks, or background network requests.", "We do not collect, transmit, sell, or share personal information from the PinLaunch application."] },
      { title: "Targets you choose to launch", paragraphs: ["PinLaunch can launch websites, commands, and third-party applications that you configure. Once you launch one of those targets, its provider's privacy practices apply to its own processing. That processing is outside PinLaunch."] },
      { title: "Website information", paragraphs: ["This website does not use first-party analytics, advertising, tracking scripts, or nonessential cookies. Website hosting and network providers may process standard technical logs for service operation and security under their own privacy policies."] },
      { title: "Retention, children, and security", paragraphs: ["PinLaunch does not hold user data remotely. Local configuration remains under your control and can be removed by you.", "PinLaunch is not directed to children and does not knowingly collect children's personal information."] },
      { title: "Changes to this policy", paragraphs: ["If we introduce a network, telemetry, or other data-processing feature, we will update this policy and its effective date before that feature is released."] }
    ],
    contact: { title: "Contact", text: "For privacy questions, contact", emailLabel: "admin@fynxlab.com" },
    backToHome: "Back to PinLaunch"
  },
  "zh-CN": {
    meta: {
      title: "隐私策略 — PinLaunch",
      description: "PinLaunch 隐私策略，生效日期为 2026 年 10 月 22 日。",
      socialTitle: "隐私策略 — PinLaunch",
      socialDescription: "了解 PinLaunch 如何处理信息。"
    },
    eyebrow: "隐私策略",
    title: "你的数据，始终由你掌控。",
    effectiveDateLabel: "生效日期",
    effectiveDate: "2026 年 10 月 22 日",
    intro: "本隐私策略说明 PinLaunch 如何处理 PinLaunch Windows 应用和本隐私策略网站中的信息。",
    sections: [
      { title: "仅在你的设备上处理的信息", paragraphs: ["PinLaunch 会在你的设备上处理配置和快捷方式发现结果。这可能包括已配置的应用、文件夹、文档、网站、命令、分组、显示偏好和快捷方式发现结果。", "配置中的名称、路径和网址可能包含个人信息。PinLaunch 不会将这些信息发送给我们。"] },
      { title: "不收集、不传输、不出售或共享", paragraphs: ["当前版本的 PinLaunch 不包含遥测、分析、广告 SDK、账号登录、云同步、自动更新检查或后台网络请求。", "我们不会从 PinLaunch 应用收集、传输、出售或共享个人信息。"] },
      { title: "由你选择启动的目标", paragraphs: ["PinLaunch 可以启动你配置的网站、命令和第三方应用。启动这些目标后，其提供者的隐私规则将适用于其自身的信息处理；该处理不属于 PinLaunch。"] },
      { title: "网站信息", paragraphs: ["本站不使用第一方分析、广告、跟踪脚本或非必要 Cookie。网站托管与网络服务提供方可能会根据其自身隐私策略，为运行服务和保障安全而处理常规技术日志。"] },
      { title: "保留、儿童隐私与安全", paragraphs: ["PinLaunch 不会在远程保存用户数据。本地配置始终由你控制，也可由你自行删除。", "PinLaunch 不面向儿童，也不会有意收集儿童的个人信息。"] },
      { title: "本策略的变更", paragraphs: ["如我们计划引入网络、遥测或其他数据处理功能，会在发布该功能前更新本策略及其生效日期。"] }
    ],
    contact: { title: "联系我们", text: "如有隐私相关问题，请联系", emailLabel: "admin@fynxlab.com" },
    backToHome: "返回 PinLaunch 首页"
  },
  ja: {
    meta: {
      title: "プライバシーポリシー — PinLaunch",
      description: "2026 年 10 月 22 日発効の PinLaunch プライバシーポリシー。",
      socialTitle: "プライバシーポリシー — PinLaunch",
      socialDescription: "PinLaunch による情報の取り扱い。"
    },
    eyebrow: "プライバシーポリシー",
    title: "データの管理は、あなたの手元に。",
    effectiveDateLabel: "発効日",
    effectiveDate: "2026 年 10 月 22 日",
    intro: "本プライバシーポリシーは、PinLaunch Windows アプリケーションおよび本プライバシーポリシーサイトにおける情報の取り扱いを説明します。",
    sections: [
      { title: "デバイス上で処理される情報", paragraphs: ["PinLaunch は、設定とショートカットの検出をお使いのデバイス上で処理します。これには、設定したアプリ、フォルダー、文書、Web サイト、コマンド、グループ、表示設定、およびショートカット検出の結果が含まれることがあります。", "設定内の名前、パス、URL には個人情報が含まれる場合があります。PinLaunch はその情報を当社に送信しません。"] },
      { title: "収集、送信、販売、共有を行わないこと", paragraphs: ["現在の PinLaunch には、テレメトリ、分析、広告 SDK、アカウントサインイン、クラウド同期、自動更新チェック、バックグラウンドのネットワークリクエストは含まれていません。", "当社は PinLaunch アプリから個人情報を収集、送信、販売、共有しません。"] },
      { title: "ユーザーが起動する対象", paragraphs: ["PinLaunch は、設定した Web サイト、コマンド、サードパーティ製アプリケーションを起動できます。これらの対象を起動した後の情報処理には、それぞれの提供者のプライバシー慣行が適用されます。その処理は PinLaunch の対象外です。"] },
      { title: "Web サイトに関する情報", paragraphs: ["本サイトでは、ファーストパーティの分析、広告、トラッキングスクリプト、不要な Cookie を使用していません。Web サイトのホスティングおよびネットワーク提供者は、サービス運用とセキュリティのために、各自のプライバシーポリシーに基づき標準的な技術ログを処理する場合があります。"] },
      { title: "保持、児童のプライバシー、セキュリティ", paragraphs: ["PinLaunch はユーザーデータをリモートで保持しません。ローカル設定はユーザーが管理し、削除できます。", "PinLaunch は児童向けではなく、児童の個人情報を意図的に収集しません。"] },
      { title: "本ポリシーの変更", paragraphs: ["ネットワーク、テレメトリ、その他のデータ処理機能を導入する場合は、その機能を公開する前に本ポリシーと発効日を更新します。"] }
    ],
    contact: { title: "お問い合わせ", text: "プライバシーに関するお問い合わせは、", emailLabel: "admin@fynxlab.com" },
    backToHome: "PinLaunch トップへ戻る"
  }
};
