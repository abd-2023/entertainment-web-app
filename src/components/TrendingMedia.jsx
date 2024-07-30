import { Box, Typography } from '@mui/material'
import CardCarousel from './CardCarousel'
import useStore from '../store'
import { useEffect } from 'react'

const TrendingMedia = () => {
	const allTrendingMedia = useStore((state) => state.allTrendingMedia)
	const getAllTrendingMedia = useStore((state) => state.getAllTrendingMedia)

	useEffect(() => {
		getAllTrendingMedia('/trending/all/day?language=en-US')
	}, [])

	return (
		<Box sx={{ my: 3 }}>
			<Typography variant="h4">Trending</Typography>
			<CardCarousel cards={allTrendingMedia} />
		</Box>
	)
}

export default TrendingMedia
