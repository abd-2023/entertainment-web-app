import { Grid, Typography } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'

const GenreGridLayout = ({ genres }) => {
	return (
		<Grid container spacing={2}>
			{genres.map((genre) => (
				<Grid key={uuidv4()} item xs={12}>
					<Typography
						variant="h6"
						align="center"
						sx={{
							py: '4rem',
							border: '1px solid',
							borderRadius: 2,
						}}
					>
						{genre.name}
					</Typography>
				</Grid>
			))}
		</Grid>
	)
}

export default GenreGridLayout
