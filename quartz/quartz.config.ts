import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "One The Lab",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: "quartz.onethelab.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      // One The Lab Design System 토큰 매핑
      colors: {
        lightMode: {
          light: "#FAFAF7", // canvas
          lightgray: "#E7E5DD", // hairline
          gray: "#7A7A72", // muted
          darkgray: "#3D3D38", // body
          dark: "#1A1A17", // ink
          secondary: "#C9A600", // yellow-deep (링크/강조)
          tertiary: "#FFD400", // yellow (hover)
          highlight: "rgba(255, 212, 0, 0.15)", // yellow soft tint
          textHighlight: "#FFE76699", // yellow soft (==마크==)
        },
        darkMode: {
          light: "#121210", // canvas
          lightgray: "#33332B", // hairline
          gray: "#8E8C82", // muted
          darkgray: "#CFCDC2", // body
          dark: "#F5F4EC", // ink
          secondary: "#FFD400", // yellow (링크/강조)
          tertiary: "#FFE766", // yellow-soft (hover)
          highlight: "rgba(255, 212, 0, 0.16)",
          textHighlight: "#C9A60088",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages 비활성화: 페이지마다 og webp 생성해 빌드 느림. 링크 공유 프리뷰 안 쓰므로 끔.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
