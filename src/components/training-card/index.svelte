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
  <div class="card-body">
    {#each workouts as workout}
      <Workout {workout}/>
    {/each}
  </div>
  <div class="card-footer">
    <Route {place}/>
  </div>
</div>

<style lang="scss">
  .card {
    background: white;
    width: 100vw;
    margin: $s 0;
    border: 1px solid $grey-500;
    & > * {
      padding: 0 $l;
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: $big;
  }
</style>
