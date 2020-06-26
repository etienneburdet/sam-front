import moment from 'moment'

const trainings = [
  {
    id: 1,
    date: moment().add(2, 'days').startOf('day').clone(),
    plan: "Marathon",
    Workout: "3x8' seuil"
  },
  {
    id: 2,
    date: moment().subtract(2, 'days').startOf('day').clone(),
    plan: "Marathon",
    Workout: "3x8' seuil"
  }
]

const trainingDates = trainings.map(training => training.date)

trainingDates.sort((a,b) => a.diff(b))

export { trainings, trainingDates }
