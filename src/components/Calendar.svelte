<script>
  import MonthBar from './MonthBar.svelte'
  import WeekBar from './WeekBar.svelte'
</script>

<div id="calendar">
  <MonthBar/>
  <WeekBar/>
</div>

<style lang="scss">
  div {
    text-align: center;
  }

  #calendar {
    position: sticky;
    top: 0;
    display: block;
    padding: $s $big;
    background: white;
    color: $dark;
    border: 1px solid $grey-500;
  }
</style>
