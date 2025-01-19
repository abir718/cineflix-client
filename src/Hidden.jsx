import { useContext } from "react";
import { authContext } from "./Authprovider";
import {Navigate, useLocation } from "react-router-dom";
import Loading from "./components/Loading";


const Hidden = ({children}) => {
    let location = useLocation()
    let {user , loader} = useContext(authContext)

    if (loader) {
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={`/login`}></Navigate>


};

export default Hidden;