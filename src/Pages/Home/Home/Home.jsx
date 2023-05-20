import useTitle from "../../../Hooks/useTitle";
import ContactUs from "../../ContactUs/ContactUs";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
