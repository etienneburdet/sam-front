import { derived } from 'svelte/store'
import { isSameDay, parseISO } from 'date-fns/esm/fp'
import { sessions } from './sessions.js'
import { displayedDay } from './displayed-day.js'

const filterDayTrainings = ([$displayedDay, $sessions]) => {
  const isOnDisplayedDay = isSameDay($displayedDay)
  const filter = session => isOnDisplayedDay(parseISO(session.day))
  const session = $sessions.find(filter)
  return session ? session.trainings : []
}

export const trainings = derived([displayedDay, sessions], filterDayTrainings)
