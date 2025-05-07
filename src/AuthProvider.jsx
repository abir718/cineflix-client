import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "/firebase.init"

export let authContext = createContext()

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null)
    let [loader, setLoader] = useState(true)
    let [watchlist, setWatchlist] = useState([])
    let newUser = (name, email, password, photo) => {
        return createUserWithEmailAndPassword(auth, name, email, password, photo)

    }

    let login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    let changeProfile = (data) => {
        return updateProfile(auth.currentUser, data)
    }

    let logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        fetch('http://localhost:5000/watchlist')
            .then(res => res.json())
            .then(data => {
                setWatchlist(data);
            })
            .catch(error => {
                console.error('Error fetching watchlist:', error);
            });
    }, []);




    let authInfo = {user,setUser,newUser,logOut,login,loader,changeProfile,watchlist,setWatchlist}
      


    useEffect(() => {
        let remove = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => { remove() }
    }, [])

    return (
        <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    );
};

export default AuthProvider;