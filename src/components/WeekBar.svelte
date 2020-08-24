<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import { format, addDays,  addWeeks, startOfISOWeek, isSameDay, isAfter } from 'date-fns'
  import { displayedDay, displayedWeek, trainingDates } from './store.js'
  import DateCard from './DateCard.svelte'
  // const nextTrainingDate = trainingDates.find(date => isAfter(date, $displayedWeek.getMonday()))
  const isTraining = (day) => $trainingDates.find(date => isSameDay(day, date))

  // const prevWeek = () => $displayedDay = addWeeks($displayedDay, -1)
  // const nextWeek = () => $displayedDay = addWeeks($displayedDay, 1)
</script>

<div id="week">
  <div class="arrow-left arrow" on:click={displayedWeek.prevWeek}>
    <TriangleIcon size="1x"/>
  </div>
  {#each $displayedWeek as day}
    <DateCard day={day}
      isDisplayed={isSameDay(day, $displayedDay)}
      isTraining={isTraining(day)}/>
  {/each}
  <div class="arrow-right arrow" on:click={displayedWeek.nextWeek}>
    <TriangleIcon size="1x"/>
  </div>
</div>

<style lang="scss">
  #week {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    padding: $s;
  }

  .arrow-left {
    transform: rotate(-90deg);
    flex-shrink: 1;
  }

  .arrow-right {
    transform: rotate(90deg);
    flex-shrink: 1 1;
  }
</style>
