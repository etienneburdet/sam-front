<script>
  import { UserIcon, CalendarIcon } from 'svelte-feather-icons'

  export let segment
</script>

<nav>
  <a href="/" class="nav-icon" class:nav-icon-selected={ segment === undefined }>
    <CalendarIcon size="1.5x"/>
  </a>
  <a href="/preferences" class="nav-icon" class:nav-icon-selected={ segment === 'preferences'}>
    <UserIcon size="1.5x"/>
  </a>
</nav>

<style lang="scss">
  nav {
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

  .nav-icon {
    padding: 0.5rem;
    margin: 0.5rem;
  }

  .nav-icon-selected {
    color: rgb(146, 23, 77);
    border-top: 2px solid rgb(146, 23, 77);
  }
</style>
