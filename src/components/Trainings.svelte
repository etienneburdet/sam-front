<script>
  import TrainingCard from './TrainingCard.svelte'
  import { isSameDay } from 'date-fns'
  import { trainings } from '../routes/_trainings.js'
  import { displayedDate } from './store.js'
</script>

{#each trainings as training (training.id)}
  {#if isSameDay(training.date, $displayedDate)}
    <TrainingCard {...training}/>
  {/if}
{/each}
