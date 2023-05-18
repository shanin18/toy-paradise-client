import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import LoginWithSocial from "../../Shared/LoginWithSocial";

const SignUp = () => {
  useTitle("Sign up");
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photoURL.value;

    setError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(user, name, photo)
        .then(() => {
            navigate("/")
            form.reset()
        })
        .catch(err => console.log(err.message))
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="mx-4 mt-24">
      <div className="card-body md:w-[600px] shadow-2xl mx-auto rounded-xl">
        <h2 className="font-bangers text-3xl md:text-4xl text-center my-4">
          Sign up
        </h2>
        <form onSubmit={handleSignUp}>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-archivo">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered font-archivo"
                required
              />
            </div>
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text font-archivo">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                name="photoURL"
                className="input input-bordered font-archivo"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#01bfff] border-0 font-archivo">
              Sign up
            </button>
          </div>
          <small className="font-archivo text-red-600">{error}</small>
        </form>
        <small className="font-archivo mt-3">
          Already have an account?
          <Link to="/login" className="hover:underline pl-1 text-[#01bfff]">
            login
          </Link>
        </small>
        <div className="divider font-archivo">OR</div>
        <LoginWithSocial></LoginWithSocial>
      </div>
    </div>
  );
};

export default SignUp;
