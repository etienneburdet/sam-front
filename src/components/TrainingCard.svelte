<script>
  import { ArrowRightCircleIcon } from 'svelte-feather-icons'
</script>

<div id="card">
  <div id="header">
    <h3 id="plan">Marathon</h3>
    <h3 id="title">VMA</h3>
    <div id="spacer"></div>
  </div>
  <div id="trainings">
    <div class="group">
      <p>
        <strong>Groupe 1:</strong> 3 fois 10(30' - 30') à 100% VMA.
      </p>
    </div>
    <div class="group">
      <p>
        <strong>Groupe 2:</strong> 2 fois 10(30' - 30') à 100% VMA.
      </p>
    </div>
    <div class="group">
      <p>
        <strong>Groupe 3:</strong> 1,5 fois 10(30' - 30') à 100% VMA.
      </p>
    </div>
  </div>
  <div id="footer">
    <p><ArrowRightCircleIcon size="1x"/> Stade</p>
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
