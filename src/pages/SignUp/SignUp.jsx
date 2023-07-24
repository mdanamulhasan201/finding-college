
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import './SignUp.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { AuthContext } from "../../providers/AuthProvider";
import { PulseLoader } from 'react-spinners';
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.confiq";


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { loading} = useContext(AuthContext);
    const { createUser } = useContext(AuthContext)

    const [success, setSuccess] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setError,
        reset
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                reset();
                // Show sweet alert after successful sign-up
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Account Login Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from, { replace: true })
            })
            .catch((error) => {
                setError("email", {
                    type: "manual",
                    message: error.message,
                });
            });
    };

    // sign in with google 
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        setSuccess('')
        setError('')
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setSuccess('User has been successfully login')
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError(error.message)
            })
    }
    // git hub login

    const handleGithubSignIn = () => {
        setSuccess('')
        setError('')
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('User has been successfully login', loggedInUser)

            })
            .catch(error => {
                setError(error.message)
            })
    }





    const handleTogglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create an Account!</h1>
                    <p className="py-6">Don't have an account? Create your account. It's take less then a minutes.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">


                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                {...register('name', { required: true, pattern: /[A-Za-z,.]+$/ })}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Your Name'
                                className='w-full px-3 py-2 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]  text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.name?.type === 'pattern' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Type Letters Only
                                </p>
                            )}
                            {errors.name?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Name is required
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                {...register('email', { required: true })}
                                type='email'
                                name='email'
                                id='email'
                                placeholder=' Your Email'
                                className='w-full px-3 py-2 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]   text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.email?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Email is required
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='photo' className='block mb-2 text-sm'>
                                Photo URL
                            </label>
                            <input
                                {...register('photo', { required: true })}
                                type='text'
                                name='photo'
                                id='photo'
                                placeholder='Photo URL'
                                className='w-full px-3 py-2 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]   text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.photo?.type === 'required' && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Photo URL is required
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor='password' className='text-sm mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 15,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                                    })}
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    id='password'
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]  text-gray-900 pr-10'
                                />
                                <button
                                    type='button'
                                    onClick={handleTogglePassword}
                                    className='absolute inset-y-0 right-0 px-2 flex items-center  text-[#0e51d8] focus:outline-[#0e51d8] input-bordered border-[#0e51d8]'
                                >
                                    {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
                                </button>
                                {errors.password?.type === 'required' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Password is required
                                    </p>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Password must be at least 6 characters
                                    </p>
                                )}
                                {errors.password?.type === 'maxLength' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Password must be less than 15 characters
                                    </p>
                                )}
                                {errors.password?.type === 'pattern' && (
                                    <p className='text-red-600 mt-2' role='alert'>
                                        Password must have at least one capital letter and one special character
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor='confirm' className='text-sm mb-2'>
                                Confirm Password
                            </label>
                            <div className='relative'>
                                <input
                                    {...register('confirm', { required: true })}
                                    type={showPassword ? 'text' : 'password'}
                                    name='confirm'
                                    id='confirm'
                                    placeholder='*******'
                                    className='w-full px-3 py-2 border rounded-md focus:outline-[#0e51d8] input-bordered border-[#0e51d8]   text-gray-900 pr-10'
                                />
                                <button
                                    type='button'
                                    onClick={handleTogglePassword}
                                    className='absolute inset-y-0 right-0 px-2 flex items-center  text-[#0e51d8] focus:outline-[#0e51d8] '
                                >
                                    {showPassword ? <RiEyeOffFill size={20} /> : <RiEyeFill size={20} />}
                                </button>
                            </div>
                            {watch('password') !== watch('confirm') && (
                                <p className='text-red-600 mt-2' role='alert'>
                                    Passwords do not match
                                </p>
                            )}
                        </div>


                        <div className="form-control mt-5">
                            {/* <button className="btn gradient-button text-white">Login</button> */}
                            <button
                                type='submit'
                                className='btn gradient-button  text-white'
                            >
                                {loading ? (
                                    <PulseLoader
                                        color='#ffffff'
                                        height={15}
                                        width={2}
                                        size={5}
                                    />
                                ) : (
                                    'Sign UP'
                                )}
                            </button>
                        </div>


                    </form>
                    <div className='flex items-center  my-4 space-x-1'>
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
                        <h2 className="text-center my-5 text-gray-500">Already have an account? <Link to='/login' className="hover:text-[#0e51d8] font-semibold">Login</Link> </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;