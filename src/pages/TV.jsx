import { Box } from '@mui/material'
import GenreGridLayout from '../components/GenreGridLayout'

const TV = () => {
	return (
		<Box sx={{ py: 3 }}>
			<GenreGridLayout genres={TVGenres} />
		</Box>
	)
}

export default TV
