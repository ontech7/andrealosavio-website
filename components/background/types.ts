import type { ThemeUIStyleObject } from "@theme-ui/core"

export type BgName =
  | "blue"
  | "blue-and-light"
  | "hero"
  | "light"
  | "light-short"
  | "sfumato-light"
  | "triangle-blue"
  | "collaborazioni"

export type BgComponent =  ({ ssx }: { ssx: ThemeUIStyleObject }) => JSX.Element