import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Spinner from "../component/spinner";


const Private = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    
    if(loading){
        return <Spinner></Spinner>
    }

    if(user){
        return children;
    }

    return <Navigate to={{state:location}} replace ></Navigate>;
};

export default Private;