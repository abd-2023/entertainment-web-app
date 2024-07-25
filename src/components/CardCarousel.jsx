import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageCard from './ImageCard';
import { v4 as uuidv4 } from 'uuid';

const CardCarousel = () => {

  const settings = {
    infinite: false,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at once
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { title: 'Card 1', subtitle: 'Subtitle 1', image: 'https://source.unsplash.com/random/1' },
    { title: 'Card 2', subtitle: 'Subtitle 2', image: 'https://source.unsplash.com/random/2' },
    { title: 'Card 3', subtitle: 'Subtitle 3', image: 'https://source.unsplash.com/random/3' },
    { title: 'Card 4', subtitle: 'Subtitle 4', image: 'https://source.unsplash.com/random/4' },
  ];

  return (
    <>
      <Slider {...settings}>
        {cards.map(() => (
          <ImageCard key={uuidv4()} />
        ))}
      </Slider>
    </>
  );
};

export default CardCarousel;
