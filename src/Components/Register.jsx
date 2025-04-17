import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="card w-full max-w-sm shadow-2xl bg-[#232323] p-6">
                <h2 className="text-center text-xl font-bold text-white mb-4">Register</h2>
                <form className="space-y-4">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Profile Icon</span>
                        </label>
                        <input type="url" placeholder="icon url" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]"required/>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm text-gray-400">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="w-full bg-[#DD003F] py-2 rounded-md text-white cursor-pointer">Register</button>

                    </div>
                </form>
                <p className="mt-4 text-sm text-gray-400">Already have an Account? <NavLink to="/login" className="link link-hover text-[#DD003F]"> Login</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;

