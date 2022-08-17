import { IOpportunity } from "./iopportunity"

export interface IClient{
    name: string
    email: string
    isActive: boolean
    phone: string
    revenue: number
    agreedTerms: boolean
    opportunities?: IOpportunity[]
  }