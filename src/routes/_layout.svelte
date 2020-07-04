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
  body {
    overflow-x: hidden;
    position: relative;
  }

  main {
    margin-bottom: $xl;
  }
</style>
