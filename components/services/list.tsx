import { servicesMap } from '@/shared-data/constants/services';
import { Box } from 'theme-ui';
import ServiceItem from './item';

export default function ServiceList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "relative",
        zIndex: 2,
        padding: "20px 10px"
      }}
    >

      {servicesMap.map(service =>
        <ServiceItem 
          key={service.alt} 
          {...service} 
        />
      )}
      
    </Box>
  )
}
