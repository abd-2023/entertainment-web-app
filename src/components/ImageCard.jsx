import { BookmarkBorder, LiveTv, Theaters } from '@mui/icons-material'
import { Card, CardMedia, Typography, Box, Toolbar } from '@mui/material'

const ImageCard = ({ title, imageURL, year, mediaType }) => {
	return (
		<Card sx={{ position: 'relative', maxWidth: 370, boxShadow: 'none' }}>
			<CardMedia
				component="img"
				height="200"
				image={imageURL || 'https://tinyurl.com/45byba5t'}
				alt="Random image"
				sx={{
					borderRadius: 3,
				}}
			/>
			<Box
				sx={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0, 0, 0, 0.55)',
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

			<Toolbar
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					color: 'white',
					padding: '10px',
					justifyContent: 'space-between',
					gap: 1,
				}}
			>
				<Box
					sx={{
						maxWidth: '80%',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							gap: 1,
						}}
					>
						<Typography variant="body2">{year || 1999}</Typography>
						{mediaType == 'movie' ? (
							<Theaters fontSize="string" />
						) : (
							<LiveTv fontSize="string" />
						)}
						<Typography variant="body2">
							{mediaType || 'None'}
						</Typography>
					</Box>
					<Typography
						variant="h6"
						sx={{
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
						}}
					>
						{title || 'Media Title'}
					</Typography>
				</Box>
				<Typography
					variant="h6"
					sx={{
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						px: 2,
						borderRadius: 4,
					}}
				>
					PG
				</Typography>
			</Toolbar>
		</Card>
	)
}

export default ImageCard
