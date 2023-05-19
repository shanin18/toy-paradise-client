import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthProvider";
// import Spinner from "../component/spinner";

const Main = () => {
  // const { loading } = useContext(AuthContext);

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
