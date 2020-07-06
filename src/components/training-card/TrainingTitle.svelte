<script>
  export let title
</script>

<div>
  <span>{title}</span>
</div>

<style lang="scss">
  @import '../../globals.scss';

  div {
    @extend %panned-background;
    background: $accent;
  }

  span {
    font-size: $l;
    margin: 0;
  }
</style>
