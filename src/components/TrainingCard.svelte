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
      <h3>{JSON.stringify(plan)}</h3>
    </div>
    <div class="title">
      <h3>{title}</h3>
    </div>
    <div class="spacer"></div>
  </div>
  <div class="trainings">
    {#each workouts as workout}
      <div class="group">
        <p>
          <strong>{workout.groupe} : </strong>{workout.Description}
        </p>
      </div>
    {/each}
  </div>
  <div class="card-footer">
    <p>{place}</p>
  </div>
</div>

<style lang="scss">
  p {
    padding: 0 1rem;
  }

  h3 {
    display: inline;
  }

  .card {
    width: 90%;
    margin: 1rem auto;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    overflow: hidden;
  }

  .card-footer {
    display: flex;
    align-items: center;
    background: lightgrey;
    padding: 0 0.25rem;
  }

  .card-header {
    display: flex;
    align-items: center;
    height: 3rem;
  }

  .plan h3 {
      padding: 0.5rem;
      border-radius: 0.1rem;
      background: lightblue;
    }

  .plan, .spacer {
    flex: 1;
  }
</style>

<div class="fe"></div>
