import { useNavigation } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Spinner from "../../../component/spinner";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinner></Spinner>;
  }

  return (
    <div className="space-y-24">
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
    </div>
  );
};

export default Home;
