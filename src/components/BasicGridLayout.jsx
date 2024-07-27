import { Grid } from '@mui/material'
import SimpleCard from './components/SimpleCard'

const BasicGridLayout = () => {
	return (
		<Grid container spacing={2} sx={{ px: 2 }}>
			<Grid item xs={6}>
				<SimpleCard />
			</Grid>
		</Grid>
	)
}

export default BasicGridLayout
