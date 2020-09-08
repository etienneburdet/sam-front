import { writable } from 'svelte/store'

import { isAfter, closestTo } from 'date-fns'

const findNextSession = (dates) => {
  const now = new Date()
  const futureTrainings = dates.filter(date => isAfter(date, now))
  return futureTrainings[0] ? futureTrainings[0] : closestTo(now, dates)
}

const initDisplayedDay = () => {
  const { subscribe, set, update } = writable(new Date())

  return {
    subscribe,
    set,
    update,
    setNextSession (dates) {
      set(findNextSession(dates))
    }
  }
}

export const displayedDay = initDisplayedDay()
