import { Search } from '@mui/icons-material'
import {
	Container,
	TextField,
	Toolbar,
} from '@mui/material'
import { useEffect, useState } from 'react'
import BasicGridLayout from '../components/BasicGridLayout'
import TrendingMedia from '../components/TrendingMedia'

const Home = () => {
	const [popularMovies, setPopularMovies] = useState([])

	useEffect(() => {
		async function getPopularMovies() {
			const authToken = import.meta.env.VITE_AUTH_TOKEN
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
			}
			const fetchURL =
				'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
			const res = await fetch(fetchURL, options)
			const data = await res.json()
			setPopularMovies(data.results)
			// console.log(data.results)
		}
		getPopularMovies()
	}, [])

	return (
		<Container>
			<Toolbar sx={{ gap: 2, alignItems: 'flex-end', padding: 0 }}>
				<Search sx={{ fontSize: '2.5rem' }} />
				<TextField
					id="standard-basic"
					label="Search for movies or TV series"
					variant="standard"
					sx={{ flex: 'auto' }}
				/>
			</Toolbar>
			<TrendingMedia/>
			<BasicGridLayout
				Heading="Popular"
				list={popularMovies.slice(0, 6)}
				titleProp="title"
				dateProp="release_date"
				imageURLProp="poster_path"
			/>
		</Container>
	)
}

export default Home
