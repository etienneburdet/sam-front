<script>
  import BottomNav from '../components/BottomNav.svelte'

  export let segment
</script>

<main>
  <slot></slot>
</main>
<BottomNav {segment}/>

<style lang="scss">
  @import '../globals.scss';

  main {
    margin-bottom: $xl;
    min-height: 100vh;
    background: $grey-300;
  }
</style>
