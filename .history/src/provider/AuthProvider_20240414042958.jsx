import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";


export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;