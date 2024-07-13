import { keyframes } from "@emotion/react";
import type { ThemeUIStyleObject } from "@theme-ui/core";
import type { ReactNode } from "react";

import Text from "../core/text";

const underlineAnim = keyframes({ from: { width: 0 }, to: { width: "100%" } });

interface KeyPointProps {
  as?: string;
  variant?: string;
  color?: "green" | "darkGreen";
  delay?: number;
  children?: ReactNode;
  ssx?: ThemeUIStyleObject;
}

export default function KeyPoint(props: KeyPointProps) {
  return (
    <Text
      as={props.as ?? "span"}
      variant={props.variant}
      ssx={{
        position: "relative",
        display: "inline-block",

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 0,
          height: "3px",
          backgroundColor: props.color ?? "green",
          transition: "width 300ms",
          animation: `${underlineAnim} 1s forwards ease-in-out`,
          ...(props.delay ? { animationDelay: `${props.delay}ms` } : {}),
        },

        ...props.ssx,
      }}
    >
      {props.children}
    </Text>
  );
}
