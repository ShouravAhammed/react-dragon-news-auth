import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    if(user){
        return children
    }
    
    if(loading){
        return <>
        <div className="flex justify-center items-center h-96">
        <span className="loading loading-bars loading-lg"></span>
        </div>
        </>
    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoutes;