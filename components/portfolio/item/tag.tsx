import type { FC } from "react";

import Text from "@/components/ui/core/text";

export interface IPortfolioTagProps {
  name: string
}

const PortfolioTag: FC<IPortfolioTagProps> = ({ name }) => {
  return (
    <Text
      color="black"
      ssx={{ 
        position: "absolute",
        top: 20,
        left: 20,
        fontWeight: "semiBold",
        fontSize: "14px",
        background: "linearYellowGreen", 
        borderRadius: "32px", 
        p: "1px 10px" 
      }}
    >
      # {name}
    </Text>
  )
}

export default PortfolioTag;