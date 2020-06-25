<script>
  export let day
  export let isNext
  export let isTraining
</script>
<div class:isNext class:isTraining>
  <h6>{day.format('dd')}</h6>
  <h3>{day.date()}</h3>
</div>

<style>
  .isNext {
    color: black;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .isTraining {
    border: 1px solid white;
    border-radius: 1rem;
  }

  div {
    text-align: center;
    padding: 0.5rem;
  }
</style>
