<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import { format, addDays,  addWeeks, startOfISOWeek, isSameDay, isAfter } from 'date-fns'
  import { displayedDate } from './store.js'
  import { trainingDates } from '../routes/_trainings.js'
  import DateCard from './DateCard.svelte'


  let daysOfWeek
  let today = new Date()
  $: daysOfWeek = [...Array(7)].map((el, i) => {
    const monday = startOfISOWeek($displayedDate)
    return addDays(monday, i)
  })

  const nextTrainingDate = trainingDates.find(date => isAfter(date, today))
  const isTraining = (day) => trainingDates.find(date => isSameDay(day, date))

  const prevWeek = () => $displayedDate = addWeeks($displayedDate, -1)
  const nextWeek = () => $displayedDate = addWeeks($displayedDate, 1)
</script>

<div id="week">
  <div class="arrow-left arrow" on:click={prevWeek}>
    <TriangleIcon size="1x"/>
  </div>
  {#each daysOfWeek as day}
    <DateCard day={day}
      isNext={isSameDay(day, nextTrainingDate)}
      isTraining={isTraining(day)}/>
  {/each}
  <div class="arrow-right arrow" on:click={nextWeek}>
    <TriangleIcon size="1x"/>
  </div>
</div>

<style>
#week {
  display: flex;
  justify-content: space-around;
}

.arrow {
  padding: 0.25rem;
}

.arrow-left {
  transform: rotate(-90deg)
}

.arrow-right {
  transform: rotate(90deg)
}
</style>
