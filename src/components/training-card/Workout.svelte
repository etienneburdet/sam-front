<script>
  export let workout
</script>

<li>
    <span class="group">Groupe {workout.groupe}</span>
    <span>{workout.Description}</span>
</li>

<style lang="scss">
  li {
    position: relative;
    &:before {
      content:"";
      display: inline-block;
      position: absolute;
      top: 8px;
      left: -5px;
      height: $xs;
      width: $xs;
      background: $primary;
    }
  }

  .group {
    padding: $xs;
    font-weight: bold;
    color: $grey-800;
  }
</style>
