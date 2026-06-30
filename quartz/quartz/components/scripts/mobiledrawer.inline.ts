function closeDrawer() {
  document.body.classList.remove("left-drawer-open")
}

function toggleDrawer(e: Event) {
  e.stopPropagation()
  document.body.classList.toggle("left-drawer-open")
}

document.addEventListener("nav", () => {
  // 페이지 이동 시 항상 닫힘
  closeDrawer()

  const toggle = document.querySelector(".left-drawer-toggle")
  const backdrop = document.querySelector(".left-drawer-backdrop")
  if (!toggle) return

  toggle.addEventListener("click", toggleDrawer)
  backdrop?.addEventListener("click", closeDrawer)
  window.addCleanup(() => {
    toggle.removeEventListener("click", toggleDrawer)
    backdrop?.removeEventListener("click", closeDrawer)
  })
})
