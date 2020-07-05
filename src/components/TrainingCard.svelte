<script>
  export let date
  export let plan = 'Plan'
  export let title = 'Titre séance'
  export let workouts = []
  export let place = 'Lieu'
</script>

<div class="card">
  <div class="card-header">
  <div class="plan">
    <span class="badge-plan">{plan}</span>
  </div>
    <h2>{title}</h2>
    <div class="spacer"></div>
  </div>
  <div class="trainings">
    {#each workouts as workout}
      <div class="workout">
          <span class="badge-workout">{workout.groupe}</span>
          <span>{workout.Description}</span>
      </div>
    {/each}
  </div>
  <div class="card-footer">
    <p>{place}</p>
  </div>
</div>

<style lang="scss">
  @import '../globals.scss';

  h2 {
    display: inline;
    font-size: $l;
    font-weight: $bold;
    margin: 0;
  }

  .card {
    width: 100vw;
    border-bottom: 1px solid;
    & > * {
      padding: 0 $m;
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
    background: #E6DAA6;
  }

  .plan, .spacer {
    flex: 1;
  }

  .trainings {
    padding: $m;
  }


  .workout {
    margin: $s 0;
  }

  .badge-plan {
    @extend %badge-base;
  }

  .badge-workout {
    @extend %badge-base;
    height: $s;
    width: $s;
  }
</style>

<div class="fe"></div>
