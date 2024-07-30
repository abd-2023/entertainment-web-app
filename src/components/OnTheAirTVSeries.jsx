import { useEffect } from 'react'
import useStore from '../store'
import LoadingSpinner from './LoadingSpinner'
import BasicGridLayout from './BasicGridLayout'

const OnTheAirTVSeries = () => {
	const onTheAirTVSeries = useStore((state) => state.onTheAirTVSeries)
	const getOnTheAirTVSeries = useStore((state) => state.getOnTheAirTVSeries)

	useEffect(() => {
		getOnTheAirTVSeries('/tv/on_the_air?language=en-US')
	}, [])

	return (
		<>
			{onTheAirTVSeries.length ? (
				<BasicGridLayout
					Heading="On The Air"
					list={onTheAirTVSeries.slice(0, 6)}
					titleProp="name"
					dateProp="first_air_date"
					imageURLProp="poster_path"
					mediaType="tv series"
				/>
			) : (
				<LoadingSpinner />
			)}
		</>
	)
}

export default OnTheAirTVSeries
