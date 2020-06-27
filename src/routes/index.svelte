<svelte:head>
	<title>Entrainements SAM</title>
</svelte:head>

<script>
	import Calendar from '../components/Calendar.svelte'
	import Trainings from '../components/Trainings.svelte'
	import BottomNav from '../components/BottomNav.svelte'
	import { trainingDates } from './_trainings.js'
</script>

<Calendar trainingDates={trainingDates}/>
<Trainings/>
<BottomNav selected="home"/>
