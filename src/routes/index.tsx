import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '@/components/landing/Hero'
import { ProblemSection } from '@/components/landing/ProblemSection'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { TechnicalFlow } from '@/components/landing/TechnicalFlow'
import { ValueProposition } from '@/components/landing/ValueProposition'
import { SocialProof } from '@/components/landing/SocialProof'
import { FinalCTA } from '@/components/landing/FinalCTA'
import { Footer } from '@/components/landing/Footer'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <TechnicalFlow />
      <ValueProposition />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  )
}
