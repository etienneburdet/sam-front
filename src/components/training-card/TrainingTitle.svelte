<script>
  export let title
</script>

<div>
  <h2><span class="slashes">///</span>{title}</h2>
</div>

<style lang="scss">
  h2 {
    line-height: $l;
    font-size: $l;
    font-weight: $bold;
  }

  .slashes {
    font-weight: $light;
    color: $primary;
  }
</style>
