import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/cadastro')({
  component: CadastroPage,
})

const registerSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  slug: z.string()
    .min(3, 'Slug deve ter no mínimo 3 caracteres')
    .regex(/^[a-z0-9-]+$/, 'Apenas letras minúsculas, números e hífen'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

type RegisterForm = z.infer<typeof registerSchema>

function CadastroPage() {
  const { register: registerUser, isRegistering } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterForm) => {
    registerUser(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Criar Conta no MarcaZap</CardTitle>
          <CardDescription>
            Comece a gerenciar seus agendamentos via WhatsApp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" {...register('name')} />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Telefone/WhatsApp</Label>
              <Input id="phone" placeholder="(11) 99999-9999" {...register('phone')} />
              {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <Label htmlFor="slug">Slug (URL personalizada)</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">marcazap.com/agendar/</span>
                <Input id="slug" placeholder="seu-nome" {...register('slug')} />
              </div>
              {errors.slug && <p className="text-sm text-red-500 mt-1">{errors.slug.message}</p>}
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isRegistering}>
              {isRegistering ? 'Criando conta...' : 'Criar Conta'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Já tem conta?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Entrar
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
