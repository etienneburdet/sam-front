import moment from 'moment'

const trainings = [
  {
    id: 1,
    date: moment("20200629"),
    plan: "Marathon",
    Workout: "3x8' seuil"
  },
  {
    id: 2,
    date: moment("20200628"),
    plan: "Marathon",
    Workout: "3x8' seuil"
  }
]

const trainingDates = trainings.map(training => {
  return { date: training.date, id: training.id }
})

trainingDates.sort((a,b) => a.date.diff(b.date))

export { trainings, trainingDates }
