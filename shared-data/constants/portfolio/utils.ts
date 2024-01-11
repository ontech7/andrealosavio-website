import type { PortfolioTagType } from "./types";

export const isFilteredOrAll = (
  currFilter: PortfolioTagType | null,
  selectedFilter: PortfolioTagType | null
) => currFilter == selectedFilter || currFilter == null;