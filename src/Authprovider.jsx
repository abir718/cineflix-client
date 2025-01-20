import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword ,updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.init";

export let authContext = createContext()

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    let [user , setUser] = useState(null)
    let [loader , setLoader] = useState(true)
    let newUser = (name , email , password , photo) => {
        return createUserWithEmailAndPassword(auth , name , email , password , photo )

    }

    let login = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    let changeProfile = (data) =>{
        return updateProfile(auth.currentUser , data)
    }

    let logOut = () =>{
        return signOut(auth)
    }

    let signInWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    
    }
    

    let authInfo = {
        user,
        setUser,
        newUser,
        logOut,
        login,
        loader,
        changeProfile,
        signInWithGoogle

    }


    useEffect(()=> {
        let remove = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=> {remove()} 
    } , [])

    return (
        <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    );
};

export default AuthProvider;