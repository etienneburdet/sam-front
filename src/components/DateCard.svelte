<script>
  import { format } from 'date-fns'
  import { fr } from 'date-fns/locale'

  import { displayedDay } from '../stores/displayed-day.js'

  export let day
  export let isTraining
  export let isDisplayed

  $: dayEE = format(day, 'EE', { locale: fr }).replace(/^\w/, c => c.toUpperCase())

  const setDisplayDay = () => {
    if (isTraining) { $displayedDay = day }
    console.log($displayedDay)
  }
</script>

<div class:isTraining class:isDisplayed on:click={setDisplayDay}>
  <p class="dayEE">{dayEE}</p>
  <p class="daydd">{format(day, 'dd', { locale: fr })}</p>
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
    @include badge($primary)
  }

  .dayEE {
    font-size: $m;
  }

  .daydd {
    font-size: $m;
  }

</style>
