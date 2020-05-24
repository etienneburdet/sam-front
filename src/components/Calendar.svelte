<script>
  import DateCard from './DateCard.svelte'
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import moment from 'moment'

  let monday = moment().startOf('week').add(-6, 'd').startOf('day')
  let daysOfWeek = [...Array(7)].map((el, i) =>  monday.clone().add(i,'d'))
</script>


<div id="calendar">
  <div id="month">
    <div class="arrow-left arrow">
      <TriangleIcon size="1x"/>
    </div>
    <h2>Mai 2020</h2>
    <div class="arrow arrow-right">
      <TriangleIcon size="1x"/>
    </div>
  </div>
  <div id="dates">
    {#each daysOfWeek as day }
      <DateCard day={day} />
    {/each}
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
