import { ArrowRight, Brain, CheckCircle2, MessageSquare, Server } from 'lucide-react'

import { useInView } from '@/hooks/useInView'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface FlowStep {
  icon: React.ElementType
  title: string
  description: string
  techDetail: string
}

const flowSteps: Array<FlowStep> = [
  {
    icon: MessageSquare,
    title: 'Mensagem chega',
    description: 'Cliente envia "Quero marcar um horário" no WhatsApp',
    techDetail: 'WhatsApp Business API recebe webhook em tempo real',
  },
  {
    icon: Server,
    title: 'Servidor processa',
    description: 'Sistema recebe, valida e prepara para processamento',
    techDetail: 'Node.js + TypeScript processam em <100ms',
  },
  {
    icon: Brain,
    title: 'IA entende contexto',
    description: 'Inteligência artificial analisa intenção e histórico',
    techDetail: 'LLM processa texto/áudio + consulta agenda',
  },
  {
    icon: CheckCircle2,
    title: 'Resposta automática',
    description: 'Cliente recebe opções, escolhe e confirma sozinho',
    techDetail: 'Mensagem + botões interativos via API',
  },
]

export function TechnicalFlow() {
  const [titleRef, titleInView] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-20 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Como funciona por baixo dos panos
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Tecnologia que trabalha para você em milissegundos. Do WhatsApp até a confirmação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flowSteps.map((step, index) => (
            <FlowStepCard key={step.title} step={step} index={index} />
          ))}
        </div>

        {/* Flow arrows for desktop */}
        <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-4 gap-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center justify-end">
                  <ArrowRight className="w-8 h-8 text-emerald-500/30 dark:text-emerald-500/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FlowStepCard({ step, index }: { step: FlowStep; index: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 })
  const Icon = step.icon

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <Card className="h-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
            </div>
            <div className="text-4xl font-bold text-emerald-600/20 dark:text-emerald-500/20">
              {index + 1}
            </div>
          </div>
          <CardTitle className="text-zinc-900 dark:text-white text-lg">
            {step.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
            {step.description}
          </p>
          <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
              {step.techDetail}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
