import type { ChangeEvent } from 'react';

import type { InputProps } from './types';

export default function FormInput({ 
  name,
  type,
  adornment,
  value,
  setValue
}: Pick<InputProps<string>, "name" | "type" | "adornment" | "value" | "setValue">) {

  const img = adornment ? require(`./images/${adornment}.svg`) : null;

  console.log()
  return (
    <input
      sx={{
        position: "relative",
        p: "7px 50px 7px 20px",
        color: "black",
        backgroundColor: "white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "yellow",
        boxShadow: "0px 2px 4px #3334",
        borderRadius: "10px",
        fontWeight: 400,
        fontSize: "16px",
        fontFamily: "inherit",
        width: "100%",
        appearance: "none",
        lineHeight: "27px",

        ...adornment && { 
          backgroundImage: `url(${img.default.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "97%",
          backgroundPositionY: "9px"
        },

        "&:focus": {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "yelow",
          outline: 0
        }
      }}
      type={type}
      name={name}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(name, e.target.value)
      }}
    />
  )
}
