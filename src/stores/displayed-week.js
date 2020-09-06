import { writable } from 'svelte/store'
import { startOfISOWeek, addWeeks, addDays } from 'date-fns'

const initWeek = () => {
  const today = new Date()
  const daysOfTodaysWeek = [...Array(7)].map((el, i) => {
    const monday = startOfISOWeek(today)
    return addDays(monday, i)
  })

  const { subscribe, set, update } = writable(daysOfTodaysWeek)

  const addWeek = (num) => () => {
    update(week => week.map(day => addWeeks(day, num)))
  }

  return {
    subscribe,
    nextWeek: addWeek(1),
    prevWeek: addWeek(-1),
    reset () { set(daysOfTodaysWeek) }
  }
}

export const displayedWeek = initWeek()
