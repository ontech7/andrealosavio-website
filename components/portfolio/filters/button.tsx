import type { Dispatch, SetStateAction } from 'react'

import Button from '@/components/ui/core/button'

import { PORTFOLIO_TYPES, type PortfolioTagType } from '@/shared-data/constants/portfolio'

export default function FilterButton({ 
  filterType,
  currentFilter,
  setFilter 
}: {
  filterType: PortfolioTagType | null
  currentFilter: PortfolioTagType | null
  setFilter: Dispatch<SetStateAction<PortfolioTagType | null>>
}) {
  const filter = filterType ? PORTFOLIO_TYPES[filterType] : "Tutto"

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
