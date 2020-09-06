import { derived } from 'svelte/store'
import { isSameWeek, isAfter, parseISO } from 'date-fns/esm//fp'

import { displayedWeek } from './displayed-week.js'
import { sessions } from './sessions.js'

const getWeekSessionsDates = ([$displayedWeek, $trainings]) => {
  const isThisWeek = isSameWeek($displayedWeek[0])
  const trainingDates = $trainings.map(training => parseISO(training.day))
  const weekTrainingDates = trainingDates.filter(date => isThisWeek(date))
  const orderedWeekDates = weekTrainingDates.sort((a, b) => isAfter(a)(b))
  return orderedWeekDates
}

export const weekSessionsDates = derived([displayedWeek, sessions], getWeekSessionsDates)
