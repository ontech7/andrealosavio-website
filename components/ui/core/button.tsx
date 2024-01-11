import type { ThemeUIStyleObject } from '@theme-ui/core'
import type { ButtonHTMLAttributes, ClassAttributes } from 'react'

interface CustomButtonProps { 
  variant?: string
  ssx?: ThemeUIStyleObject 
}

type ButtonAttributes = 
  ClassAttributes<HTMLButtonElement> & 
  ButtonHTMLAttributes<HTMLButtonElement> & 
  CustomButtonProps

export default function Button(props: ButtonAttributes) {
  return (
    <button 
      {...props}
      sx={{ 
        fontFamily: "body",
        border: 0,
        cursor: "pointer",
        ...props.ssx, 
        ...props.variant && { variant: `buttons.${props.variant}` } 
      }}
    >


      {props.children}
    
    </button>
  )
}
