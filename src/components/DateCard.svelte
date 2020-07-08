<script>
  import format from 'date-fns/format'
  import { displayedDate } from './store.js'

  export let day
  export let isTraining
  export let isDisplayed

  const setDisplayDate = () => {
    $displayedDate = day
  }
</script>

<div class:isTraining class:isDisplayed on:click={setDisplayDate}>
  <p class="dayEE">{format(day, 'EE')}</p>
  <p class="daydd">{format(day, 'dd')}</p>
</div>

<style lang="scss">
  @import '../globals.scss';

  .isTraining {
    color: $grey-1000;
  }

  .isDisplayed {
    @include badge($grey-800);
    padding-top: $s;
    padding-bottom: $s;
  }

  .dayEE {
    font-size: $m;
  }

  .daydd {
    font-size: $m;
  }

  p {
    margin: 0;
    font-weight: 300;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: $big;
    color: $grey-500;
    text-align: center;
    padding: $s;
    width: $xl;
    border-radius: $xl;
  }
</style>
