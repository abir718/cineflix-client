import { useContext, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../Authprovider";
import toast from "react-hot-toast";


const Register = () => {

    const navigate = useNavigate()

    let {newUser , setUser , changeProfile} = useContext(authContext)
    let [errorp , setError] = useState('')
    let [btn , setBtn] = useState(true)

    let btnState = () => {
        setBtn(!btn)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        let name = e.target.name.value
        let photo = e.target.photo.value
        setError('')
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError(<div>
                <p>Password must contain:</p>
                <ul>
                    <li>One capital letter</li>
                    <li>One small letter</li>
                    <li>Must be 6 characters long</li>
                </ul>
            </div>)
                return
        }

        newUser(email , password)
        .then((result) => {
            const user = result.user;
            setUser(user)
            toast.success('registration successful')
            navigate("/")
            changeProfile({displayName:name,
                photoURL :photo
            })
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
                            <input type={btn ? "password" : ""} placeholder="password" name="password" className="text-gray-400 input bg-[#282828] border-gray-500 input-bordered" required />
                            <button onClick={btnState} className="absolute top-12 left-72 mr-14 rounded-lg hover:bg-gray-200 p-2 ">
                                {btn ? <FaRegEyeSlash></FaRegEyeSlash> : <IoEyeSharp></IoEyeSharp>}
                                
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="py-2 rounded-lg text-white bg-[#DD003F] hover:scale-105 transition duration-300">Register</button>
                        </div>
                    </form>
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