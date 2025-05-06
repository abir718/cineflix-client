import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { authContext } from "../AuthProvider";

const Register = () => {
    const navigate = useNavigate()
    let { newUser, setUser, changeProfile } = useContext(authContext)
    let [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        setError('');
        const passwordRegex = /^.{6,}$/;

        if (!passwordRegex.test(password)) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        newUser(email, password)
            .then((result) => {
                const user = result.user;
                const userData = {
                    email: user.email,
                    displayName: name,
                    photoURL: photo,
                };

                changeProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser(user);
                        toast.success("Registration successful");
                        navigate("/");
                    })
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="card w-full max-w-sm shadow-2xl bg-[#262626] p-6">
                <h2 className="text-center text-xl font-bold text-white mb-4">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Profile Icon</span>
                        </label>
                        <input type="url" name="photo" placeholder="Icon URL" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input w-full border-[0.1px] border-gray-600 mt-1 text-gray-300 bg-[#282828] focus:outline-none focus:ring-2 focus:ring-[#444]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-sm text-gray-400">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="w-full bg-[#DD003F] py-2 rounded-md text-white cursor-pointer">Register</button>

                    </div>
                </form>
                <p className="mt-4 text-sm text-gray-400">Already have an Account? <NavLink to="/login" className="link link-hover text-[#DD003F]"> Login</NavLink></p>
                {
                    error && <div>
                        <div className="text-red-600 pl-4 pb-2">{error}</div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Register;

