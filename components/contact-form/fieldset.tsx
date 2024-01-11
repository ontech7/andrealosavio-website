import { FC, ReactNode } from 'react';

interface IFormFieldsetProps {
  children?: ReactNode
}

const FormFieldset: FC<IFormFieldsetProps> = ({ children }) => {
  return (
    <fieldset sx={{ m: 0, p: 0, border: 0 }}>

      {children}

    </fieldset>
  )
}

export default FormFieldset;