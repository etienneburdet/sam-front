<script>
import { format, isAfter, closestTo } from 'date-fns'
import { fr } from 'date-fns/locale'
import { RefreshCwIcon } from 'svelte-feather-icons'

import { displayedWeek, weekTrainingDates, displayedDay } from './store.js'

let month
$: month = format($displayedWeek[0], 'MMMM', { locale: fr }).replace(/^\w/, c => c.toUpperCase())

const backToNextTraining = () => {
  displayedWeek.reset()
  const now = new Date()
  const futureTrainings = $weekTrainingDates.filter(date => isAfter(date, now))
  futureTrainings[0]
    ? $displayedDay = futureTrainings[0]
    : $displayedDay = closestTo(now, $weekTrainingDates)
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
