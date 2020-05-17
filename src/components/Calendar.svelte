<script>
  import DateCard from './DateCard.svelte'
  import { ChevronDownIcon, TriangleIcon } from 'svelte-feather-icons'
</script>


<div id="calendar">
  <div id="month">
    <div class="arrow-left arrow">
      <TriangleIcon size="1x"/>
    </div>
    <h2>Mai 2020</h2>
    <div class="arrow arrow-right">
      <TriangleIcon size="1x"/>
    </div>
  </div>
  <div id="dates">
    <DateCard weekday="Lundi" day="25"/>
    <DateCard weekday="Mardi" day="25"/>
    <DateCard weekday="Mercredi" day="25" selected/>
    <DateCard weekday="Jeudi" day="25"/>
    <DateCard weekday="Vendredi" day="25"/>
    <DateCard weekday="Samedi" day="25"/>
    <DateCard weekday="Dimanche" day="25"/>
  </div>
  <div>
    <ChevronDownIcon size="2x"/>
  </div>
</div>

<style>
  div {
    text-align: center;
  }

  #month {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .arrow {
    margin: 0.25rem;
  }

  .arrow-left {
    transform: rotate(-90deg)
  }

  .arrow-right {
    transform: rotate(90deg)
  }

  #calendar {
    display: block;
    padding: 1rem 0.5rem 0.25rem 0.5rem;
    background: red;
    color: white;
  }


  #dates {
    display: flex;
    justify-content: space-around;
  }
</style>
