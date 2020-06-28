<script>
  import format from 'date-fns/format'
  import { displayedDate } from './store.js'

  export let day
  export let isNext
  export let isTraining

  const setDisplayDate = () => {
    $displayedDate = day
    console.log($displayedDate)
  }
</script>

<div class:isNext class:isTraining on:click={setDisplayDate}>
  <h6>{format(day, 'EE')}</h6>
  <h3>{format(day, 'dd')}</h3>
</div>

<style>
  .isNext {
    opacity: 1;
    color: black;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .isTraining {
    opacity: 1;
    border: 1px solid white;
    border-radius: 1rem;
  }

  div {
    opacity: 0.75;
    text-align: center;
    padding: 0.5rem;
  }
</style>
