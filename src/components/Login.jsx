import { useContext, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authContext } from "../Authprovider";


const Login = () => {
    const navigate = useNavigate()
    let {login , setUser} = useContext(authContext)
    let location = useLocation()
    let emailRef = useRef(null)
    let handleSubmit = (e) => {
        e.preventDefault()
        let email = emailRef.current.value
        let password = e.target.password.value
        login(email , password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            toast.success('login successful')
            navigate(location?.state ? location.state : "/")
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(`${errorMessage}`)
          });
    }

    return (
        <div>
            <div className="hero bg-[#1b1b1b]">
                <div className="card bg-[#232323] w-full max-w-sm shrink-0 shadow-2xl my-14">
                    <form className="card-body" onSubmit={handleSubmit}>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input ref={emailRef} type="email" placeholder="email" name="email" className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" required />
                            <label className="label">
                                <button className="label-text-alt link link-hover text-gray-400">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-lg text-white bg-[#DD003F] hover:scale-105 transition duration-300">Login</button>
                        </div>
                    </form>
                    <p className="pl-4 pb-2 text-gray-400">Dont have an account? <span className="underline"><NavLink to='/register'>Register</NavLink></span></p>
                </div>

            </div>
        </div>
    );
};

export default Login;
  