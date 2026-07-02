import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// footer moved into the left sidebar bottom
const footer = Component.Footer({
  links: {
    GitHub: "https://github.com/gunug/onethelab-quartz",
    Site: "https://quartz.onethelab.com",
  },
})

// 파일을 폴더보다 먼저 표시 (모든 계층 재귀 적용)
const explorer = Component.Explorer({
  sortFn: (a, b) => {
    if (a.isFolder !== b.isFolder) return a.isFolder ? 1 : -1 // 파일 먼저
    return a.displayName.localeCompare(b.displayName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  // 데스크탑/태블릿: 좌측 사이드바 하단에 표시. 모바일: 페이지 최하단(grid-footer)에 표시
  footer: Component.MobileOnly(footer),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
    Component.DesktopOnly(footer),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    explorer,
    Component.DesktopOnly(footer),
  ],
  right: [],
}
