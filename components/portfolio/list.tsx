import { useState } from 'react';

import PortfolioFilters from './filters';
import PortfolioItem from './item';

import { portfolioMap } from '@/shared-data/constants/portfolio';
import type { PortfolioTagType } from '@/shared-data/constants/portfolio/types';

export default function PortfolioList() {
  const [filter, setFilter] = useState<PortfolioTagType | null>(null);

  return (
    <>

      <PortfolioFilters 
        filter={filter} 
        setFilter={setFilter} 
      />

      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mx: "-15px",
          "& > *": { width: "33.3333%" },
          "@media (max-width: 1200px)": { "& > *": { width: "50%" } },
          "@media (max-width: 991px)": { "& > *": { width: "100%" } },
        }}
      >

        {portfolioMap.map(item => 
          <PortfolioItem
            key={item.title}
            currFilter={filter}
            {...item}
          />
        )}

      </div>

    </>
  )
}
