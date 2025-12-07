import { format, parse, addMinutes, startOfWeek, addDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: Date | string, formatStr = 'dd/MM/yyyy'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, formatStr, { locale: ptBR })
}

export function formatTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, 'HH:mm')
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })
}

export function generateTimeSlots(
  startTime: string, // "09:00"
  endTime: string,   // "18:00"
  intervalMinutes = 30
): string[] {
  const slots: string[] = []
  const start = parse(startTime, 'HH:mm', new Date())
  const end = parse(endTime, 'HH:mm', new Date())

  let current = start
  while (current < end) {
    slots.push(format(current, 'HH:mm'))
    current = addMinutes(current, intervalMinutes)
  }

  return slots
}

export function getWeekDays(startDate: Date = new Date()): Date[] {
  const start = startOfWeek(startDate, { locale: ptBR })
  return Array.from({ length: 7 }, (_, i) => addDays(start, i))
}

export const WEEK_DAYS_PT = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
]
