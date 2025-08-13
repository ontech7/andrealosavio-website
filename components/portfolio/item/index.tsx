import Image from "@/components/ui/core/image";
import { useState } from "react";

import PortfolioDescription from "./description";
import PortfolioHeader from "./header";
import PortfolioLink from "./link";
import PortfolioOverlay from "./overlay";
import PortfolioTag from "./tag";

import { portfolioTypesMap } from "@/shared-data/constants/portfolio";
import type {
  Portfolio,
  PortfolioTagType,
} from "@/shared-data/constants/portfolio/types";
import { isFilteredOrAll } from "@/shared-data/constants/portfolio/utils";

interface PortfolioItemProps extends Portfolio {
  currFilter: PortfolioTagType | null;
}

export default function PortfolioItem(props: PortfolioItemProps) {
  const [isReadMore, setReadMore] = useState(false);
  const toggle = () => setReadMore((p) => !p);

  const [source, ext] = props.imgSrc.split(".");
  const previewFull = source + "-full." + ext;

  const portofolioTag = portfolioTypesMap[props.tag];

  return (
    <div
      sx={{
        p: "15px",
        height: "335px",
        transition: "all 0.5s ease",
        ...(!isFilteredOrAll(props.currFilter, props.tag) && {
          transform: "scale(0)",
          transformOrigin: "left top",
          width: "0px !important",
          height: "0px !important",
          opacity: 0,
          p: 0,
        }),
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          zIndex: 0,
          height: "100%",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          bg: "white",
        }}
      >
        <Image
          src={props.imgSrc}
          alt=""
          fill
          sx={{ height: "auto !important", zIndex: -2 }}
        />

        <PortfolioOverlay>
          <PortfolioTag name={portofolioTag} />

          <PortfolioLink href={previewFull} type="zoom" />

          {props.link && <PortfolioLink href={props.link} type="link" />}
        </PortfolioOverlay>

        <PortfolioHeader
          title={props.title}
          logo={props.logoSrc}
          active={isReadMore}
          toggle={toggle}
        />

        <PortfolioDescription
          description={props.description}
          active={isReadMore}
        />
      </div>
    </div>
  );
}
