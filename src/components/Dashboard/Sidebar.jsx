import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import {
    AiOutlineBars,
    AiOutlinePlus,
    AiOutlineHome,
} from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/recipe-book.png';
import DarkMode from '../DarkMode';
import { IoRestaurantOutline } from 'react-icons/io5';

const Sidebar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    const navLinkStyle = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive
            ? 'bg-primary text-white'
            : 'text-base-content hover:bg-primary/10 hover:text-primary'
        }`;

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="flex items-center justify-between p-4 md:hidden bg-base-100 shadow">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <IoRestaurantOutline
                                className="w-6 h-6 lg:w-8 lg:h-8 text-white transform group-hover:rotate-12 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                                Recipe Hub
                            </h1>
                            <p className="text-xs lg:text-sm text-base-content/60 -mt-1">
                                Delicious Recipes
                            </p>
                        </div>
                    </Link>
                </div>
                <button onClick={toggleSidebar} className="text-xl text-base-content">
                    <AiOutlineBars />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 z-40 h-screen w-64 bg-base-200 shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                {/* Logo (desktop only) */}
                {/* Logo Section */}
                <div className="flex items-center space-x-3 p-4">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
                    >
                        <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <IoRestaurantOutline
                                className="w-6 h-6 lg:w-8 lg:h-8 text-white transform group-hover:rotate-12 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl lg:text-2xl xl:text-2xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                                Recipe Hub
                            </h1>
                            <p className="text-xs lg:text-sm text-base-content/60 -mt-1">
                                Delicious Recipes
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Main Nav */}
                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">

                    <NavLink to="/" className={navLinkStyle}>
                        <AiOutlineHome /> Home
                    </NavLink>
                    <NavLink to="/dashboard" end className={navLinkStyle}>
                        <CgProfile /> Profile
                    </NavLink>
                    <NavLink to="add-recipe" className={navLinkStyle}>
                        <AiOutlinePlus /> Add Recipe
                    </NavLink>
                    <NavLink to="my-recipes" className={navLinkStyle}>
                        <BsBook /> My Recipes
                    </NavLink>

                </nav>

                {/* Footer Section */}
                <div className="px-4 py-4 border-t border-base-300 space-y-4">
                    <button
                        onClick={logOut}
                        className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-error hover:bg-error/10 transition"
                    >
                        <FiLogOut className="text-error" />
                        Logout
                    </button>
                    <DarkMode />
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
