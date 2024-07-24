import { AppBar, Container, Toolbar } from "@mui/material"
import { AccountCircle, Bookmark, LiveTv, Movie, Theaters, Window } from "@mui/icons-material"

const NavBar = () => {
  return (
    <AppBar sx={{ position: 'sticky' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Movie />
          <Toolbar sx={{ gap: 2 }} >
            <Window />
            <Theaters />
            <LiveTv />
            <Bookmark />
          </Toolbar>
          <AccountCircle />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar