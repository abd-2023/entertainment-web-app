import { BookmarkBorder, LiveTv, Theaters } from '@mui/icons-material'
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

const SimpleCard = ({ id, mediaTitle, imageURL, mediaType, year }) => {
	const posterURL = 'https://image.tmdb.org/t/p/w500/'
	const titleURLSegment = mediaTitle
		.toLowerCase()
		.replace(/\s/gi, '-')
		.replace(/[^-\w&]/gi, '')

	return (
		<Link
			to={`/${mediaType}/${titleURLSegment}?id=${id}`}
			style={{ textDecoration: 'none' }}
		>
			<Card
				sx={{ position: 'relative', maxWidth: 370, boxShadow: 'none' }}
			>
				<CardMedia
					component="img"
					height="130"
					image={
						imageURL
							? `${posterURL}${imageURL}`
							: 'https://tinyurl.com/45byba5t'
					}
					alt={mediaTitle || 'Random Image'}
					sx={{
						borderRadius: 3,
					}}
				/>
				<Box
					sx={{
						position: 'absolute',
						top: 10,
						right: 10,
						color: 'white',
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						borderRadius: 10,
						p: 1,
						lineHeight: 0,
					}}
				>
					<BookmarkBorder />
				</Box>
				<CardContent sx={{ display: 'flex', gap: 1, py: 0.5, pl: 0 }}>
					<Typography variant="body2">{year || 1999}</Typography>
					{mediaType == 'movie' ? (
						<Theaters fontSize="string" />
					) : (
						<LiveTv fontSize="string" />
					)}
					<Typography variant="body2">
						{mediaType || 'None'}
					</Typography>
				</CardContent>
				<CardHeader
					title={mediaTitle || 'Movie Title'}
					titleTypographyProps={{
						fontSize: '.85rem',
						noWrap: true,
						overflow: 'hidden',
						textOverflow: 'ellipsis',
					}}
					sx={{
						p: 0,
						'& .MuiCardHeader-content': {
							width: '100%',
						},
					}}
				/>
			</Card>
		</Link>
	)
}

export default SimpleCard
