import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Login = () => {
  useTitle("Login");

  return (
    <div className="card w-96 mx-auto shadow-2xl mt-24 pt-8">
      <h2 className="font-bangers text-3xl md:text-4xl text-center">Login</h2>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-archivo">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered font-archivo"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-archivo">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered font-archivo"
          />
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-[#01bfff] border-0 font-archivo">
            Login
          </button>
        </div>
        <small className="font-archivo mt-3">
          New here?
          <Link to="/signUp" className="hover:underline pl-1 text-[#01bfff]">
            create an account
          </Link>
        </small>
        <div className="divider font-archivo">OR</div>
        <div className="flex justify-center">
          <button className="btn btn-ghost btn-circle">
            <img
              className="w-10"
              src="https://i.ibb.co/zXbZ9B9/Google.png"
              alt="google logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
