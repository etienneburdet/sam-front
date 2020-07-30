<script>
  export let workout
</script>

<li>
    <span class="group">{workout.groupe}</span>
    <span class="workout-description">{workout.Description}</span>
</li>

<style lang="scss">
  div {
    margin: $s 0;
  }

  li {
    /* display: flex;
    align-items: center;
    justify-content: flex-start; */
    &:before {
      content:"";
      display: inline-block;
      height: $xs;
      width: $xs;
      background: $primary;
    }
  }

  .workout-description {
    padding: $s;
  }

  .group {
    padding: $xs;
  }
</style>
