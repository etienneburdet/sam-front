<script>
  import TrainingCard from './TrainingCard.svelte'
  const training = {
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
  }
</script>

<TrainingCard {...training}/>
<TrainingCard/>
<TrainingCard/>
<TrainingCard/>
