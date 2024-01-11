import type { ChangeEvent, FC } from 'react';

import type { InputProps } from './types';

interface IFormTextareaProps extends Pick<
  InputProps<string>, 
  "name" | "required" | "value" | "setValue"
> {};

const FormTextarea: FC<IFormTextareaProps> = ({ name, required, value, setValue }) =>  {
  return (
    <textarea
      rows={3}
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
        resize: "vertical",

        "&:focus": {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "yelow",
          outline: 0
        }
      }}
      name={name}
      required={required}
      value={value}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>)  => {
        setValue(name, e.target.value)
      }}
    />
  )
}

export default FormTextarea;