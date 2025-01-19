import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authContext } from "../Authprovider";

const Login = () => {
    const navigate = useNavigate();
    let { login, setUser } = useContext(authContext);
    let location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let onSubmit = ({ email, password }) => {
        login(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Login successful");
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(`${errorMessage}`);
            });
    };

    return (
        <div>
            <div className="hero bg-[#1b1b1b]">
                <div className="card bg-[#232323] w-full max-w-sm shrink-0 shadow-2xl my-14">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                            <label className="label">
                                <button className="label-text-alt link link-hover text-gray-400">Forgot password?</button>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-lg text-white bg-[#DD003F] hover:scale-105 transition duration-300">Login</button>
                        </div>
                    </form>
                    <p className="pl-4 pb-2 text-gray-400">
                        Don`t have an account? <span className="underline"><NavLink to='/register'>Register</NavLink></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
