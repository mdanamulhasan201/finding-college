import { AiOutlineMail } from "react-icons/ai";
import { MdCall, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Avatar from '../../../assets/avatar.png'




const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (

        <>
            <div className='bg-[#005C9F] text-white p-1'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center container mx-auto'>

                    <div className='grid grid-cols-2 md:grid-cols-3'>
                        <div className='flex items-center '>
                            <AiOutlineMail className='mr-1 text-[#EF172E] text-lg hover:text-white '></AiOutlineMail>
                            <p className='text-sm font-semibold'>info@tech.com</p>
                        </div>

                        <div className='flex items-center'>
                            <MdCall className='mr-1 text-[#EF172E] text-lg hover:text-white'></MdCall>
                            <p className='text-sm font-semibold'>+8801777577371</p>
                        </div>
                        <div className='flex items-center'>
                            <MdLocationOn className='mr-1 text-[#EF172E] text-lg hover:text-white'></MdLocationOn>
                            <p className='text-sm font-semibold'>Dhaka, Bangladesh</p>

                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div>
                            <FaFacebookF className='hover:text-[#EF172E]'></FaFacebookF>
                        </div>
                        <div>
                            <FaTwitter className='hover:text-[#EF172E]'></FaTwitter>
                        </div>
                        <div>
                            <FaLinkedinIn className='hover:text-[#EF172E]'></FaLinkedinIn>
                        </div>
                        <div>
                            <FaYoutube className='hover:text-[#EF172E]'></FaYoutube>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-base-100 shadow-md">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="gap-4 font-semibold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li to="" className='navStyle'>
                                    <NavLink className='text-lg'>Home</NavLink>
                                </li>
                                <li className='navStyle'>
                                    <NavLink className='text-lg'>Colleges</NavLink>
                                </li>
                                <li className='navStyle'>
                                    <NavLink className='text-lg'>Admission</NavLink>
                                </li>
                                <li className='navStyle'>
                                    <NavLink className='text-lg'>My College</NavLink>
                                </li>
                            </ul>
                        </div>

                        <Link to='/' className="flex items-center">

                            <img src={logo} className="h-10 w-10" alt="" />
                            <div>
                                <h2 className="text-lg font-bold"> Finding <span className="text-red-500 ">College</span> </h2>
                            </div>
                        </Link>


                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="gap-4 font-semibold menu-horizontal px-1">
                            <li className='navStyle'>
                                <NavLink to='/' className='text-lg'>Home</NavLink>
                            </li>
                            <li className='navStyle'>
                                <NavLink className='text-lg'>Colleges</NavLink>
                            </li>
                            <li className='navStyle'>
                                <NavLink className='text-lg'>Admission</NavLink>
                            </li>
                            <li className='navStyle'>
                                <NavLink className='text-lg'>My College</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex-none gap-2">

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            className="rounded-full"
                                            src={user && user.photoURL ? user.photoURL : Avatar}
                                            alt="profile"
                                            height="30"
                                            width="30"
                                        />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                                    <li><Link className="font-semibold">Profile</Link></li>


                                    {user ? (
                                        <li>
                                            <Link
                                                onClick={handleLogOut}
                                                className="font-semibold"
                                            >
                                                Logout
                                            </Link>
                                        </li>

                                    )

                                        : (
                                            <>
                                                <li>
                                                    <Link
                                                        to="/login"
                                                        className="font-semibold"
                                                    >
                                                        Login
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to="/signUp"
                                                        className="font-semibold"
                                                    >
                                                        Sign Up
                                                    </Link>
                                                </li>
                                            </>

                                        )

                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="bg-[#00052B]">
                <div className="form-control text-center py-5">
                    <div className="input-group justify-center">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search College…" className="input w-96 input-bordered" />
                        <button className="btn w-20 bg-[#EF446E] btn-square border-none hover:bg-[#e61c4e]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div> */}
        </>

    );
};

export default Navbar;