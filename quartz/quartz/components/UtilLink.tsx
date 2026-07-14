import styles from "./styles/utilLink.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// 좌측 사이드바 아이콘 행(검색·다크모드 옆)에 두는 스패너 버튼.
// util.onethelab.com 을 새 탭으로 연다.
const UtilLink: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <a
      href="https://util.onethelab.com"
      target="_blank"
      rel="noopener noreferrer"
      class={classNames(displayClass, "util-link")}
      aria-label="Util"
      title="Util"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    </a>
  )
}

UtilLink.css = styles

export default (() => UtilLink) satisfies QuartzComponentConstructor
