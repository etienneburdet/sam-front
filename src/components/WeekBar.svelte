<script>
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import { TriangleIcon } from 'svelte-feather-icons'
import { isSameDay, isAfter, parseISO } from 'date-fns'

import DateCard from './DateCard.svelte'

import { displayedDay } from '../stores/displayed-day.js'
import { displayedWeek } from '../stores/displayed-week.js'
import { weekSessionsDates } from '../stores/week-sessions-dates.js'

const isTraining = (day, dates) => {
  return dates.find(date => isSameDay(date, day))
}

const nextWeek = () => {
  displayedWeek.nextWeek()
  $displayedDay = $weekSessionsDates[0] || null
}

const prevWeek = () => {
  displayedWeek.prevWeek()
  $displayedDay = $weekSessionsDates[0] || null
}

const right = {
  in: { x: 100, duration: 100, delay: 100 },
  out: { x: -100, duration: 100 }
}

const left = {
  in: { x: -100, duration: 100, delay: 100 },
  out: { x: 100, duration: 100 }
}

let transition = right
</script>
{#each [$displayedWeek] as week (week)}
  <div id="week"
    in:fly={transition.in}
    out:fly={transition.out}>
    <div class="arrow-left arrow"
      on:mouseenter={() => transition = left}
      on:click={prevWeek}>
      <TriangleIcon size="1x"/>
    </div>
    {#each $displayedWeek as day}
      <DateCard day={ day }
        isDisplayed={ isSameDay(day, $displayedDay) }
        isTraining={ isTraining(day, $weekSessionsDates) }/>
    {/each}
    <div class="arrow-right arrow"
      on:click={nextWeek}
      on:mouseenter={() => transition = right}>
      <TriangleIcon size="1x"/>
    </div>
  </div>
{/each}

<style lang="scss">
  #week {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    padding: $s;
  }

  .arrow-left {
    transform: rotate(-90deg);
    flex-shrink: 1;
  }

  .arrow-right {
    transform: rotate(90deg);
    flex-shrink: 1 1;
  }
</style>
