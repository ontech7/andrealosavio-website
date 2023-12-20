import { ContactBody } from "@/shared-data/api/contact/types";

export default function FormLabel({ 
  name, 
  text 
}: { 
  name: keyof ContactBody, 
  text: string 
}) {
  return (
    <label
      htmlFor={name}
      sx={{
        color: "black",
        display: "block",
        mb: "5px",
        fontSize: "16px",
        fontWeight: 500,
        fontFamily: "inherit",
        lineHeight: "27px"
      }}
    >

      {text}

    </label>
  )
}
