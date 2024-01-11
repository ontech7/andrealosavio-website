import type { Dispatch, FC, SetStateAction } from 'react'

import Button from '@/components/ui/core/button'

import { portfolioTypesMap } from '@/shared-data/constants/portfolio'
import type { PortfolioTagType } from '@/shared-data/constants/portfolio/types'

interface IFilterButtonProps {
  filterType: PortfolioTagType | null
  currentFilter: PortfolioTagType | null
  setFilter: Dispatch<SetStateAction<PortfolioTagType | null>>
}

const FilterButton: FC<IFilterButtonProps> = ({ filterType, currentFilter, setFilter }) => {
  const filter = filterType ? portfolioTypesMap[filterType] : "Tutto"

  return (
    <Button 
      onClick={() => setFilter(filterType)} 
      ssx={{ 
        ...filterType == currentFilter && { 
          background: "linearYellowGreen"
        }}
      }
    >
      # {filter}
    </Button>
  )
}

export default FilterButton;