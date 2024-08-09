import { useParams } from 'react-router-dom'

const MediaDetails = () => {
	const name = useParams().name

	return (
		<>
			<h1>{name}</h1>
		</>
	)
}

export default MediaDetails
