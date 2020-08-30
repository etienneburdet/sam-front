<script>
  export let place
</script>

<p>{place ? place : '---'}</p>

<style lang="scss">
  p {
    font-style: italic;
    font-size: $m;
  }
</style>
