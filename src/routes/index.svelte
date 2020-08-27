<script context="module">
	export async function preload() {
		const res = await this.fetch(`http://localhost:1337/entrainements`)
		const trainingsFromServ = await res.json()
		return { trainingsFromServ }
	}
</script>

<script>
import { onMount } from 'svelte'
import { isSameDay, parseISO } from 'date-fns'

import TrainingCard from '../components/training-card/TrainingCard.svelte'
import Calendar from '../components/Calendar.svelte'
import BottomNav from '../components/BottomNav.svelte'

import { displayedDay, weekTrainingDates, trainings, displayedTrainings } from '../components/store.js'

export let trainingsFromServ
onMount(() => {
	$trainings = trainingsFromServ
	$displayedDay = $weekTrainingDates[0]
})
</script>

<Calendar/>
<div>
	{#each $displayedTrainings as training (training.id)}
		<TrainingCard
			plan={training.plan}
			date={training.Date}
			title={training.Nom}
			workouts={training.Exercice}
			place={training.Parcours}
		/>
	{/each}
</div>

<style lang="scss">
	div {
		height: 100%;
		padding: $s $xl;
	}
</style>
