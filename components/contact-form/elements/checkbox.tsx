
import type { ChangeEvent } from 'react'

import type { InputProps } from './types'

import checkedSvg from "./images/checkmark.svg"

export default function FormCheckbox({ 
  text,
  name,
  value,
  setValue
}: Pick<InputProps<string>, "text" | "name" | "value" | "setValue">) {
  return (
    <label
      sx={{
        color: "black",
        fontSize: "16px",
        fontWeight: 400,
        display: "flex",
        cursor: "pointer",
        lineHeight: "27px"
      }}
    >
      <input
        sx={{
          m: 0,
          mr: "10px",
          mt: "2px",
          minWidth: "20px",
          minHeight: "20px",
          maxWidth: "20px",
          maxHeight: "20px",
          backgroundColor: "white",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "yellow",
          borderRadius: "5px",
          boxShadow: "0px 2px 4px #3334",
          appearance: "none",
          cursor: "pointer",

          "&:checked": {
            backgroundImage: `url(${checkedSvg.src})`,
            backgroundSize: "15px 11px",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "2px",
            backgroundPositionY: "4px"
          }
        }}
        type="checkbox"
        name={name}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(name, value)
        }}
      />

      <span 
        sx={{ 
          "& a": { color: "darkGreen", fontWeight: 500 }
        }}
      >
        {text}
      </span>

    </label>
  )
}
