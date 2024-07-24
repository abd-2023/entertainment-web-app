import { TextField, Toolbar } from '@mui/material'
import './App.css'
import NavBar from './components/NavBar'
import { Search } from '@mui/icons-material'

function App() {

  return (
    <>
      <NavBar />
      <Toolbar sx={{ gap: 2, alignItems: 'flex-end' }}>
        <Search sx={{ fontSize: '2.5rem' }} />
        <TextField
          id="standard-basic"
          label="Search for movies or TV series"
          variant="standard"
          sx={{ flex: 'auto' }}
        />
      </Toolbar>
    </>
  )
}

export default App
