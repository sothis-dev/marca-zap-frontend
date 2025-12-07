import { createFileRoute, Link } from '@tanstack/react-router'
import { Calendar, Bell, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Agendamentos Automáticos via WhatsApp
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Pare de responder "Tem horário às 14h?" toda hora.
            Seus clientes agendam sozinhos, você foca no que importa.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/cadastro">
              <Button size="lg" variant="secondary" className="gap-2">
                Começar Grátis <ArrowRight size={20} />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Já tenho conta
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Calendar}
              title="Agenda Automática"
              description="Configure seus horários disponíveis uma vez. Seus clientes veem apenas os horários livres em tempo real."
            />
            <FeatureCard
              icon={MessageCircle}
              title="Link de Agendamento"
              description="Compartilhe um único link no WhatsApp. Cliente escolhe serviço, horário e pronto!"
            />
            <FeatureCard
              icon={Bell}
              title="Lembretes Automáticos"
              description="Envie lembretes automáticos via WhatsApp antes do agendamento. Reduza faltas."
            />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para automatizar seus agendamentos?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Crie sua conta grátis em menos de 2 minutos
          </p>
          <Link to="/cadastro">
            <Button size="lg" variant="secondary">
              Criar Conta Grátis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }: {
  icon: any
  title: string
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-blue-600" size={24} />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
