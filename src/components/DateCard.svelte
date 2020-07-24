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
    color: $grey-800;
    text-align: center;
    padding: $m $s;
    width: $xl;
    border-radius: $xl;
    font-weight: $light;
  }

  .isTraining {
    color: $dark;
    font-weight: $bold;
  }

  .isDisplayed {
    @include badge($red-800)
  }

  .dayEE {
    font-size: $m;
  }

  .daydd {
    font-size: $m;
  }

</style>
