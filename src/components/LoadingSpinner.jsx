import { Box, CircularProgress } from '@mui/material'

const LoadingSpinner = () => {
	return (
		<Box
			sx={{
				background: 'rgba(0, 0, 0, .3)',
				borderRadius: 3,
				height: 200,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<CircularProgress color="inherit" />
		</Box>
	)
}

export default LoadingSpinner
