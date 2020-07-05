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
	export let trainings
</script>

<Calendar/>

<div>
	{#each trainings as training}
		<TrainingCard
			plan={training.plan.Nom}
			date={training.Date}
			title={training.Nom}
			workouts={training.Exercice}
			place={training.Parcours}
		/>
	{/each}
</div>

<style lang="scss">
	@import '../globals.scss';

	div {
		background: $grey-200;
	}
</style>
