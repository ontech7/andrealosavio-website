import type { ReactNode } from "react";

import { portfolioTypesMap } from ".";

export type PortfolioTagType = keyof typeof portfolioTypesMap;

export type Portfolio = {
  tag: PortfolioTagType
  title: string
  description: ReactNode | string
  imgSrc: string
  link?: string
}
