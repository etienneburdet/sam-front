<script context="module">
	export async function preload() {
		const res = await this.fetch(`http://localhost:1337/entrainements`)
		const trainings = await res.json()
		return { trainings }
	}
</script>

<script>
	import TrainingCard from '../components/training-card/index.svelte'
	import Calendar from '../components/Calendar.svelte'
	import BottomNav from '../components/BottomNav.svelte'
	import { displayedDate } from '../components/store.js'
	import { isSameDay, parseISO } from 'date-fns'

	export let trainings
	let trainingDates = trainings.map(training => parseISO(training.Date))
</script>

<Calendar {trainingDates}/>
<div>
	{#each trainings as training}
		{#if isSameDay(parseISO(training.Date), $displayedDate)}
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
	@import '../globals.scss';

	div {
		background: $light;
	}
</style>
