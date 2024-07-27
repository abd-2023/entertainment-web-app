import { AppBar, Avatar, Container, Toolbar } from '@mui/material'
import { Bookmark, LiveTv, Movie, Theaters, Window } from '@mui/icons-material'

const NavBar = () => {
	return (
		<AppBar sx={{ position: 'sticky' }}>
			<Container>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Movie />
					<Toolbar sx={{ gap: 2 }}>
						<Window />
						<Theaters />
						<LiveTv />
						<Bookmark />
					</Toolbar>
					<Avatar
						alt="Remy Sharp"
						src="https://mui.com/static/images/avatar/1.jpg"
						sx={{
							border: 3,
						}}
					/>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default NavBar
