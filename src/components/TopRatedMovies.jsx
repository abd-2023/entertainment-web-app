import { useEffect } from 'react'
import useStore from '../store'
import BasicGridLayout from './BasicGridLayout'
import LoadingSpinner from './LoadingSpinner'

const TopRatedMovies = () => {
	const topRatedMovies = useStore((state) => state.topRatedMovies)
	const getTopRatedMovies = useStore((state) => state.getTopRatedMovies)

	useEffect(() => {
		getTopRatedMovies('/movie/top_rated?language=en-US')
	}, [])
	return (
		<>
			{topRatedMovies.length ? (
				<BasicGridLayout
					Heading="Top Rated"
					list={topRatedMovies.slice(0, 6)}
					titleProp="title"
					dateProp="release_date"
					imageURLProp="poster_path"
					mediaType="movie"
				/>
			) : (
				<LoadingSpinner />
			)}
		</>
	)
}

export default TopRatedMovies
