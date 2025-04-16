import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="card w-full max-w-sm shadow-2xl bg-[#232323] p-6">
                <h2 className="text-center text-xl font-bold text-white mb-4">Login</h2>
                <form className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input text-gray-400 bg-[#282828] input-bordered" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-gray-400">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#DD003F] hover:bg-[#c60039] text-white border-none">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-sm text-center text-gray-400">
                    Don't have an account?{" "}
                    <NavLink to="/register" className="link link-hover text-info">
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;

