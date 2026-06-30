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

// 현재 viewport에 보이는 모든 제목을 활성화
let headers: HTMLElement[] = []
let ticking = false

function highlightActive() {
  ticking = false
  const vh = window.innerHeight
  const activeSlugs = new Set<string>()
  for (const header of headers) {
    const rect = header.getBoundingClientRect()
    // 헤더 요소가 viewport 안에 보이면 활성
    if (rect.bottom > 0 && rect.top < vh) {
      activeSlugs.add(header.id)
    }
  }
  for (const link of document.querySelectorAll(".toc a[data-for]")) {
    const slug = link.getAttribute("data-for")
    link.classList.toggle("in-view", slug !== null && activeSlugs.has(slug))
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
