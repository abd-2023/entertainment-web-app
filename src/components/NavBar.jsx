import { AppBar, Avatar, List, ListItem } from '@mui/material'
import { Bookmark, LiveTv, Movie, Theaters, Window } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<AppBar sx={{ position: 'sticky' }}>
			<List sx={{ display: 'flex', height: '3.5rem' }}>
				<ListItem sx={{ p: 0, mr: 5, justifyContent: 'end' }}>
					<Link to="/">
						<Movie />
					</Link>
				</ListItem>
				<ListItem sx={{ p: 0, justifyContent: 'center' }}>
					<Link to="/">
						<Window />
					</Link>
				</ListItem>
				<ListItem sx={{ p: 0, justifyContent: 'center' }}>
					<Link to="/movie">
						<Theaters />
					</Link>
				</ListItem>
				<ListItem sx={{ p: 0, justifyContent: 'center' }}>
					<Link to="/tv">
						<LiveTv />
					</Link>
				</ListItem>
				<ListItem sx={{ p: 0, justifyContent: 'center' }}>
					<Bookmark />
				</ListItem>
				<ListItem sx={{ p: 0, ml: 5, justifyContent: 'start' }}>
					<Avatar
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/1.jpg"
						sx={{
							border: 3,
							width: '1.5em',
							height: '1.5em',
						}}
					/>
				</ListItem>
			</List>
		</AppBar>
	)
}

export default NavBar
