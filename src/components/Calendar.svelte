<script>
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
  import MonthBar from './MonthBar.svelte'
  import WeekBar from './WeekBar.svelte'
  import { displayedDate } from './store.js'

  export let trainingDates

  const today = new Date()
  $displayedDate = today

</script>

<div id="calendar">
  <MonthBar/>
  <WeekBar {trainingDates}/>
</div>

<style lang="scss">
  div {
    text-align: center;
  }

  #calendar {
    position: sticky;
    top: 0;
    display: block;
    padding: $s $big;
    background: white;
    color: $dark;
    border: 1px solid $grey-500;
  }
</style>
