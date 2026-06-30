function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))
  }
}

// 현재 읽고 있는 섹션 하나만 활성화 (지나가면 다시 어둡게)
let headers: HTMLElement[] = []
let ticking = false

function computeActiveSlug(): string | null {
  if (headers.length === 0) return null
  // 뷰포트 상단에서 20% 지점을 기준선으로
  const line = window.scrollY + window.innerHeight * 0.2
  let current = headers[0].id
  for (const header of headers) {
    const top = header.getBoundingClientRect().top + window.scrollY
    if (top <= line) {
      current = header.id
    } else {
      break
    }
  }
  return current
}

function highlightActive() {
  ticking = false
  const slug = computeActiveSlug()
  for (const link of document.querySelectorAll(".toc a[data-for]")) {
    link.classList.toggle("in-view", link.getAttribute("data-for") === slug)
  }
}

function onScroll() {
  if (!ticking) {
    ticking = true
    window.requestAnimationFrame(highlightActive)
  }
}

document.addEventListener("nav", () => {
  setupToc()

  // TOC에 실제로 들어있는 헤더만 대상으로
  const tocSlugs = new Set(
    Array.from(document.querySelectorAll(".toc a[data-for]")).map((a) =>
      a.getAttribute("data-for"),
    ),
  )
  headers = (
    Array.from(
      document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),
    ) as HTMLElement[]
  ).filter((h) => tocSlugs.has(h.id))

  highlightActive()
  window.addEventListener("scroll", onScroll, { passive: true })
  window.addEventListener("resize", onScroll, { passive: true })
  window.addCleanup(() => {
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", onScroll)
  })
})
