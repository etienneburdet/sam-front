<script>
  import DateCard from './DateCard.svelte'
</script>

<style>
#calendar {
  display: block;
  padding: 0 1rem;
  min-height: 2rem;
  justify-content: space-around;
  background: red;
}

#dates {
  display: flex;
  justify-content: space-around;
}

#month {
  text-align: center;
}
</style>

<div id="calendar">
  <div id="month">
    <h2>Mai 2020</h2>
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
</div>
