<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import { format, addDays, addMonths, startOfISOWeek, isSameDay, isAfter } from 'date-fns'
  import DateCard from './DateCard.svelte'
  import MonthBar from './MonthBar.svelte'
  import { displayedDate } from './store.js'


  export let trainingDates

  const today = new Date()
  const nextTrainingDate = trainingDates.find(date => isAfter(date, today))

  let monday, daysOfWeek
  $displayedDate = today
  console.log($displayedDate)

  $: {
    monday = startOfISOWeek($displayedDate)
    daysOfWeek = [...Array(7)].map((el, i) => addDays(monday, i))
    console.log(daysOfWeek)
  }

  const prevWeek = () => console.log('nextWeek');
  const nextWeek = () => console.log('nextWeek');
  const isTraining = (day) => trainingDates.find(date => isSameDay(day, date))
  const backToToday= () => console.log('return today');
</script>

<div id="calendar">
  <button on:click={backToToday}>
  Prochain entrainement
  </button>
  <MonthBar/>
  <div id="dates">
    <div class="arrow-left arrow" on:click={prevWeek}>
      <TriangleIcon size="1x"/>
    </div>
    {#each daysOfWeek as day}
      {console.log(day)}
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
