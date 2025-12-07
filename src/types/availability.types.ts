export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

export interface Availability {
  id: string
  dayOfWeek: DayOfWeek
  startTime: string // "09:00"
  endTime: string // "18:00"
  isAvailable: boolean
  professionalId: string
}

export interface TimeSlot {
  time: string // "14:00"
  available: boolean
}
