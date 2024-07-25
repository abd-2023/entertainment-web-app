import { Container, TextField, Toolbar, Typography } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import { Search } from '@mui/icons-material'
import CardCarousel from './components/CardCarousel'

function App() {

  return (
    <>
      <NavBar />

      <Container>
        <Toolbar sx={{ gap: 2, alignItems: 'flex-end', padding: 0 }}>
          <Search sx={{ fontSize: '2.5rem' }} />
          <TextField
            id="standard-basic"
            label="Search for movies or TV series"
            variant="standard"
            sx={{ flex: 'auto' }}
          />
        </Toolbar>
        <Typography variant="h4">Trending</Typography>
        <CardCarousel />
      </Container>
    </>
  )
}

export default App
