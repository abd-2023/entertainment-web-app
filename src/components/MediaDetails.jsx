import { Box, CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const MediaDetails = () => {
	const name = useParams().name
	const type = useParams().media
	const [data, setData] = useState({})
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const id = queryParams.get('id')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const posterUrl = 'https://image.tmdb.org/t/p/w500/'

	useEffect(() => {
		const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${AUTH_TOKEN}`,
			},
		}

		async function getData() {
			try {
				const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`
				const res = await fetch(url, options)
				// console.log('res', res)
				if (!res.ok) {
					throw new Error(res.status)
				} else {
					const apiData = await res.json()
					// console.log('apiData', apiData)
					setData(apiData)
					setLoading(false)
				}
			} catch (err) {
				console.log('err', err)
				setLoading(false)
				setError(err.message)
			}
		}
		getData()
	}, [])

	return (
		<Box
			sx={{
				mt: 3,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			{loading && <CircularProgress color="inherit" />}
			{error && (
				<>
					<Typography
						variant="h1"
						align="center"
						sx={{ fontSize: '1.5rem' }}
					>
						Couldn't fetch data
					</Typography>
					<Typography
						align="center"
						sx={{ fontSize: '1.2rem', m: '.7rem 0' }}
					>
						Sorry, There has been an error while fetching the data
					</Typography>
					<Typography align="center" sx={{ fontSize: '1.2rem' }}>
						Error message : {error}
					</Typography>
				</>
			)}
			{Object.keys(data).length !== 0 && (
				<>
					<img
						src={`${posterUrl}${data.poster_path}`}
						alt={data.title || data.name}
						style={{
							display: 'block',
							margin: '0 auto',
							width: '200px',
							height: '300px',
							background: 'rgb(80, 80, 80)',
							borderRadius: '5px',
						}}
					/>
					<Typography
						variant="h1"
						align="center"
						sx={{ m: '1rem 0', fontSize: '2rem' }}
					>
						{data.title || data.name}
					</Typography>
				</>
			)}
		</Box>
	)
}

export default MediaDetails
