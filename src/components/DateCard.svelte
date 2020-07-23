<script>
  import format from 'date-fns/format'
  import { displayedDate } from './store.js'

  export let day
  export let isTraining
  export let isDisplayed

  const setDisplayDate = () => {
    if (isTraining) { $displayedDate = day }
  }
</script>

<div class:isTraining class:isDisplayed on:click={setDisplayDate}>
  <p class="dayEE">{format(day, 'EE')}</p>
  <p class="daydd">{format(day, 'dd')}</p>
</div>

<style lang="scss">
  p {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: $big;
    color: $grey-500;
    text-align: center;
    padding: $s $xs;
    width: $xl;
    border-radius: $xl;
    font-weight: $light;
  }

  .isTraining {
    color: #fff;
    font-weight: $bold;
  }

  .isDisplayed {
    background: $primary;
    color: #fff;
    border-radius: $l;
    padding: $m $s
  }

  .dayEE {
    font-size: $m;
  }

  .daydd {
    font-size: $m;
  }

</style>
