import { Search } from '@mui/icons-material'
import {
	Box,
	CircularProgress,
	Container,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material'
import CardCarousel from '../components/CardCarousel'
import { useEffect, useState } from 'react'

const Home = () => {
	const [allTrendingMedia, setAllTrendingMedia] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getAllTrendingMedia() {
			const authToken = import.meta.env.VITE_AUTH_TOKEN
			const options = {
				method: 'GET',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${authToken}`,
				},
			}
			const fetchURL =
				'https://api.themoviedb.org/3/trending/all/day?language=en-US'

			const res = await fetch(fetchURL, options)
			const data = await res.json()
			setAllTrendingMedia(data.results)
			setLoading(false)
			// console.log('data', data.results, Array.isArray(data.results));
		}
		getAllTrendingMedia()
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
			<Box sx={{ my: 3 }}>
				<Typography variant="h4">Trending</Typography>
				{loading ? (
					<Box
						sx={{
							background: 'rgba(0, 0, 0, .3)',
							borderRadius: 3,
							height: 200,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<CircularProgress color="inherit" />
					</Box>
				) : (
					<CardCarousel cards={allTrendingMedia} />
				)}
			</Box>
		</Container>
	)
}

export default Home
