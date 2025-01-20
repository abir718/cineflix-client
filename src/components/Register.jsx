import { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider";
import toast from "react-hot-toast";


const Register = () => {

    const navigate = useNavigate()

    let {newUser , setUser , changeProfile , signInWithGoogle} = useContext(authContext)
    let [errorp , setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
    
        setError('');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    
        if (!passwordRegex.test(password)) {
            setError(
                <div>
                    <p>Password must contain:</p>
                    <ul>
                        <li>One capital letter</li>
                        <li>One small letter</li>
                        <li>At least 6 characters</li>
                    </ul>
                </div>
            );
            return;
        }
    
        newUser(email, password)
            .then((result) => {
                const user = result.user;
                changeProfile({ displayName: name, photoURL: photo }).then(() => {
                    setUser(user);
                    toast.success('Registration successful');
                    navigate("/");
                });
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };
    
    const signIn = () => {
        signInWithGoogle()
          .then((result) => {
            const user = result.user;
            toast.success('Registration successful');
            navigate("/");
          })
          .catch((error) => {
            console.error("Error during sign-in:", error.message);
          });
      };
    



    return (
        <div>
            <div className="hero bg-[#1b1b1b]">
                <div className="card bg-[#232323] w-full max-w-sm shrink-0 shadow-2xl my-14">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Photo-URL</span>
                            </label>
                            <input type="photo" placeholder="photo" name="photo" className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" required />

                        </div>

                        <div className="form-control mt-4 ">
                            <button className="py-2 rounded-lg text-white bg-[#DD003F] hover:scale-105 transition duration-300">Register</button>
                        </div>
                    </form>
                    <div className="px-6 py-4 text-center flex justify-center items-center">
                        <button onClick={signIn} className="py-2  w-full text-[#DD003F] bg-none border-[2px] rounded-full border-[#DD003F]">Continue with Google</button>
                    </div>
                    <p className="pl-4 pb-2 text-gray-400">Already have an Account? <span className="underline"><NavLink to='/Login'>Login</NavLink></span></p>

                    {
                        errorp && <div>
                            <div className="text-red-600 pl-4 pb-2">{errorp}</div>
                        </div>
                    }
                
                </div>
            </div>
        </div>
    );
};

export default Register;