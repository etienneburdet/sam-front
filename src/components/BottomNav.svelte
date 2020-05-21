<script>
  import { UserIcon, CalendarIcon } from 'svelte-feather-icons'
</script>

<div class="nav">
  <CalendarIcon size="1.5x" class="nav-icon nav-icon-selected"/>
  <UserIcon size="1.5x" class="nav-icon"/>
</div>

<style lang="scss">
  .nav {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    border-top: 1px solid darkgray;
    background: white;
  }

  :global(.nav-icon) {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  :global(.nav-icon-selected) {
    color: rgb(146, 23, 77);
    border-top: 2px solid rgb(146, 23, 77);
  }
</style>
