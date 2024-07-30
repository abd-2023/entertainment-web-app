import { useEffect } from 'react'
import useStore from '../store'
import BasicGridLayout from './BasicGridLayout'
import LoadingSpinner from './LoadingSpinner'

const PopularMovies = () => {
	const popularMovies = useStore((state) => state.popularMovies)
	const getPopularMovies = useStore((state) => state.getPopularMovies)

	useEffect(() => {
		getPopularMovies('/movie/popular?language=en-US&page=1')
	}, [])

	return (
		<>
			{popularMovies.length ? (
				<BasicGridLayout
					Heading="Popular"
					list={popularMovies.slice(0, 6)}
					titleProp="title"
					dateProp="release_date"
					imageURLProp="poster_path"
				/>
			) : (
				<LoadingSpinner />
			)}
		</>
	)
}

export default PopularMovies
