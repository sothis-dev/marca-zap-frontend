export interface Service {
  id: string
  name: string
  duration: number // minutos
  price: number
  description?: string
  active: boolean
  professionalId: string
  createdAt: string
}

export interface CreateServiceData {
  name: string
  duration: number
  price: number
  description?: string
}
