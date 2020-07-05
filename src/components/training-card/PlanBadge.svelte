<script>
  export let plan
</script>

<div>
  <span class="">{plan}</span>
</div>

<style lang="scss">
  @import '../../globals.scss';

  div {
    @extend %badge;
  }
</style>
