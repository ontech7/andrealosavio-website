import type { ContactBody } from "@/shared-data/api/contact/types";

interface FormLabelProps {
  name: keyof ContactBody;
  text: string;
}

export default function FormLabel({ name, text }: FormLabelProps) {
  return (
    <label
      htmlFor={name}
      sx={{
        color: "black",
        display: "block",
        mb: "5px",
        fontFamily: "body",
        fontSize: "link",
        fontWeight: "medium",
        lineHeight: "27px",
      }}
    >
      {text}
    </label>
  );
}
