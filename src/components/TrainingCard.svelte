<script>
  import { ArrowRightCircleIcon } from 'svelte-feather-icons'
  export let plan = 'Plan'
  export let title = 'Titre séance'
  export let workouts = []
  export let place = 'Lieu'
</script>

<div class="card">
  <div class="card-header">
    <div class="plan">
      <h3>{plan}</h3>
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
          <strong>{workout.name} : </strong>{workout.instructions}
        </p>
      </div>
    {/each}
  </div>
  <div class="card-footer">
    <p><ArrowRightCircleIcon size="1x"/>{place}</p>
  </div>
</div>

<style>
  p {
    padding: 0 1rem;
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

  .plan {
    background: lightblue;
  }

  .plan, .spacer {
    flex: 1;
  }
</style>
