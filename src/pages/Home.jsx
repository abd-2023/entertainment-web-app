import TrendingMedia from '../components/TrendingMedia'
import PopularMovies from '../components/PopularMovies'
import OnTheAirTVSeries from '../components/OnTheAirTVSeries'
import TopRatedMovies from '../components/TopRatedMovies'
import SearchBar from '../components/SearchBar'

const Home = () => {
	return (
		<>
			<SearchBar />
			<TrendingMedia />
			<PopularMovies />
			<OnTheAirTVSeries />
			<TopRatedMovies />
		</>
	)
}

export default Home
