import type { FC, ReactNode } from "react";

import Text from "@/components/ui/core/text";

interface IPortfolioDescriptionProps {
  description: ReactNode | string
  active: boolean
}

const PortfolioDescription: FC<IPortfolioDescriptionProps> = ({ description, active }) => {
  return (
    <div
      sx={{ 
        textAlign: "left",
        bg: "white",
        height: !active ? 0 : "270px",
        overflow: "hidden",
        transition: "height 0.3s ease",
      }}
    >

      <Text 
        color="black"
        ssx={{
          px: "25px",
          pt: "5px",
          pb: "15px",
          fontSize: "14px",
          lineHeight: "20px",
          "& a": { textDecoration: "none", fontWeight: "semiBold", color: "darkGreen" }
        }}
      >

        {description}

      </Text>

    </div>
  )
}

export default PortfolioDescription;