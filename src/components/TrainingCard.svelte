<script>
  import { ArrowRightCircleIcon } from 'svelte-feather-icons'
  export let plan = 'Plan'
  export let title = 'Titre séance'
  export let workouts = []
  export let place = 'Lieu'
</script>

<div id="card">
  <div id="header">
    <h3 id="plan">{plan}</h3>
    <h3 id="title">{title}</h3>
    <div id="spacer"></div>
  </div>
  <div id="trainings">
    {#each workouts as workout}
      <div class="group">
        <p>
          <strong>{workout.name} : </strong>{workout.instructions}
        </p>
      </div>
    {/each}
  </div>
  <div id="footer">
    <p><ArrowRightCircleIcon size="1x"/>{place}</p>
  </div>
</div>

<style>
  p {
    padding: 0 1rem;
  }

  #card {
    width: 98%;
    margin: 1rem auto;
    border-radius: 0.5rem;
    border: 1px solid black;
    overflow: hidden;
  }

  #footer {
    display: flex;
    align-items: center;
    background: lightgrey;
    padding: 0 0.25rem;
  }

  #header {
    display: flex;
    align-items: center;
    height: 3rem;
  }

  #plan {
    margin-left: 0.5rem;
  }

  #plan, #spacer {
    flex: 1;
  }
</style>
