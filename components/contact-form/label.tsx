import type { ContactBody } from "@/shared-data/api/contact/types";
import type { FC } from "react";

interface IFormLabelProps {
  name: keyof ContactBody
  text: string 
}

const FormLabel: FC<IFormLabelProps> = ({ name, text }) => {
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
        lineHeight: "27px"
      }}
    >

      {text}

    </label>
  )
}

export default FormLabel;