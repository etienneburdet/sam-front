<script context="module">
	export async function preload() {
		const res = await this.fetch(`https://samcms.herokuapp.com/entrainements`)
		const trainings = await res.json()
		return { trainings }
	}
</script>

<script>
	import TrainingCard from '../components/TrainingCard.svelte'
	import Calendar from '../components/Calendar.svelte'
	import BottomNav from '../components/BottomNav.svelte'
	export let trainings
</script>

<Calendar/>
{#each trainings as training}
	<TrainingCard {...training}/>
{/each}

<BottomNav selected="home"/>
