import { compareAsc } from 'date-fns'

const trainings = [
  {
    id: 1,
    date: new Date(2020, 5, 23),
    plan: 'Marathon',
    title: 'VMA',
    workouts: [
      { name: 'Groupe 1',
        instructions: '3 série 10 * 30/30 à 100% VMA'
      },
      {
        name: 'Groupe 2',
        instructions: '2 série 10 * 30/30 à 100% VMA'
      },
      {
        name: 'Groupe 3',
        instructions: '1,5 série 10 * 30/30 à 100% VMA'
      }
    ],
    place: 'Stade'
  },
  {
    id: 2,
    date: new Date(2020, 5, 28),
    plan: 'Marathon',
    title: 'VMA',
    workouts: [
      { name: 'Groupe 1',
        instructions: '3 série 10 * 30/30 à 100% VMA'
      },
      {
        name: 'Groupe 2',
        instructions: '2 série 10 * 30/30 à 100% VMA'
      },
      {
        name: 'Groupe 3',
        instructions: '1,5 série 10 * 30/30 à 100% VMA'
      }
    ],
    place: 'Stade'
  },
  {
    id: 3,
    date: new Date(2020, 5, 23),
    plan: 'Trail',
    title: 'VMA',
    workouts: [
      { name: 'Groupe 1',
        instructions: '3 série 10 * 30/30 à 100% VMA'
      },
      {
        name: 'Groupe 2',
        instructions: '2 série 10 * 30/30 à 100% VMA'
      },
      {
        name: 'Groupe 3',
        instructions: '1,5 série 10 * 30/30 à 100% VMA'
      }
    ],
    place: 'Stade'
  }
]

const trainingDates = trainings.map(training => training.date)
trainingDates.sort(compareAsc)

export { trainings, trainingDates }
