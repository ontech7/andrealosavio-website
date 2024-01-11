import type { ThemeUIStyleObject } from '@theme-ui/core'
import type { ButtonHTMLAttributes, ClassAttributes, FC } from 'react'

interface CustomButtonProps { 
  variant?: string
  ssx?: ThemeUIStyleObject 
}

type ButtonAttributes = 
  ClassAttributes<HTMLButtonElement> & 
  ButtonHTMLAttributes<HTMLButtonElement> & 
  CustomButtonProps

interface IButtonProps extends ButtonAttributes {}

const Button: FC<IButtonProps> = (props) => {
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

export default Button;