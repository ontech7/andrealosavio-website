import type { ThemeUIStyleObject } from "@theme-ui/core";

import type { BgName } from "./types";
import { backgroundMap } from "./utils";

interface BackgroundProps {
  bgImg: BgName;
  placement: "top" | "bottom";
  ssx?: ThemeUIStyleObject;
}

export default function Background({ bgImg, placement, ssx }: BackgroundProps) {
  const BgComponent = backgroundMap[bgImg];

  return (
    <BgComponent
      ssx={{
        display: "block",
        transform: `rotate(${placement == "bottom" ? "0deg" : "180deg"})`,
        width: "100%",
        height: "100%",
        ...ssx,
      }}
    />
  );
}
