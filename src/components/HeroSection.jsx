import Slider from "react-slick";
import "../styles/HeroSection.css";
import { Link } from "react-router-dom";

const images = [
  "https://www.toptenis.rs/image/cache/catalog/yonex/PERCEPT%20100%20-%20Olive%20Green%20-%201a-510x600.png", // Reket
  "https://dingdongshop.rs/wp-content/uploads/2021/08/33-1-600x600.jpg", // Teniske loptice
  "https://www.tenisreketi.com/fajlovi/product/big/Head%20Djokovic%2012R%20Monstercombi%20Racket%20Bag%20-%20Black,%20White.jpg"  // Torba
];

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <div className="hero-overlay">
                <h1>Tennis Shop</h1>
                <p>Najkvalitetnija teniska oprema na jednom mestu</p>
                <Link to="/products" className="hero-btn">Pogledaj proizvode</Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;