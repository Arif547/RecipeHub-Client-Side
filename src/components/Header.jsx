import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
// import userProfile from '../../assets/user.png'
import recipeBook from '../assets/recipe-book.png'
import DarkMode from '../components/DarkMode';
import { ToastContainer, toast } from 'react-toastify';


const Header = () => {
    const { user, logOut } = use(AuthContext);
    const [showMenu, setShowMenu] = useState(localStorage.getItem("menuState") === "true");
    const handleLogOut = () => {
        logOut().then(() => {
            toast.success(" Sign-out successful!");
        }).catch(() => {
            toast.error("Error Something is Wrong!")
        });
    }



    return (
        <div className='border-b  border-green-200 sticky top-0 z-5 bg-base-100'>
            <div className='grid grid-cols-3 lg:grid-cols-12 max-w-[1240px] max-lg:justify-center mx-auto py-5 lg:items-center px-5'>

                <div className='lg:hidden'>
                    <div className="dropdown bg-base-100">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-[20px] font-medium space-y-4 rounded-box z-1 mt-3 w-52 p-2 shadow menu-navbar">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/all-recipes'>Recipes</NavLink>
                            <NavLink to='/aboutUs'>About Us</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                            <NavLink to='/add-recipe'>Add Recipe</NavLink>
                            <NavLink to='/my-recipes'>My Recipes</NavLink>
                        </ul>
                    </div>
                </div>

                <div className='flex gap-4 lg:col-span-3 max-lg:justify-center items-center'>
                    <Link to='/' className='flex gap-4 items-center'>
                        <img src={recipeBook} alt="" className='w-[40px] h-[40px]' />
                        <h1 className='text-[30px] font-bold max-md:hidden'>Recipe Hub</h1>
                    </Link>
                </div>

                <div className='menu-navbar flex lg:gap-10 gap-4 text-[20px] font-medium col-span-6 justify-center align-middle max-lg:mb-5 max-lg:hidden'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/all-recipes'>Recipes</NavLink>
                    <NavLink to='/aboutUs'>About Us</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/add-recipe'>Add Recipe</NavLink>
                    <NavLink to='/my-recipes'>My Recipes</NavLink>

                </div>

                <div className='lg:col-span-3 flex justify-end items-center gap-3 md:gap-5'>

                    {
                        user ? <div className="relative inline-block">
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                onClick={() => setShowMenu(!showMenu)}
                                className="w-12 h-12 object-cover rounded-full cursor-pointer border text-center border-gray-300 shadow-md"
                            />
                            {showMenu && (
                                <div className="absolute top-14 right-0 bg-white p-4 shadow-lg rounded-lg w-48 z-50">
                                    <p className="text-gray-700 text-[18px] font-medium">{user.displayName}</p>
                                    <button
                                        onClick={handleLogOut}
                                        className="mt-2 w-full bg-green-500 cursor-pointer text-white py-2 rounded-md hover:bg-red-600 transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div> : <div className='flex gap-4 justify-end'>
                            <Link to='/login' className="btn  btn-primary">Login</Link>
                            <Link to='/register' className="btn btn-secondary max-md:hidden">Register</Link>
                        </div>


                        // user ? <div className='flex gap-4 lg:justify-end justify-center'>
                        //     <Link to='/my-profile'> <img className='w-10 h-10 object-cover rounded-[100%]' src={`${user ? user.photoURL : userProfile}`} alt="" /> </Link>
                        //     <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                        // </div> : <div className='flex gap-4 lg:justify-end justify-center'>
                        //     <Link to='/login' className="btn  btn-primary">Login</Link>
                        //     <Link to='/register' className="btn  btn-secondary">Register</Link>
                        // </div>
                    }

                    <DarkMode></DarkMode>

                    <ToastContainer />

                </div>





            </div>
        </div>
    );
};

export default Header;