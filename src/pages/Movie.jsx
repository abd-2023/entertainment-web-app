import { Box } from '@mui/material'
import GenreGridLayout from '../components/GenreGridLayout'
import useStore from '../store'
import { useEffect } from 'react'

const Movie = () => {
	const movieGenres = useStore((state) => state.movieGenres)
	const getMovieGenres = useStore((state) => state.getMovieGenres)

	useEffect(() => {
		getMovieGenres('/genre/movie/list?language=en-US')
	}, [])

	return (
		<Box sx={{ py: 3 }}>
			<GenreGridLayout genres={movieGenres} />
		</Box>
	)
}

export default Movie
