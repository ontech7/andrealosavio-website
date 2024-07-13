
export type ContactBody = {
  subject: string
  name: string
  email: string
  message: string
  privacy: boolean
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