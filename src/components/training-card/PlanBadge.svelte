<script>
  export let plan
</script>

<div>
  <span>{plan}</span>
</div>

<style lang="scss">
  @import '../../globals.scss';

  div {
    @include badge($accent);
    border-color: $primary;
    box-shadow: 1px 1px 0 $primary
  }
</style>
