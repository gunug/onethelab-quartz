import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/mobiledrawer.inline"

// 모바일에서 좌측 사이드바를 슬라이드 드로어로 여닫는 토글 + 백드롭
const MobileDrawer: QuartzComponent = () => {
  return (
    <div class="mobile-drawer-controls">
      <button class="left-drawer-toggle" aria-label="메뉴 열기/닫기">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div class="left-drawer-backdrop"></div>
    </div>
  )
}

MobileDrawer.afterDOMLoaded = script

export default (() => MobileDrawer) satisfies QuartzComponentConstructor
