<script>
  export let plan
</script>

<div>
  <span>{plan}</span>
</div>

<style lang="scss">
  div {
    @include badge($accent);
    padding: $s;
  }
</style>
