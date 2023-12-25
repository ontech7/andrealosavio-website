import { ReactNode } from 'react'


export default function FormFieldset({ children }: { children?: ReactNode }) {
  return (
    <fieldset sx={{ m: 0, p: 0, border: 0 }}>

      {children}

    </fieldset>
  )
}
