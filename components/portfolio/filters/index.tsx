import { PORTFOLIO_TYPES, PortfolioTagType } from '@/shared-data/constants/portfolio'
import { Dispatch, SetStateAction } from 'react'
import FilterButton from './button'

export default function PortfolioFilters({
  filter,
  setFilter
}: {
  filter: PortfolioTagType | null
  setFilter: Dispatch<SetStateAction<PortfolioTagType | null>>
}) {
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
      {Object.keys(PORTFOLIO_TYPES).map(filterType => 
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
