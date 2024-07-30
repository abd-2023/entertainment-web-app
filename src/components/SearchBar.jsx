import { Search } from '@mui/icons-material'
import { TextField, Toolbar } from '@mui/material'

const SearchBar = () => {
	return (
		<Toolbar sx={{ gap: 2, alignItems: 'flex-end', padding: 0 }}>
			<Search sx={{ fontSize: '2.5rem' }} />
			<TextField
				id="standard-basic"
				label="Search for movies or TV series"
				variant="standard"
				sx={{ flex: 'auto' }}
			/>
		</Toolbar>
	)
}

export default SearchBar
