import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import LoginWithSocial from "../../Shared/LoginWithSocial";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState("");
  const { userLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleUserLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    userLogin(email, password)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="mx-4 my-16">
      <div className="card-body md:w-96 shadow-2xl mx-auto rounded-xl">
        <h2 className="font-bangers text-3xl md:text-4xl text-center my-4">
          Login
        </h2>
        <form onSubmit={handleUserLogin}>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text font-archivo">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered font-archivo"
              required
            />
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text font-archivo">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered font-archivo"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#01bfff] border-0 font-archivo">
              Login
            </button>
          </div>
          <small className="font-archivo text-red-600">{error}</small>
        </form>
        <small className="font-archivo mt-3">
          New Here? please
          <Link to="/signUp" className="hover:underline pl-1 text-[#01bfff]">
            Sign up
          </Link>
        </small>
        <div className="divider font-archivo">OR</div>
        <LoginWithSocial></LoginWithSocial>
      </div>
    </div>
  );
};

export default Login;
