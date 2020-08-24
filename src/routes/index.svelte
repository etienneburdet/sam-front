<script context="module">
	export async function preload() {
		const res = await this.fetch(`http://localhost:1337/entrainements`)
		const trainingsFromServ = await res.json()
		return { trainingsFromServ }
	}
</script>

<script>
import { onMount } from 'svelte'
import TrainingCard from '../components/training-card/index.svelte'
import Calendar from '../components/Calendar.svelte'
import BottomNav from '../components/BottomNav.svelte'
import { displayedDay, trainings } from '../components/store.js'
import { isSameDay, parseISO } from 'date-fns'

export let trainingsFromServ
onMount(() => {$trainings = trainingsFromServ})
</script>

<Calendar/>
<div>
{#each $trainings as training}
		{#if isSameDay(parseISO(training.Date), $displayedDay)}
			<TrainingCard
				plan={training.plan.Nom}
				date={training.Date}
				title={training.Nom}
				workouts={training.Exercice}
				place={training.Parcours}
			/>
		{/if}
	{/each}
</div>

<style lang="scss">
	div {
		height: 100%;
		padding: $s $xl;
	}
</style>
