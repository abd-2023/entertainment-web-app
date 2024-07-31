import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Movie from './pages/Movie'
import { Container } from '@mui/material'
import TV from './pages/TV'

function App() {
	return (
		<>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie" element={<Movie />} />
					<Route path="/tv" element={<TV />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
