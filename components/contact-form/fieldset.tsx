import { ReactNode } from 'react'
import { Box } from 'theme-ui'

export default function FormFieldset({ children }: { children?: ReactNode }) {
  return (
    <Box as="fieldset" sx={{ m: 0, p: 0, border: 0 }}>

      {children}

    </Box>
  )
}
