import type { ChangeEvent, FC } from 'react';

import type { InputProps } from './types';

interface IFormInputProps extends Pick<
  InputProps<string>, 
  "name" | "required" | "type" | "adornment" | "value" | "setValue"
> {};

const FormInput: FC<IFormInputProps> = ({ name, required, type, adornment, value, setValue }) => {

  const img = adornment ? require(`./images/${adornment}.svg`) : null;

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
        fontWeight: "regular",
        fontSize: "link",
        fontFamily: "body",
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
      required={required}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(name, e.target.value)
      }}
    />
  )
}

export default FormInput;