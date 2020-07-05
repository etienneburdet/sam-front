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
    background: #E6DAA6;
  }

  span {
    font-size: $l;
    font-weight: $bold;
    margin: 0;
  }
</style>
