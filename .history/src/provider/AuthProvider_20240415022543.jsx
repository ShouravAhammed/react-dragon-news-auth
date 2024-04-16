import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config'
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState(null);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const setTheUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth);
    }

    const googleAuth = () => {
        setLoading(true)
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user
            console.log(user)
            setUserDetails(user);
        })
        .catch(error => console.log(error.message))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observed', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        setTheUser,
        googleAuth,
        logOut,
        loading
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