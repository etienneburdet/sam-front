<script>
  import { ArrowRightCircleIcon } from 'svelte-feather-icons'
</script>

<div id="card">
  <div id="header">
    <h3>Marathon : VMA</h3>
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
    <ArrowRightCircleIcon size="1x"/> <p>Stade</p>
  </div>
</div>

<style>
  h3 {
    display: block;
    text-align: center;
    background: lightgrey;
  }

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
    padding: 0 1rem;
  }


  .group {
    border-top: 1px solid lightgray;
  }

  #header {
    background: lightgrey;
    display: block;
    text-align: center;
    height: 1.75rem;
  }
</style>
