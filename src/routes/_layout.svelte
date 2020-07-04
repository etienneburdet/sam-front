<script>
  import BottomNav from '../components/BottomNav.svelte'

  export let segment
</script>

<main>
  <slot></slot>
</main>
<BottomNav {segment}/>

<style>
  body {
    overflow-x: hidden;
    position: relative;
  }
  
  main {
    margin-bottom: 3.5rem;
  }
</style>
