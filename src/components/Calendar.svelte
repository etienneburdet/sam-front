<script>
  import DateCard from './DateCard.svelte'
</script>

<style>
#calendar {
  display: flex;
  justify-content: space-around;
  background: red;
}
</style>

<div id="calendar">
  <DateCard month="Mai" day="Mardi 25"/>
  <DateCard month="Mai" day="Mardi 25"/>
  <DateCard month="Mai" day="Mardi 25" selected/>
  <DateCard month="Mai" day="Mardi 25"/>
  <DateCard month="Mai" day="Mardi 25"/>
</div>
