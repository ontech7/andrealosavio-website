import type { ThemeUIStyleObject } from "@theme-ui/core";
import type { ReactNode } from "react";

import Text from "../../core/text";

import customHighlightSvg from "./images/custom-highlight-green.svg";

interface HighlightTextProps {
  as?: string;
  variant?: string;
  color?: string;
  bg?: "green" | "yellow" | "custom";
  children?: ReactNode;
  ssx?: ThemeUIStyleObject;
}

export default function HighlightText(props: HighlightTextProps) {
  const isCustom = props.bg == "custom";

  return (
    <Text
      as={props.as ?? "span"}
      variant={props.variant}
      color={props.color ?? "black"}
      ssx={{
        ...(!isCustom
          ? {
              bg: props.bg ?? "green",
              padding: "0 3px",
            }
          : {
              backgroundImage: `url(${customHighlightSvg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              width: "100%",
              padding: "10px",
            }),

        ...props.ssx,
      }}
    >
      {props.children}
    </Text>
  );
}
