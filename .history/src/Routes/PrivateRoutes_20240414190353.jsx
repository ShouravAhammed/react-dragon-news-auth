import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <>
        <div className="flex justify-center items-center h-40">
        <span className="loading loading-bars loading-lg"></span>
        </div>
        </>
    }
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;