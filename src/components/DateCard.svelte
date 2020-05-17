<script>
  export let selected = false
  export let month
  export let day
</script>

<div class:selected>
  <h3>{day}</h3>
  <h5>{month}</h5>
</div>

<style>
  .selected {
    color: black;
    background: white;
  }
</style>
