import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    let { login, setUser} = useContext(authContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        login(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success('login successful')
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                const errorText = errorMessage.includes("auth/invalid-credential")
                    ? "Invalid Email or Password. Please try again with correct information."
                    : "Something went wrong. Please try again.";
                toast.error(errorText);
            });

    }

    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="card w-full max-w-sm shadow-2xl bg-[#232323] p-6">
                <h2 className="text-center text-xl font-bold text-white mb-4">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Enter your email" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]"required/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm text-gray-400">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="w-full bg-[#DD003F] py-2 rounded-md text-white cursor-pointer">Login</button>

                    </div>
                </form>
                <p className="mt-4 text-sm text-gray-400">Don't have an account? <NavLink to="/register" className="link link-hover text-[#DD003F]"> Register</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;

