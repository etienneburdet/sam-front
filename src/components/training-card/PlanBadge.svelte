<script>
  export let plan
</script>

<span style="--color: {plan.color};">{plan.Nom}</span>

<style lang="scss">
  span {
    @include small-badge(var(--color), $dark);
  }
</style>
