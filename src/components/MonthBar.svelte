<script>
  import { TriangleIcon } from 'svelte-feather-icons'
  import { format, addMonths } from 'date-fns'
  import { displayedDate } from './store.js'

  let month
  $: month = format($displayedDate, 'MMMM')

  const prevMonth = () => $displayedDate = addMonths($displayedDate, -1)
  const nextMonth = () => $displayedDate = addMonths($displayedDate, 1)
</script>

<div id="month">
  <!-- <div class="arrow-left arrow" on:click={prevMonth}>
    <TriangleIcon size="1x"/>
  </div> -->
  <h2>{month}</h2>
  <!-- <div class="arrow arrow-right" on:click={nextMonth}>
    <TriangleIcon size="1x"/>
  </div> -->
</div>

<style>
  #month {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .arrow {
    padding: 0.25rem;
  }

  .arrow-left {
    transform: rotate(-90deg)
  }

  .arrow-right {
    transform: rotate(90deg)
  }
</style>
