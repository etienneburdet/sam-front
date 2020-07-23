<script>
  export let plan
</script>

<div>
  <span>{plan}</span>
</div>

<style lang="scss">
  div {
    @include panned-background($accent);
    padding: $s;
  }
</style>
