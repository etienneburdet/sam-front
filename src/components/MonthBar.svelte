<script>
import { format } from 'date-fns'
import { displayedWeek } from './store.js'

let month
$: month = format($displayedWeek[0], 'MMMM')
</script>

<div id="month">
  <h2>{month}</h2>
  <button>
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
</style>
