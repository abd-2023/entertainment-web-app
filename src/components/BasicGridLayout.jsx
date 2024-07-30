import { Box, Grid, Stack, Typography } from '@mui/material'
import SimpleCard from './SimpleCard'
import { v4 as uuidv4 } from 'uuid'

const BasicGridLayout = ({
	Heading,
	list,
	titleProp,
	dateProp,
	imageURLProp,
}) => {
	function getFullYear(formattedDate) {
		const date = new Date(formattedDate)
		const fullYear = date.getFullYear()
		return fullYear
	}

	return (
		<Box my={3}>
			<Stack
				direction="row"
				spacing={2}
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography variant="h6"> {Heading} </Typography>
				<Typography>see more</Typography>
			</Stack>
			<Grid container spacing={2}>
				{list.map((item) => (
					<Grid item xs={6} key={uuidv4()}>
						<SimpleCard
							mediaTitle={item[titleProp]}
							year={getFullYear(item[dateProp])}
							mediaType="movie"
							imageURL={item[imageURLProp]}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default BasicGridLayout
