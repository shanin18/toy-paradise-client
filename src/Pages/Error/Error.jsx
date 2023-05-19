import { Link, useRouteError } from "react-router-dom";
import errorImage from "/images/error/error.gif";

const Error = () => {
  const { error } = useRouteError();

  return (
    <div className="h-screen flex justify-center">
      <div>
        <img src={errorImage} alt="error page image" />
        <h1 className="text-center text-3xl font-bold font-archivo">
          {error.message}
        </h1>
        <div className="text-center mt-4">
          <Link to="/">
            <button className="btn font-archivo capitalize bg-[#2e85ff] border-0 rounded-full">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
