import type { ReactNode } from "react";

interface FormFieldsetProps {
  children?: ReactNode;
}

export default function FormFieldset({ children }: FormFieldsetProps) {
  return <fieldset sx={{ m: 0, p: 0, border: 0 }}>{children}</fieldset>;
}
