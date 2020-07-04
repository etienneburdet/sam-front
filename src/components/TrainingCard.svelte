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
    <span class="badge">{plan}</span>
  </div>
    <h2>{title}</h2>
    <div class="spacer"></div>
  </div>
  <div class="trainings">
    {#each workouts as workout}
      <div class="workout">
        <p>
          <strong class="badge">{workout.groupe}</strong>{workout.Description}
        </p>
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

  .trainings {
    padding: 0 $m;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    background: #E6DAA6;
  }

  .plan, .spacer {
    flex: 1;
  }

  .workout {
  }
</style>

<div class="fe"></div>
