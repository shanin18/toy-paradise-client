import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "/images/banner/actionfigure.png"
import img2 from "/images/banner/avengers2.png"
import img3 from "/images/banner/transformersR.jpg"
import img4 from "/images/banner/starwars.png"

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
          <img className="md:h-[600px] lg:h-[700px]" src={img1} alt="" />
        </div>
        <div>
          <img className="md:h-[600px] lg:h-[700px]" src={img2} alt="" />
        </div>
        <div>
          <img className="md:h-[600px] lg:h-[700px]" src={img3} alt="" />
        </div>
        <div>
          <img className="md:h-[600px] lg:h-[700px]" src={img4} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
