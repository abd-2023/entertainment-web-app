import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Movie from './pages/Movie'
import { Container } from '@mui/material'
import TV from './pages/TV'
import SearchBar from './components/SearchBar'
import SingleGenreMedia from './components/SingleGenreMedia'

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
				</Routes>
			</Container>
		</>
	)
}

export default App
