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
          fetch(`https://toy-paradise-server-brown.vercel.app/category/${params.id}`),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toy-paradise-server-brown.vercel.app/allToys"),
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
        path: "/update/:id",
        element: <UpdateToyInfo></UpdateToyInfo>,
        loader: ({ params }) =>
          fetch(`https://toy-paradise-server-brown.vercel.app/update/${params.id}`),
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
