<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import { format, addDays, addWeeks, addMonths, startOfISOWeek, isSameDay, isAfter } from 'date-fns'
  import DateCard from './DateCard.svelte'

  export let trainingDates

  const today = new Date()
  const nextTrainingDate = trainingDates.find(date => isAfter(date, today))

  let monday, daysOfWeek, month
  let displayedDate = today

  $: {
    monday = startOfISOWeek(displayedDate)
    daysOfWeek = [...Array(7)].map((el, i) => addDays(monday, i))
    month = format(displayedDate, 'MMMM')
  }

  const prevMonth = () => displayedDate = addMonths(displayedDate, -1)
  const nextMonth = () => displayedDate = addMonths(displayedDate, 1)
  const prevWeek = () => displayedDate = addWeeks(displayedDate, -1)
  const nextWeek = () => displayedDate = addWeeks(displayedDate, 1)
  const isTraining = (day) => trainingDates.find(date => isSameDay(day, date))
  const backToToday= () => displayedDate = today
</script>

<div id="calendar">
  <div id="month">
    <button on:click={backToToday}>
      Prochain entrainement
    </button>
    <div class="arrow-left arrow" on:click={prevMonth}>
      <TriangleIcon size="1x"/>
    </div>
    <h2>{month}</h2>
    <div class="arrow arrow-right" on:click={nextMonth}>
      <TriangleIcon size="1x"/>
    </div>
  </div>
  <div id="dates">
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
  <div>
    <ChevronDownIcon size="2x"/>
  </div>
</div>

<style>
  div {
    text-align: center;
  }

  #month {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .arrow {
    margin: 0.25rem;
  }

  .arrow-left {
    transform: rotate(-90deg)
  }

  .arrow-right {
    transform: rotate(90deg)
  }

  #calendar {
    position: sticky;
    top: 0;
    display: block;
    padding: 1rem 0.5rem 0.25rem 0.5rem;
    background: red;
    color: white;
  }


  #dates {
    display: flex;
    justify-content: space-around;
  }
</style>
