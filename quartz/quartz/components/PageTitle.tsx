import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <span class="page-title-logo" aria-hidden="true">
          <svg viewBox="6.04 9.1 11.73 5.8" role="img" aria-label="One The Lab">
            <g transform="translate(6,6) scale(0.5)">
              <g transform="translate(0,6.062) scale(0.40276) translate(-268.052,-406.287)">
                <path
                  fillRule="evenodd"
                  d="M284.609,412.015 276.566,407.371 268.991,411.744 268.991,430.320 276.567,434.693 292.654,425.406 292.654,416.659 Z M275.626,427.571 275.628,414.494 286.952,421.032 Z"
                />
                <polygon points="294.527,415.577 286.953,411.203 293.590,407.371 308.740,416.118 301.166,420.491 301.166,430.320 294.527,434.152" />
                <polygon points="309.678,407.912 303.979,411.202 309.678,414.494" />
                <polygon points="309.678,417.742 303.041,421.573 303.041,430.320 310.615,434.692 325.766,425.947 319.128,422.114 309.678,427.571" />
              </g>
            </g>
          </svg>
        </span>
        <span class="page-title-text">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.4rem;
  margin: 0;
  font-family: var(--titleFont);
}
.page-title-link {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.01em;
  color: var(--dark);
}
.page-title-logo {
  display: grid;
  place-items: center;
  flex: none;
}
.page-title-logo svg {
  width: 40px;
  height: auto;
  display: block;
}
.page-title-logo svg path,
.page-title-logo svg polygon {
  fill: var(--hhg-yellow, #ffd400);
}
.page-title-text {
  line-height: 1.1;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
