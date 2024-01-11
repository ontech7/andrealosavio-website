import type { ChangeEvent, FC } from 'react';

import type { InputProps } from './types';

import Text from '@/components/ui/core/text';

import checkedSvg from "./images/checkmark.svg";

interface IFormCheckboxProps extends Pick<
  InputProps<string>, 
  "text" | "required" | "name" | "value" | "setValue"
> {};

const FormCheckbox: FC<IFormCheckboxProps> = ({ text, required, name, value, setValue }) => {
  return (
    <label
      sx={{
        color: "black",
        fontSize: "link",
        fontWeight: "regular",
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
          fontFamily: "body",

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
        required={required}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(name, value)
        }}
      />

      <Text as="span" ssx={{ 
        "& a": { color: "darkGreen", fontWeight: "medium" }
      }}>
        {text}
      </Text>

    </label>
  )
}

export default FormCheckbox;