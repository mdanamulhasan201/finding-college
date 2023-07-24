import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import '../SignUp/SignUp.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { ScaleLoader } from "react-spinners";
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.confiq";


const Login = () => {
    const [error, setError] = useState(null);

    const { loading, setLoading, signIn } =
        useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const {
        register,
        reset,
        formState: { errors },
    } = useForm();

    // handle submit
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })


            })
            .catch(error => {
                console.log(error.message)
                setError(error.message);
                setLoading(false)

            })
    }


    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();



    // google login
    const handleGoogleSignIn = () => {
        setError('')

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                // toast.success("Logout Successfully!");
            })
            .catch(error => {
                setError(error.message)
            })
    }


    // github login
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser)
                navigate(from, { replace: true })
                // setSuccess('User has been successfully login')

            })
            .catch(error => {
                setError(error.message)
            })
    }



    // handle toggle password visibility
    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login!</h1>
                    <p className="py-6">Don't have an account? Create your account. It's take less then a minutes.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                {...register('email', { required: true })}
                                type='email'
                                name='email'
                                required
                                id='email'
                                placeholder=' Your Email'
                                className='w-full px-3 py-2 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8] text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.email?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Email is required
                                </p>
                            )}
                        </div>


                        <div>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    {...register('password', { required: true })}
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    id='password'
                                    required
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]  text-gray-900 pr-10'
                                />
                                {errors.password?.type === 'required' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Password is required
                                    </p>
                                )}
                                <button
                                    type='button'
                                    onClick={handleTogglePassword}
                                    className='absolute inset-y-0 right-0 px-2 flex items-center  text-[#0e51d8] focus:outline-[#0e51d8] input-bordered border-[#0e51d8]'
                                >
                                    {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
                                </button>
                            </div>
                        </div>


                        <div className="form-control ">
                            <button
                                type='submit'
                                className='bg-[#0e51d8] mt-5 btn gradient-button text-white'
                            >
                                {loading ? (
                                    <ScaleLoader color="#ffffff"
                                        height={15}
                                        width={2} size={5} />
                                ) : (
                                    'Login'
                                )}
                            </button>
                        </div>
                        {error && (
                            <div className=" text-red-700 px-4 py-3 rounded my-4">
                                <strong>Error:</strong> {error}
                            </div>
                        )}

                    </form>
                    <div className='flex items-center my-5 space-x-1'>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        <p className='px-3 text-sm text-center dark:text-gray-400'>
                            Login with social accounts
                        </p>
                        <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-between  justify-items-center">

                        <div>
                            <button onClick={handleGoogleSignIn} className="flex hover:border-solid p-1 hover:rounded-lg hover:bg-gray-300 "> <FcGoogle className="text-3xl mr-2"></FcGoogle>
                                <div><h2 className="font-semibold">Login with Google</h2></div>
                            </button>
                        </div>

                        <div >
                            <button onClick={handleGithubSignIn} className="flex hover:border-solid p-1 hover:rounded-lg hover:bg-gray-300"> <FaGithub className="text-3xl mr-2"></FaGithub>
                                <div><h2 className="font-semibold">Login with Github</h2></div>
                            </button>
                        </div>

                    </div>
                    <hr className="mt-5" />
                    <div>
                        <h2 className="text-center my-5 text-gray-500">Do not have an account?  <Link to='/signUp' className="hover:text-[#0e51d8] font-semibold">Register</Link> </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;