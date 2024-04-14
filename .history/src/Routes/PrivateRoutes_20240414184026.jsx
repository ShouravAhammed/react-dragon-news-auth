import { Children, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext)

    if(user){
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoutes;