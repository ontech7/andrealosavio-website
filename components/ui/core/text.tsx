import type { ThemeUIStyleObject } from "@theme-ui/core";
import type { ReactNode } from "react";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "strong"
  | "b"
  | "small"
  | "sup"
  | "sub"
  | "strike"
  | "s"
  | "quote"
  | "q"
  | "pre"
  | "legend"
  | "code";

interface TextProps {
  as?: TextType | string;
  variant?: string;
  color?: string;
  ssx?: ThemeUIStyleObject;
  children?: ReactNode;
}

export default function Text(props: TextProps) {
  const TextComponent = `${props.as ?? "p"}` as keyof JSX.IntrinsicElements;

  return (
    <TextComponent
      {...props}
      sx={{
        fontFamily: "body",
        variant: `text.${props.variant ?? props.as ?? "p"}`,
        ...(props.color && { color: props.color }),
        ...props.ssx,
      }}
    >
      {props.children}
    </TextComponent>
  );
}
