<script>
  export let plan
</script>

<div>
  <span>{plan}</span>
</div>

<style lang="scss">
  div {
    @include small-badge($pastel-pink);
    padding: $s;
  }
</style>
