import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/AllToys/AllToys";
import Private from "./Private";
import UpdateToyInfo from "../Pages/UpdateToyInfo/UpdateToyInfo";
import SingleCategoryToyDetails from "../Pages/SingleCategoryToyDetails/SingleCategoryToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <Private>
            <SingleCategoryToyDetails></SingleCategoryToyDetails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader:() => fetch("http://localhost:5000/allToys")
      },
      {
        path: "/myToys",
        element: (
          <Private>
            <MyToys></MyToys>
          </Private>
        ),
      },
      {
        path: "/addAToy",
        element: (
          <Private>
            <AddAToy></AddAToy>
          </Private>
        ),
      },
      {
        path: "/updateToyInfo",
        element: <UpdateToyInfo></UpdateToyInfo>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
