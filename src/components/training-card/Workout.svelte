<script>
  export let workout
</script>

<div class="workout">
    <span class="badge-group">{workout.groupe}</span>
    <span class="workout-description">{workout.Description}</span>
</div>

<style lang="scss">
  div {
    margin: $s 0;
  }

  .workout-description {
    padding: $s;
  }

  .badge-group {
    padding: $xs;
    &:before {
      content:"";
      display: block;
      height: $s;
      width: $s;
      background: $primary;
    }
  }
</style>
