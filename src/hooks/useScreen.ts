import useWindowSize from "./useWindowSize"

export enum Screen {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
}

const SCREEN_WIDTH = {
  xs: 0,
  sm: 577,
  md: 768,
  lg: 992,
  xl: 1201,
  "2xl": 1536,
}

const getScreenFromWidth = (width?: number): Screen | undefined => {
  if (!width) {
    return undefined
  }

  if (width && width >= SCREEN_WIDTH["2xl"]) {
    return Screen["2xl"]
  }

  if (width && width >= SCREEN_WIDTH.xl) {
    return Screen.xl
  }

  if (width && width >= SCREEN_WIDTH.lg) {
    return Screen.lg
  }

  if (width && width >= SCREEN_WIDTH.md) {
    return Screen.md
  }
  if (width && width >= SCREEN_WIDTH.sm) {
    return Screen.sm
  }

  return Screen.xs
}

const useScreen = (): Screen | undefined => {
  const { width } = useWindowSize()
  return getScreenFromWidth(width)
}

export default useScreen
