import { create } from 'zustand'

const BASE_URL = 'https://api.themoviedb.org/3'

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${AUTH_TOKEN}`,
	},
}

const store = (set) => ({
	allTrendingMedia: [],
	popularMovies: [],
	onTheAirTVSeries: [],

	getAllTrendingMedia: async (query) => {
		let url = `${BASE_URL}${query}`
		const res = await fetch(url, options)
		const data = await res.json()
		// console.log('data', data)
		set({ allTrendingMedia: data.results })
	},
	getPopularMovies: async (query) => {
		let url = `${BASE_URL}${query}`
		const res = await fetch(url, options)
		const data = await res.json()
		// console.log('data', data)
		set({ popularMovies: data.results })
	},
	getOnTheAirTVSeries: async (query) => {
		let url = `${BASE_URL}${query}`
		const res = await fetch(url, options)
		const data = await res.json()
		// console.log('data', data)
		set({ onTheAirTVSeries: data.results })
	},
})

const useStore = create(store)

export default useStore
