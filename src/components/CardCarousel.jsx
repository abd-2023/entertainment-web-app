import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageCard from './ImageCard';
import { v4 as uuidv4 } from 'uuid';

const CardCarousel = ({ cards }) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'

  const settings = {
    infinite: false,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at once
    swipeToSlide: true,
    afterChange: function (index) {
      // console.log(
      //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      // );
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


  return (
    <>
      <Slider {...settings}>
        {cards.map((card) => {
          const year =
            card.release_date ?
              card.release_date.slice(0, 4) : card.first_air_date.slice(0, 4)
          return (
            <ImageCard
              key={uuidv4()}
              title={card.title || card.name}
              year={year}
              mediaType={card.media_type}
              imageURL={`${posterUrl}${card.backdrop_path}`}
            />
          )
        })}
      </Slider>
    </>
  );
};

export default CardCarousel;
