import type { InputHTMLAttributes, ReactNode } from "react";

import type { ContactBody } from "@/shared-data/api/contact/types";

export type InputAdornment = "mail" | "user"

export type InputOption = {
  value: string
  selected: boolean
  disabled: boolean
}

export type InputProps<T> = {
  text: string | ReactNode
  name: keyof ContactBody
  type: InputHTMLAttributes<HTMLInputElement>["type"]
  adornment?: InputAdornment
  options?: [string, string][]
  value: T
  setValue: (name: string, value: string) => void
}