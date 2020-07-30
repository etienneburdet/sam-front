<script>
  import PlanBadge from './PlanBadge.svelte'
  import TrainingTitle from './TrainingTitle.svelte'
  import Workout from './Workout.svelte'
  import Route from './Route.svelte'

  export let date
  export let plan = 'Plan'
  export let title = 'Titre séance'
  export let workouts = []
  export let place = 'Lieu'
</script>

<div class="card">
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
    &:after {
      content: "";
      display: block;
      margin: 0 auto;
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
    justify-content: flex-start;
  }
</style>
