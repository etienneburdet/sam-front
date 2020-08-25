import { writable, derived, get } from 'svelte/store'
import { addWeeks, startOfISOWeek, addDays, parseISO, isSameDay, isAfter } from 'date-fns'
import { isSameWeek } from 'date-fns/esm//fp'

const getWeekTrainingDates = ([$displayedWeek, $trainings]) => {
  const isThisWeek = isSameWeek($displayedWeek[0])
  const trainingDates = $trainings.map(training => parseISO(training.Date))
  const weekTrainingDates = trainingDates.filter(date => isThisWeek(date))
  return weekTrainingDates
}

const findNextTraining = (dates, monday) => dates.find(date => isAfter(date, monday))

const filterDayTrainings = ([$displayedDay, $trainings]) => {
  const isOnDisplayedDay = isSameDay($displayDay)
  const filter = training => isOnDisplayedDay(parseISO(training.Date))
  return $trainings.filter(filter)
}

const initWeek = () => {
  const today = new Date()
  const daysOfTodaysWeek = [...Array(7)].map((el, i) => {
    const monday = startOfISOWeek(today)
    return addDays(monday, i)
  })

  const { subscribe, set, update } = writable(daysOfTodaysWeek)

  const addWeek = (num) => () => {
    update(week => week.map(day => addWeeks(day, num)))
    const currentMonday = startOfISOWeek(get(displayedDay))
    const monday = addWeeks(currentMonday, num)
    const dates = get(weekTrainingDates)
    displayedDay.set(findNextTraining(dates, monday) || null)
  }

  return {
    subscribe,
    nextWeek: addWeek(1),
    prevWeek: addWeek(-1),
    reset() { set(daysOfWeek) }
  }
}


export const trainings = writable([])
export const displayedWeek = initWeek()
export const weekTrainingDates = derived([displayedWeek, trainings], getWeekTrainingDates)
export const displayedDay = writable(new Date)
export const dispayedTrainings = derived([trainings, displayedDay], filterDayTrainings)
