<script>
import { fade } from 'svelte/transition'

import PlanBadge from './PlanBadge.svelte'
import TrainingTitle from './TrainingTitle.svelte'
import Workout from './Workout.svelte'
import Route from './Route.svelte'

export let plan = {}
export let title = 'Titre séance'
export let workouts = []
export let place = 'Lieu'
</script>

<div class="card" in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
  <div class="card-header">
    <TrainingTitle {title}/>
    <PlanBadge {plan}/>
  </div>
  <ul>
    {#each workouts as workout}
      <Workout {workout}/>
    {/each}
  </ul>
  <div class="card-footer">
    <Route {place}/>
  </div>
</div>

<style lang="scss">
  .card {
    background: transparent;
    width: 100%;
    padding: $m 0;
    &:not(:last-child):after {
      content: "";
      display: block;
      margin: 13px 0 auto;
      width: 100%;
      border-bottom: 3px dotted $dark;
      padding-top: $s;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    line-height: 21px;
  }
</style>
