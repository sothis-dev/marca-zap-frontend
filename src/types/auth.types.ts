export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  phone: string
  slug: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface User {
  id: string
  email: string
  name: string
}
