import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Movie from './pages/Movie'
import { Container } from '@mui/material'
import TV from './pages/TV'
import SearchBar from './components/SearchBar'
import SingleGenreMedia from './components/SingleGenreMedia'
import MediaDetails from './components/MediaDetails'

function App() {
	return (
		<>
			<NavBar />
			<Container>
				<SearchBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie" element={<Movie />} />
					<Route path="/tv" element={<TV />} />
					<Route
						path="/:media/genre/:name"
						element={<SingleGenreMedia />}
					/>
					<Route path="/:media/:name" element={<MediaDetails />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
