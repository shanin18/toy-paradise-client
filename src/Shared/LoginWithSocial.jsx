import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";


const LoginWithSocial = () => {
    const {loginWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(() =>{
          navigate("/")
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div className="flex justify-center">
          <button onClick={handleGoogleLogin} className="btn btn-ghost btn-circle">
            <img
              className="w-10"
              src="https://i.ibb.co/zXbZ9B9/Google.png"
              alt="google logo"
            />
          </button>
        </div>
    );
};

export default LoginWithSocial;