import { Star } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { Card, CardContent } from '@/components/ui/card'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Dra. Mariana Silva',
    role: 'Dentista',
    content: 'Antes eu gastava 3 horas por dia só agendando. Agora? Zero. O sistema faz tudo. Minhas faltas caíram de 30% para 8%.',
    rating: 5,
    avatar: 'MS',
  },
  {
    name: 'Carlos Mendes',
    role: 'Barbeiro',
    content: 'Meus clientes adoraram. Eles mesmos escolhem o horário. Eu só corto cabelo. Simples assim.',
    rating: 5,
    avatar: 'CM',
  },
  {
    name: 'Ana Costa',
    role: 'Psicóloga',
    content: 'A melhor decisão que tomei foi automatizar. Agora consigo focar 100% nos meus pacientes. Recomendo de olhos fechados.',
    rating: 5,
    avatar: 'AC',
  },
]

export function Testimonials() {
  const [titleRef, titleInView] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-20 px-4 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container mx-auto max-w-7xl">
        <div
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: titleInView ? 1 : 0,
            transform: titleInView ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Quem usa, não volta atrás
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Profissionais que recuperaram seu tempo e reduziram faltas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <Card className="h-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300">
        <CardContent className="pt-6 space-y-4">
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
            ))}
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 italic">
            "{testimonial.content}"
          </p>

          <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-semibold">
              {testimonial.avatar}
            </div>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {testimonial.role}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
