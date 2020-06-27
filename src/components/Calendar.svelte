<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import MonthBar from './MonthBar.svelte'
  import WeekBar from './WeekBar.svelte'
  import { displayedDate } from './store.js'

  const today = new Date()
  $displayedDate = today

  const backToToday= () => console.log('return today');
</script>

<div id="calendar">
  <button on:click={backToToday}>
  Prochain entrainement
  </button>
  <MonthBar/>
  <WeekBar/>
  <div>
    <ChevronDownIcon size="2x"/>
  </div>
</div>

<style>
  div {
    text-align: center;
  }

  #calendar {
    position: sticky;
    top: 0;
    display: block;
    padding: 1rem 0.5rem 0.25rem 0.5rem;
    background: red;
    color: white;
  }
</style>
