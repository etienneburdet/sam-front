<script>
  export let workout
</script>

<div class="workout">
    <span class="badge-group">{workout.groupe}</span>
    <span class="workout-description">{workout.Description}</span>
</div>

<style lang="scss">
  @import '../../globals.scss';

  div {
    margin: $s 0;
  }

  .workout-description {
    padding: $s;
  }

  .badge-group {
    @include badge($grey-800);
    height: $s;
    width: $s;
    color: $dark;
  }
</style>
