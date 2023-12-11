export type ContactBody = {
  subject: SubjectType | string | null
  name: string
  email: string
  message: string
}

export type ContactResponseData = {
  success: boolean
  message?: any
}

export type SubjectType =
  | "website"
  | "app"
  | "consulting"
  | "design"
  | "teach"
  | "collab"
  | "other"