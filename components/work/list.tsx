import { Box } from 'theme-ui'

import WorkItem from './item'

import { worksMap } from '@/shared-data/constants/works'

export default function WorkList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px"
      }}
    >

      {worksMap.map(item => 
        <WorkItem 
          key={item.href}
          {...item} 
        />
      )}
      
    </Box>
  )
}
