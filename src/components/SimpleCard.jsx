import { BookmarkBorder, LiveTv, Theaters } from '@mui/icons-material'
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	CardMedia,
	Typography,
} from '@mui/material'

const SimpleCard = ({ mediaTitle, imageURL, mediaType, year }) => {
	return (
		<Card sx={{ position: 'relative', maxWidth: 370, boxShadow: 'none' }}>
			<CardMedia
				component="img"
				height="130"
				image={imageURL || 'https://tinyurl.com/45byba5t'}
				alt="Random image"
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
				<Typography variant="body2">{mediaType || 'None'}</Typography>
			</CardContent>
			<CardHeader
				title={mediaTitle || 'Movie Title'}
				titleTypographyProps={{ fontSize: '1rem' }}
				sx={{ py: 0, pl: 0 }}
			/>
		</Card>
	)
}

export default SimpleCard
