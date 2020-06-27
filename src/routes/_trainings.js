import { compareAsc } from 'date-fns'

const trainings = [
  {
    id: 1,
    date: new Date(2020, 5, 23),
    plan: "Marathon",
    Workout: "3x8' seuil"
  },
  {
    id: 2,
    date: new Date(2020, 5, 28),
    plan: "Marathon",
    Workout: "3x8' seuil"
  }
]

const trainingDates = trainings.map(training => training.date)
trainingDates.sort(compareAsc)

export { trainingDates }
