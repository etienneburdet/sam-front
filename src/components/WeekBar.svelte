<script>
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
import { isSameDay, isAfter, parseISO } from 'date-fns'

import DateCard from './DateCard.svelte'

import { displayedDay, displayedWeek, weekTrainingDates } from './store.js'

const isTraining = (day, dates) => dates.find(date => isSameDay(date, day))

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
      on:click={displayedWeek.prevWeek}>
      <TriangleIcon size="1x"/>
    </div>
    {#each $displayedWeek as day}
      <DateCard day={ day }
        isDisplayed={ isSameDay(day, $displayedDay) }
        isTraining={ isTraining(day, $weekTrainingDates) }/>
    {/each}
    <div class="arrow-right arrow"
      on:click={displayedWeek.nextWeek}
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
