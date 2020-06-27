<script>
  import format from 'date-fns/format'

  export let day
  export let isNext
  export let isTraining
</script>
<div class:isNext class:isTraining>
  <h6>{format(day, 'EE')}</h6>
  <h3>{format(day, 'dd')}</h3>
</div>

<style>
  .isNext {
    opacity: 1;
    color: black;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .isTraining {
    opacity: 1;
    border: 1px solid white;
    border-radius: 1rem;
  }

  div {
    opacity: 0.75;
    text-align: center;
    padding: 0.5rem;
  }
</style>
