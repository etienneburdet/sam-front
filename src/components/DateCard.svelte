<script>
  export let selected = false
  export let weekday
  export let day
</script>

<div class:selected>
  <h5>{weekday}</h5>
  <h3>{day}</h3>
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
    margin-bottom: 0.25rem;
  }
</style>
