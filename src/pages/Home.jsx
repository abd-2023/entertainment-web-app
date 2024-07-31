import TrendingMedia from '../components/TrendingMedia'
import PopularMovies from '../components/PopularMovies'
import OnTheAirTVSeries from '../components/OnTheAirTVSeries'
import TopRatedMovies from '../components/TopRatedMovies'

const Home = () => {
	return (
		<>
			<TrendingMedia />
			<PopularMovies />
			<OnTheAirTVSeries />
			<TopRatedMovies />
		</>
	)
}

export default Home
