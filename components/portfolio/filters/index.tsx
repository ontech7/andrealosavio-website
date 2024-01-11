import { Dispatch, FC, SetStateAction } from 'react'

import { portfolioTypesMap } from '@/shared-data/constants/portfolio'
import type { PortfolioTagType } from '@/shared-data/constants/portfolio/types'

import FilterButton from './button'

interface IPortfolioFiltersProps {
  filter: PortfolioTagType | null
  setFilter: Dispatch<SetStateAction<PortfolioTagType | null>>
}

const PortfolioFilters: FC<IPortfolioFiltersProps> = ({ filter, setFilter }) => {
  return (
    <div
      sx={{
        mb: "10px",
        alignSelf: "flex-end",
        "& > button": { 
          bg: "transparent",
          fontSize: "link",
          fontWeight: "medium",
          color: "darkBlue",
          borderRadius: "32px",
          lineHeight: "27px",
          p: "1px 10px",
          ml: 1,
          mb: 2
        }
      }}
    >

      {/** all */}
      <FilterButton 
        filterType={null} 
        currentFilter={filter} 
        setFilter={setFilter} 
      />

      {/** others */}
      {Object.keys(portfolioTypesMap).map(filterType => 
        <FilterButton 
          key={filterType}
          filterType={filterType as PortfolioTagType} 
          currentFilter={filter} 
          setFilter={setFilter} 
        />
      )}
      
    </div>
  )
}

export default PortfolioFilters;