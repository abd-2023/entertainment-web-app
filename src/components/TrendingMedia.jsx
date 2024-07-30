import { Box, Typography } from '@mui/material'
import CardCarousel from './CardCarousel'
import useStore from '../store'
import { useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'

const TrendingMedia = () => {
	const allTrendingMedia = useStore((state) => state.allTrendingMedia)
	const getAllTrendingMedia = useStore((state) => state.getAllTrendingMedia)

	useEffect(() => {
		getAllTrendingMedia('/trending/all/day?language=en-US')
	}, [])

	return (
		<Box sx={{ my: 3 }}>
			<Typography variant="h4">Trending</Typography>
			{allTrendingMedia.length ? (
				<CardCarousel cards={allTrendingMedia} />
			) : (
				<LoadingSpinner />
			)}
		</Box>
	)
}

export default TrendingMedia
