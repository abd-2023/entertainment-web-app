import { BookmarkBorder } from '@mui/icons-material';
import { Card, CardMedia, Typography, Box, Toolbar } from '@mui/material';

const ImageCard = () => {
  return (
    <Card sx={{ position: 'relative', maxWidth: 345, boxShadow: 'none' }}>
      <CardMedia
        component="img"
        height="200"
        image="https://image.tmdb.org/t/p/original//tncbMvfV0V07UZozXdBEq4Wu9HH.jpg"
        alt="Random image"
        sx={{
          borderRadius: 3
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 3
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 10,
          p: 1,
          lineHeight: 0
        }}
      >
        <BookmarkBorder />
      </Box>

      <Toolbar
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          color: 'white',
          padding: '10px',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="body2">2019</Typography>
          <Typography variant="h6">Beyond Earth</Typography>
        </Box>
        <Typography variant="h6" sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          px: 1,
          borderRadius: 4,
        }}>PG</Typography>
      </Toolbar>
    </Card>
  );
};

export default ImageCard;
