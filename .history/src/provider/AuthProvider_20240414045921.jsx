import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const setTheUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleAuth = () => {
        signInWithPopup(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log('observed', currentUser)
            setUser(currentUser)
        })
    }, [])

    const authInfo = {
        user,
        createUser,
        setTheUser,
        googleAuth
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;