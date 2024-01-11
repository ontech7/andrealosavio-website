import type { ChangeEvent, FC } from 'react';

import type { SubjectType } from '@/shared-data/api/contact/types';
import type { InputProps } from './types';

import arrowDownSvg from "./images/arrow-down.svg";

interface IFormSelectProps extends Pick<
  InputProps<SubjectType | string>, 
  "name" | "required" | "options" | "value" | "setValue"
> {};

const FormSelect: FC<IFormSelectProps> = ({ name, required, options, value, setValue }) => {
  return (
    <select
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
        backgroundImage: `url(${arrowDownSvg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "97%",
        backgroundPositionY: "9px",
        
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
      onChange={(e: ChangeEvent<HTMLSelectElement>)  => {
        setValue(name, e.target.value)
      }}
    >

      {options?.map(([key, value], i) =>
        <option 
          key={key}
          {...!value && { disabled: true }} 
          value={key} 
        >
          {value}
        </option>
      )}

    </select>
  )
}

export default FormSelect;