import { FC, ReactElement } from "react"

import useScreen, { Screen } from "../../hooks/useScreen"

interface Props {
  visible?: string[]
  hidden?: string[]
  seoReadable?: boolean
  children: ReactElement
}

const MediaQueries: FC<Props> = ({
  visible,
  hidden,
  seoReadable = true,
  children,
}) => {
  if (!children) return null

  const screen = useScreen()
  if ((!screen || !Screen) && seoReadable) return children
  if ((!screen || !Screen) && !seoReadable) return null

  const selected = new Set(visible || hidden)
  const breakpoints = selected.size
    ? Object.values(Screen)
        .filter((breakpoint) => {
          if (visible && selected.has(breakpoint)) return true
          if (hidden && !selected.has(breakpoint)) return true
          return false
        })
        .includes(screen as Screen)
    : Object.values(Screen).includes(screen as Screen)

  return breakpoints ? children : null
}

export default MediaQueries
