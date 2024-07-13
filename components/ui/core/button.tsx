import type { ThemeUIStyleObject } from "@theme-ui/core";
import type { ButtonHTMLAttributes, ClassAttributes } from "react";

interface CustomButtonProps {
  variant?: string;
  ssx?: ThemeUIStyleObject;
}

type ButtonAttributes = ClassAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> &
  CustomButtonProps;

interface ButtonProps extends ButtonAttributes {}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      sx={{
        fontFamily: "body",
        border: 0,
        cursor: "pointer",
        ...props.ssx,
        ...(props.variant && { variant: `buttons.${props.variant}` }),
      }}
    >
      {props.children}
    </button>
  );
}
