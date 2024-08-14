import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Launch, Reviews } from '@mui/icons-material'

const MediaDetails = () => {
	const name = useParams().name
	const type = useParams().media
	const [data, setData] = useState({})
	const [cast, setCast] = useState([])
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const id = queryParams.get('id')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const posterUrl = 'https://image.tmdb.org/t/p/w500/'
	const language =
		data.spoken_languages != undefined &&
		data.spoken_languages.filter(
			(lang) => lang.iso_639_1 === data.original_language
		)[0].english_name

	const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${AUTH_TOKEN}`,
		},
	}

	// get media data
	useEffect(() => {
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

	// get cast
	useEffect(() => {
		async function getCast() {
			try {
				const url = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`
				const res = await fetch(url, options)
				// console.log('res', res)
				if (!res.ok) {
					throw new Error(res.status)
				} else {
					const credits = await res.json()
					// console.log('creditsData', creditsData.cast.slice(0, 3))
					setCast(credits.cast.slice(0, 3))
				}
			} catch (err) {
				console.log('err', err)
			}
		}
		getCast()
	}, [])

	return (
		<Box
			sx={{
				mt: 3,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 3,
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
					{/* Poster */}
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

					<Box
						sx={{
							textAlign: 'center',
						}}
					>
						{/* Title */}
						<Typography
							variant="h1"
							align="center"
							sx={{ fontSize: '2rem' }}
						>
							{data.title || data.name}
						</Typography>

						{/* Tagline */}
						<Typography>{data.tagline}</Typography>

						{/* Rating */}
						<Typography
							variant="h2"
							sx={{
								fontSize: '1.5rem',
								fontWeight: 700,
							}}
						>
							⭐{parseFloat(data.vote_average).toFixed(1)}
							<span
								style={{
									fontSize: '.8rem',
									fontWeight: 'normal',
								}}
							>
								/10
							</span>
						</Typography>
					</Box>

					{/* Meta Info */}
					<Stack
						sx={{ width: '100%' }}
						direction="row"
						justifyContent="space-between"
					>
						<Box>
							<Typography>Language</Typography>
							<Typography>{language}</Typography>
						</Box>
						<Box>
							{type === 'movie' && (
								<>
									<Typography>Release Date</Typography>
									<Typography>{data.release_date}</Typography>
								</>
							)}
							{type === 'tv' && (
								<>
									<Typography>First Air Date</Typography>
									<Typography>
										{data.first_air_date}
									</Typography>
								</>
							)}
						</Box>
						<Box>
							{type === 'movie' && (
								<>
									<Typography>Length</Typography>
									<Typography>
										{Math.floor(data.runtime / 60)} h
									</Typography>
								</>
							)}
							{type === 'tv' && (
								<>
									<Typography>Last Air Date</Typography>
									<Typography>
										{data.last_air_date}
									</Typography>
								</>
							)}
						</Box>
					</Stack>

					{/* Genres */}
					<Box sx={{ width: '100%' }}>
						<Typography
							variant="h2"
							fontSize={'1.25rem'}
							fontWeight={600}
						>
							Genres
						</Typography>
						<Stack direction="row" spacing={1}>
							{data.genres.map((genre) => (
								<Typography
									key={uuidv4()}
									sx={{
										background: '#000',
										color: '#fff',
										borderRadius: 1.5,
										padding: '0 .5rem',
										fontSize: '.9rem',
									}}
								>
									{genre.name}
								</Typography>
							))}
						</Stack>
					</Box>

					{/* Synopsis */}
					<Box sx={{ width: '100%' }}>
						<Typography
							variant="h2"
							fontSize={'1.25rem'}
							fontWeight={600}
						>
							Synopsis
						</Typography>
						<Typography>{data.overview}</Typography>
					</Box>

					{/* Cast */}
					<Box sx={{ width: '100%' }}>
						<Typography
							variant="h2"
							fontSize={'1.25rem'}
							fontWeight={600}
						>
							Top Cast
						</Typography>
						<Stack direction="row" spacing={1}>
							{cast.map((actor) => (
								<Typography
									key={uuidv4()}
									sx={{
										color: '#000',
										border: '1px solid #000',
										borderRadius: 1.5,
										padding: '0 .5rem',
										fontSize: '.85rem',
									}}
								>
									{actor.name}
								</Typography>
							))}
						</Stack>
					</Box>

					<Stack direction="row" spacing={1} width="100%">
						<Button
							href={data.homepage}
							target="_blank"
							variant="contained"
							width="100%"
							endIcon={<Launch />}
							sx={{
								flexGrow: 1,
							}}
						>
							Website
						</Button>
						{data.imdb_id && (
							<Button
								href={`https://www.imdb.com/title/${data.imdb_id}`}
								target="_blank"
								variant="contained"
								endIcon={<Reviews />}
								sx={{
									flexGrow: 1,
								}}
							>
								IMDB
							</Button>
						)}
					</Stack>
				</>
			)}
		</Box>
	)
}

export default MediaDetails
