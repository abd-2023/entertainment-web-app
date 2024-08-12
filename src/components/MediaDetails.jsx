import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const MediaDetails = () => {
	const name = useParams().name
	const type = useParams().media
	const [data, setData] = useState([])
	const location = useLocation()
	const queryParams = new URLSearchParams(location.search)
	const id = queryParams.get('id')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

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
					console.log('apiData', apiData)
					setData(apiData.results)
					setLoading(false)
				}
			} catch (err) {
				console.log('err', err)
				setError(err.message)
			}
		}
		getData()
	}, [])

	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<p>{error}</p>
			) : (
				<h1>{name}</h1>
			)}
		</>
	)
}

export default MediaDetails
