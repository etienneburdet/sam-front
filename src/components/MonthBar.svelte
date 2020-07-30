<script>
  import { TriangleIcon } from 'svelte-feather-icons'
  import { format, addMonths } from 'date-fns'
  import { displayedDate } from './store.js'

  let month
  $: month = format($displayedDate, 'MMMM')

  const prevMonth = () => $displayedDate = addMonths($displayedDate, -1)
  const nextMonth = () => $displayedDate = addMonths($displayedDate, 1)
  const backToToday= () => console.log('return today');
</script>

<div id="month">
  <h2>{month}</h2>
  <button on:click={backToToday}>
  Prochain entrainement
  </button>
</div>

<style>
  #month {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  h2 {
    margin-left: 34px;
  }

  .arrow {
    padding: 0.25rem;
  }
</style>
