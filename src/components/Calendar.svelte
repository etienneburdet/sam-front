<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import moment from 'moment'
  import DateCard from './DateCard.svelte'

  let monday, daysOfWeek, month
  let now = moment()

  $: {
    monday = now.startOf('week').add(-6, 'd').startOf('day')
    daysOfWeek = [...Array(7)].map((el, i) =>  monday.clone().add(i,'d'))
    month = now.format('MMMM')
  }

  const prevMonth = () => now = now.subtract(1, 'months')
  const nextMonth = () => now = now.add(1, 'months')
  const prevWeek = () => now = now.subtract(1, 'weeks')
  const nextWeek = () => now = now.add(1, 'weeks')
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
    {#each daysOfWeek as day }
      <DateCard day={day} />
    {/each}
    <div class="arrow-right arrow" on:click={nextMonth}>
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
