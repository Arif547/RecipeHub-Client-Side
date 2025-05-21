import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
// import userProfile from '../../assets/user.png'
// import jobSearch from '../../assets/job-search.png'
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => {
            toast.success(" Sign-out successful!");
        }).catch(() => {
            toast.error("Error Something is Wrong!")
        });
    }
    return (
        <div className='lg:grid lg:grid-cols-12 max-w-[1240px] max-lg:justify-center mx-auto py-5 lg:items-center px-5'>

            <div className='flex gap-4 lg:col-span-3 max-lg:justify-center items-center max-lg:mb-5'>
                <Link to='/' className='flex gap-4 '>
                    <img src="#" alt="" className='w-[40px]' />
                    <h1 className='font-jakarta text-4xl font-extrabold'>Recipe Hub</h1>
                </Link>
            </div>

            <div className='menu-navbar flex lg:gap-10 gap-4 col-span-6 justify-center max-lg:mb-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/add-recipe'>Add Recipe</NavLink>
                <NavLink to='/my-recipes'>My Recipes</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>

            <div className='lg:col-span-3 lg:flex justify-end items-center gap-5'>

                {
                    user ? <div className='flex gap-4 lg:justify-end justify-center'>
                        <Link to='/my-profile'> <img className='w-10 h-10 object-cover rounded-[100%]' src={`${user ? user.photoURL : userProfile}`} alt="" /> </Link>
                        <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
                    </div> : <div className='flex gap-4 lg:justify-end justify-center'>
                        <Link to='/login' className="btn  btn-primary">Login</Link>
                        <Link to='/register' className="btn  btn-secondary">Register</Link>
                    </div>
                }

                <ToastContainer />

            </div>


        </div>
    );
};

export default Header;