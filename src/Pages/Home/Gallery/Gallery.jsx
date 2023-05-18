import img1 from "/images/gallery/img1.avif"
import img2 from "/images/gallery/img2.avif"
import img3 from "/images/gallery/img3.avif"
import img4 from "/images/gallery/img4.avif"
import img5 from "/images/gallery/img5.avif"
import img6 from "/images/gallery/img6.avif"
import img7 from "/images/gallery/img7.avif"
import img8 from "/images/gallery/img8.avif"

const Gallery = () => {
  return (
    <div>
      <div className="bg-[url('images/banner/avengers.jpg')] bg-fixed bg-center bg-cover px-2 py-16">
        <h1 className="font-bold font-bangers text-5xl pb-6 text-center text-white tracking-wider">
          Gallery
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto gap-3">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
