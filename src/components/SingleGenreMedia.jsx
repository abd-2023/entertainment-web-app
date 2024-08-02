import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const SingleGenreMedia = () => {
	const name = useParams().name

	function capitalize(str) {
		return str
			.split(' ')
			.map(
				(word) =>
					word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
			)
			.join(' ')
	}

	return (
		<Box sx={{ my: 3 }}>
			<Typography variant="h4">{capitalize(name)}</Typography>
		</Box>
	)
}

export default SingleGenreMedia
