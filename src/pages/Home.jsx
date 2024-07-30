import { Search } from '@mui/icons-material'
import { Container, TextField, Toolbar } from '@mui/material'
import TrendingMedia from '../components/TrendingMedia'
import PopularMovies from '../components/PopularMovies'
import OnTheAirTVSeries from '../components/OnTheAirTVSeries'

const Home = () => {
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
			<TrendingMedia />
			<PopularMovies />
			<OnTheAirTVSeries />
		</Container>
	)
}

export default Home
