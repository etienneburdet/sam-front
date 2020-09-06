<script>
  export let route
</script>

<p>{route ? route : '---'}</p>

<style lang="scss">
  p {
    font-style: italic;
    font-size: $m;
  }
</style>
