import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const SingleGenreMedia = () => {
	const name = useParams().name
	const mediaType = useParams().media
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const id = queryParams.get('id')
	const [error, setError] = useState(null)
	const [genreMedia, setGenreMedia] = useState([])

	function capitalize(str) {
		return str
			.split(' ')
			.map(
				(word) =>
					word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
			)
			.join(' ')
	}

	useEffect(() => {
		const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${AUTH_TOKEN}`,
			},
		}

		async function getGenreMedia() {
			try {
				const url = `https://api.themoviedb.org/3/discover/${mediaType}?&language=en-US&page=1&with_genres=${id}`
				const res = await fetch(url, options)
				if (!res.ok) {
					throw new Error(`HTTP error: Status ${res.status}`)
				} else {
					const mediaData = await res.json()
					// console.log('mediaData', mediaData)
					setGenreMedia(mediaData.results)
				}
			} catch (err) {
				console.log('err', err)
				setError(err.message)
			}
		}
		getGenreMedia()
	}, [])

	return (
		<Box sx={{ my: 3 }}>
			<Typography variant="h4">{capitalize(name)}</Typography>
		</Box>
	)
}

export default SingleGenreMedia
