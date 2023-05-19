import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "/images/banner/marvel.jpg";
import image2 from "/images/banner/star_wars.jpg";
import image3 from "/images/banner/toy_story.jpg";
import image4 from "/images/banner/spiderman.jpg";

function Banner() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2500}
        preventMovementUntilSwipeScrollTolerance={false}
        stopOnHover={false}
        showThumbs={false}
      >
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
