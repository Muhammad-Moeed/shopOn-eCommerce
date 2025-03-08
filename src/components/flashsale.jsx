import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { FaRegStar } from "react-icons/fa";
import { FaEye, FaHeart, FaBalanceScale } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export const Flashsale = ({ cards }) => {
  return (
    <>
      <div className="px-5 mt-3 mb-1">
        <h4 className="text-gray-300 text-4xl font-bold">Flash Sale</h4>

        <div className="d-flex bg-white px-3 pt-4 mt-2 position-relative">
          <span className="text-success fw-semibold">On Sale Now</span>
          <button className="px-2 py-1 position-absolute end-0 bottom-0 border border-success bg-white text-success">
            SHOP MORE
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center min-vh-100 px-5">
        <div className="w-100 max-w-6xl">
          <Swiper
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            slidesPerGroup={1}
            navigation={true}
            autoplay={{ delay: 700, disableOnInteraction: false }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="w-100"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="card custom-card d-flex flex-column justify-content-between position-relative">
                  <div className="icon-container position-absolute top-0 start-0 d-flex flex-column gap-2 p-2">
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip id="quick-view-tooltip">Quick View</Tooltip>}
                    >
                      <button className="icon-btn btn btn-outline-secondary rounded-circle p-2">
                        <FaEye size={20} />
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip id="wishlist-tooltip">Add to Wishlist</Tooltip>}
                    >
                      <button className="icon-btn btn btn-outline-secondary rounded-circle p-2">
                        <FaHeart size={20} />
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip id="comparison-tooltip">Comparison</Tooltip>}
                    >
                      <button className="icon-btn btn btn-outline-secondary rounded-circle p-2">
                        <FaBalanceScale size={20} />
                      </button>
                    </OverlayTrigger>
                  </div>

                  <div className="d-flex justify-content-center mb-3">
                    <img src={card.image} alt={card.title} className="img-fluid" />
                  </div>

                  <div className="p-3">
                    <div className="d-flex">
                      {[...Array(5)].map((_, i) => (
                        <FaRegStar key={i} />
                      ))}
                    </div>
                    <p className="card-title" style={{ fontSize: "12px", fontWeight: "600" }}>{card.title}</p>
                    <p className="card-price" style={{ color: "orange", fontWeight: "bold" }}>{card.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-xl mb-5">Stay Tuned, More Exciting Products Coming Soon!  😊</h2>
      </div>
    </>
  );
};
