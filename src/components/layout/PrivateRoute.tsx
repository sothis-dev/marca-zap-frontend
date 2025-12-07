import { Navigate } from '@tanstack/react-router'
import { isAuthenticated } from '@/lib/auth'

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
