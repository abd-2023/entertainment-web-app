import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const SingleGenreMedia = () => {
	const name = useParams().name

	return <>{<Typography variant="h5">{name}</Typography>}</>
}

export default SingleGenreMedia
