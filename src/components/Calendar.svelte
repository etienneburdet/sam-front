<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import MonthBar from './MonthBar.svelte'
  import WeekBar from './WeekBar.svelte'
  import { displayedDate } from './store.js'

  export let trainingDates

  const today = new Date()
  $displayedDate = today

  const backToToday= () => console.log('return today');
</script>

<div id="calendar">
  <!-- <button on:click={backToToday}>
  Prochain entrainement
  </button> -->
  <MonthBar/>
  <WeekBar {trainingDates}/>
  <div>
    <ChevronDownIcon size="2x"/>
  </div>
</div>

<style lang="scss">
  div {
    text-align: center;
  }

  #calendar {
    position: sticky;
    top: 0;
    display: block;
    padding: $s;
    background: $red-300;
    color: $dark;
    border: 1px solid $grey-500;
  }
</style>
