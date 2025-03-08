import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = ({ banners, interval = 1000 }) => {
  return (
    <div className="mb-5 pb-3 bg-white">
      <Carousel controls={true} indicators={true} pause={false} interval={interval}>
        {banners.map((banner, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={banner} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
