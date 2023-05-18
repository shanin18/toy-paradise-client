import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const LoginWithSocial = () => {
    const {loginWithGoogle} = useContext(AuthContext);

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then((res) =>{console.log(res)})
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