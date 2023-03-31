export const scrollToTop = (
  element: HTMLElement | null,
  yOffset: number,
  smooth = true
) => {
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: smooth ? "smooth" : "auto" })
  }
}

export const scrollToId = (
  id: string,
  smooth: boolean = true,
  position: ScrollLogicalPosition = "start"
) => {
  if (id) {
    const el = document?.getElementById(id)
    el?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: position,
    })
  }
}
