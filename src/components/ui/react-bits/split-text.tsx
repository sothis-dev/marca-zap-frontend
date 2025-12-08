import { useEffect, useState } from 'react'

interface SplitTextProps {
  text: string
  delay?: number
  duration?: number
  className?: string
}

export function SplitText({ text, delay = 50, duration = 600, className = '' }: SplitTextProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <span className={className}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            const globalIndex = text.split(' ').slice(0, wordIndex).join('').length + wordIndex + charIndex
            return (
              <span
                key={charIndex}
                className="inline-block"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity ${duration}ms ease-out ${globalIndex * delay}ms, transform ${duration}ms ease-out ${globalIndex * delay}ms`,
                }}
              >
                {char}
              </span>
            )
          })}
          {wordIndex < text.split(' ').length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  )
}
