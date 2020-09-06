<script context="module">
	export async function preload() {
		// const cmsBaseURL = 'samcms.herokuapp.com'
		const cmsBaseURL = process.env.NODE_ENV === 'development' ? 'localhost:1337' : 'samcms.herokuapp.com'
		try {
			const res = await this.fetch(`http://${cmsBaseURL}/seances`)
			const sessionsFromServ = await res.json()
			return { sessionsFromServ }
		} catch (err) {
			console.error("could not fetch", err)
		}
	}
</script>

<script>
import { onMount } from 'svelte'
import { isSameDay, parseISO } from 'date-fns'

import TrainingCard from '../components/training-card/TrainingCard.svelte'
import Calendar from '../components/Calendar.svelte'

import { sessions } from '../stores/sessions.js'
import { trainings } from '../stores/trainings.js'
import { displayedWeek } from '../stores/displayed-week.js'
import { weekSessionsDates } from '../stores/week-sessions-dates.js'
import { displayedDay} from '../stores/displayed-day.js'

export let sessionsFromServ

onMount(() => {
	$sessions = sessionsFromServ
	$displayedDay = $weekSessionsDates[0]
})
</script>

<Calendar/>
<div>
	{#each $trainings as training (training.id)}
		<TrainingCard
			plans={training.plans}
			title={training.training}
			workouts={training.Exercice}
			place={training.Parcours}
		/>
	{/each}
</div>

<style lang="scss">
	div {
		height: 100%;
		padding: $s $l;
	}
</style>
