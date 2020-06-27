<script>

const prevWeek = () => displayedDate = addWeeks(displayedDate, -1)
const nextWeek = () => displayedDate = addWeeks(displayedDate, 1)
</script>

<div id="dates">
  <div class="arrow-left arrow" on:click={prevWeek}>
    <TriangleIcon size="1x"/>
  </div>
  {#each daysOfWeek as day}
    <DateCard day={day}
      isNext={false}
      isTraining={false}/>
  {/each}
  <div class="arrow-right arrow" on:click={nextWeek}>
    <TriangleIcon size="1x"/>
  </div>
</div>
