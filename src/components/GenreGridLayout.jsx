import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const GenreGridLayout = ({ genres }) => {
	return (
		<Grid container spacing={2}>
			{genres.map((genre) => (
				<Grid key={uuidv4()} item xs={12}>
					<Link
						to={`genre/${genre.name.toLowerCase()}`}
						style={{
							display: 'block',
							textDecoration: 'none',
							textAlign: 'center',
							color: 'inherit',
							padding: '4rem 0',
							border: '1px solid',
							borderRadius: 8,
							fontSize: '1.3rem',
						}}
					>
						{genre.name}
					</Link>
				</Grid>
			))}
		</Grid>
	)
}

export default GenreGridLayout
