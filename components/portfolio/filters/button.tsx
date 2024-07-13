import type { Dispatch, SetStateAction } from "react";

import Button from "@/components/ui/core/button";

import { portfolioTypesMap } from "@/shared-data/constants/portfolio";
import type { PortfolioTagType } from "@/shared-data/constants/portfolio/types";

interface FilterButtonProps {
  filterType: PortfolioTagType | null;
  currentFilter: PortfolioTagType | null;
  setFilter: Dispatch<SetStateAction<PortfolioTagType | null>>;
}

export default function FilterButton({
  filterType,
  currentFilter,
  setFilter,
}: FilterButtonProps) {
  const filter = filterType ? portfolioTypesMap[filterType] : "Tutto";

  return (
    <Button
      onClick={() => setFilter(filterType)}
      ssx={{
        ...(filterType == currentFilter && {
          background: "linearYellowGreen",
        }),
      }}
    >
      # {filter}
    </Button>
  );
}
