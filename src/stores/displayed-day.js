import { writable } from 'svelte/store'

export const displayedDay = writable(new Date())
