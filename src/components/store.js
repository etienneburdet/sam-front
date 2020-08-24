import { writable, derived } from 'svelte/store'
import { addWeeks, startOfISOWeek, addDays, parseISO, isSameDay } from 'date-fns'

const initWeek = () => {
  const today = new Date()
  const daysOfTodaysWeek = [...Array(7)].map((el, i) => {
    const monday = startOfISOWeek(today)
    return addDays(monday, i)
  })

  const { subscribe, set, update } = writable(daysOfTodaysWeek)

  return {
    subscribe,
    nextWeek() { update(week => week.map(day => addWeeks(day, 1))) },
    prevWeek() { update(week => week.map(day => addWeeks(day, -1)))},
    reset() { set(daysOfWeek) }
  }
}

const getTrainingDates = $trainings => {
  const trainingDates = $trainings.map(training => parseISO(training.Date))
  return trainingDates
}

export const displayedDay = writable(new Date())
export const trainings = writable([])
export const trainingDates = derived(trainings, getTrainingDates)
export const displayedWeek = initWeek()
