<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import format from 'date-fns/format'
  import addDays from 'date-fns/addDays'
  import addWeeks from 'date-fns/addWeeks'
  import addMonths from 'date-fns/addMonths'
  import startOfWeek from 'date-fns/startOfWeek'
  import DateCard from './DateCard.svelte'

  export let trainingDates
  export let nextTrainingDate

  let monday, daysOfWeek, month
  let displayedDate = new Date()

  $: {
    monday = startOfWeek(displayedDate)
    daysOfWeek = [...Array(7)].map((el, i) => addDays(monday, i))
    console.log(daysOfWeek)
    month = format(displayedDate, 'MMMM')
  }

  const prevMonth = () => displayedDate = addMonths(displayedDate, -1)
  const nextMonth = () => displayedDate = addMonths(displayedDate, 1)
  const prevWeek = () => displayedDate = addWeeks(displayedDate, -1)
  const nextWeek = () => displayedDate = addWeeks(displayedDate, 1)
</script>

<div id="calendar">
  <div id="month">
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
        isNext={false}
        isTraining={false}/>
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
