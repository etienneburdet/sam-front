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
  }
</style>
