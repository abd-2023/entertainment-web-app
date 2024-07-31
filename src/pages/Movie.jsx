import { Box } from '@mui/material'
import GenreGridLayout from '../components/GenreGridLayout'

const Movie = () => {
	return (
		<Box>
			<GenreGridLayout genres={genres} />
		</Box>
	)
}

export default Movie
