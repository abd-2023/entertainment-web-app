import { Container } from '@mui/material'
import TrendingMedia from '../components/TrendingMedia'
import PopularMovies from '../components/PopularMovies'
import OnTheAirTVSeries from '../components/OnTheAirTVSeries'
import TopRatedMovies from '../components/TopRatedMovies'
import SearchBar from '../components/SearchBar'

const Home = () => {
	return (
		<Container>
			<SearchBar />
			<TrendingMedia />
			<PopularMovies />
			<OnTheAirTVSeries />
			<TopRatedMovies />
		</Container>
	)
}

export default Home
