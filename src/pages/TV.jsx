import { Box } from '@mui/material'
import GenreGridLayout from '../components/GenreGridLayout'
import useStore from '../store'
import { useEffect } from 'react'

const TV = () => {
	const TVGenres = useStore((state) => state.TVGenres)
	const getTVGenres = useStore((state) => state.getTVGenres)

	useEffect(() => {
		getTVGenres('/genre/tv/list?language=en-US')
	}, [])

	return (
		<Box sx={{ py: 3 }}>
			<GenreGridLayout genres={TVGenres} />
		</Box>
	)
}

export default TV
