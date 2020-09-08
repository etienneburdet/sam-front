<script>
import { format, isAfter, closestTo } from 'date-fns'
import { fr } from 'date-fns/locale'
import { RefreshCwIcon } from 'svelte-feather-icons'

import { displayedWeek } from '../stores/displayed-week.js'
import { weekSessionsDates } from '../stores/week-sessions-dates.js'
import { displayedDay } from '../stores/displayed-day.js'

let month
$: month = format($displayedWeek[0], 'MMMM', { locale: fr }).replace(/^\w/, c => c.toUpperCase())

const backToNextTraining = () => {
  displayedWeek.reset()
  displayedDay.setNextSession($weekSessionsDates)
}
</script>

<div id="month">
  <h2>{month}</h2>
  <button on:click={backToNextTraining}>
    <RefreshCwIcon  size="1x"/>
    Prochain entrainement
  </button>
</div>

<style>
  #month {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  button {
    border: none;
    background: white;
  }
</style>
