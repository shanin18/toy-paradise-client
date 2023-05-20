import img1 from "/images/gallery/img1.avif";
import img2 from "/images/gallery/img2.avif";
import img3 from "/images/gallery/img3.avif";
import img4 from "/images/gallery/img4.avif";
import img5 from "/images/gallery/img5.avif";
import img6 from "/images/gallery/img6.avif";
import img7 from "/images/gallery/img7.avif";
import img8 from "/images/gallery/img8.avif";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Gallery = () => {
  return (
    <div>
      <div className="bg-[url('images/banner/avengers.jpg')] bg-fixed bg-center bg-cover px-2 py-20">
        <h1 className="font-bold font-bangers text-5xl mb-10 text-center text-white tracking-wider">
          Gallery
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-3 md:gap-4">
          <div data-aos="fade-right">
            <img src={img1} alt="gallery-image" />
          </div>
          <div data-aos="fade-down">
            <img src={img2} alt="gallery-image" />
          </div>
          <div data-aos="fade-down">
            <img src={img3} alt="gallery-image" />
          </div>
          <div data-aos="fade-left">
            <img src={img4} alt="gallery-image" />
          </div>
          <div data-aos="fade-right">
            <img src={img5} alt="gallery-image" />
          </div>
          <div data-aos="fade-up">
            <img src={img6} alt="gallery-image" />
          </div>
          <div data-aos="fade-up">
            <img src={img7} alt="gallery-image" />
          </div>
          <div data-aos="fade-left">
            <img src={img8} alt="gallery-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
