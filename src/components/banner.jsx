import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
import banner6 from '../assets/banner6.png';
import banner7 from '../assets/banner7.png';
import banner8 from '../assets/banner8.jpg';
import banner9 from '../assets/banner9.png';
import banner10 from '../assets/banner10.gif';
import banner11 from '../assets/banner11.png';
import banner12 from '../assets/banner12.jpg';


const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7, banner8, banner9, banner10, banner11, banner12];

const ImageCarousel = () => {
  return (
    <div className="mb-5 pb-3 bg-white">
      <Carousel controls={true} indicators={true} pause={false} interval={2000}>
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
