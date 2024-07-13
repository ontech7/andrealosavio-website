import type { ThemeUICSSObject, ThemeUIStyleObject } from "@theme-ui/core";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  bg?: ThemeUICSSObject["bg"];
  high?: boolean;
  children?: ReactNode;
  ssx?: ThemeUIStyleObject;
}

export default function Section(props: SectionProps) {
  return (
    <section
      id={props.id}
      sx={{
        ...(props.bg ? { background: props.bg } : {}),
        position: "relative",
        padding: !props.high ? "40px 0" : "80px 0",
        overflowX: "hidden",
        ...props.ssx,
      }}
    >
      {props.children}
    </section>
  );
}
