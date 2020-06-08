<script>
  export let day
  export let selected
</script>
<div class:selected>
  <h6>{day.format('dd')}</h6>
  <h3>{day.date()}</h3>
</div>

<style>
  .selected {
    color: black;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  div {
    text-align: center;
    padding: 0.5rem;
  }
</style>
