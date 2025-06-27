import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { IoRestaurantOutline } from 'react-icons/io5';
import DarkMode from '../components/DarkMode';
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = React.use(AuthContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const userMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Navigation items
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/all-recipes', label: 'Recipes' },
        { path: '/aboutUs', label: 'About Us' },
        { path: '/services', label: 'Services' },
        { path: '/contact', label: 'Contact' }
    ];

    // Handle logout
    const handleLogOut = async () => {
        try {
            await logOut();
            toast.success("Sign-out successful!");
            setIsUserMenuOpen(false);
        } catch (error) {
            toast.error("Error: Something went wrong!");
        }
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Close menus on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <>
            <header className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                ${isScrolled 
                    ? 'bg-base-100/95 backdrop-blur-md shadow-lg border-b border-base-200' 
                    : 'bg-base-100 border-b border-base-200'
                }
            `}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        
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

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => `
                                        px-4 py-2 rounded-lg text-sm xl:text-base font-medium transition-all duration-200
                                        ${isActive 
                                            ? 'bg-primary text-primary-content shadow-md' 
                                            : 'text-base-content hover:bg-base-200 hover:text-primary'
                                        }
                                    `}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>

                        {/* Right Section */}
                        <div className="flex items-center space-x-3">
                            
                            {/* Dark Mode Toggle */}
                            <div className="hidden sm:block">
                                <DarkMode />
                            </div>

                            {/* User Section */}
                            {user ? (
                                <div className="flex items-center space-x-3">
                                    {/* Dashboard Link - Desktop */}
                                    <Link 
                                        to="/dashboard"
                                        className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-lg bg-base-200 hover:bg-base-300 transition-colors duration-200"
                                    >
                                        <span className="text-sm font-medium">Dashboard</span>
                                    </Link>

                                    {/* User Menu */}
                                    <div className="relative" ref={userMenuRef}>
                                        <button
                                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                            className="flex items-center space-x-2 p-1 rounded-full hover:bg-base-200 transition-colors duration-200"
                                            aria-label="User menu"
                                        >
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName || "User"}
                                                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-base-300 shadow-sm"
                                            />
                                            <svg 
                                                className={`w-4 h-4 text-base-content transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* User Dropdown */}
                                        {isUserMenuOpen && (
                                            <div className="absolute right-0 mt-2 w-64 bg-base-100 rounded-xl shadow-xl border border-base-200 py-2 z-50">
                                                <div className="px-4 py-3 border-b border-base-200">
                                                    <p className="text-sm font-medium text-base-content truncate">
                                                        {user.displayName || 'User'}
                                                    </p>
                                                    <p className="text-xs text-base-content/70 truncate">
                                                        {user.email}
                                                    </p>
                                                </div>
                                                
                                                <Link 
                                                    to="/dashboard"
                                                    className="flex items-center px-4 py-3 text-sm hover:bg-base-200 transition-colors duration-200 md:hidden"
                                                    onClick={() => setIsUserMenuOpen(false)}
                                                >
                                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    Dashboard
                                                </Link>
                                                
                                                <button
                                                    onClick={handleLogOut}
                                                    className="flex items-center w-full px-4 py-3 text-sm text-error hover:bg-error/10 transition-colors duration-200"
                                                >
                                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                    </svg>
                                                    Sign Out
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <Link 
                                        to="/login" 
                                        className="btn btn-primary btn-sm lg:btn-md"
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        to="/register" 
                                        className="btn btn-outline btn-sm lg:btn-md hidden sm:flex"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 rounded-lg hover:bg-base-200 transition-colors duration-200"
                                aria-label="Toggle mobile menu"
                            >
                                <svg 
                                    className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden border-t border-base-200 bg-base-100/95 backdrop-blur-md">
                        <div className="px-4 py-4 space-y-2" ref={mobileMenuRef}>
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) => `
                                        block px-4 py-3 rounded-lg font-medium transition-all duration-200
                                        ${isActive 
                                            ? 'bg-primary text-primary-content shadow-md' 
                                            : 'text-base-content hover:bg-base-200 hover:text-primary'
                                        }
                                    `}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            
                            {/* Mobile Dark Mode Toggle */}
                            <div className="pt-4 border-t border-base-200 sm:hidden">
                                <div className="flex items-center justify-between px-4 py-2">
                                    <span className="text-sm font-medium">Dark Mode</span>
                                    <DarkMode />
                                </div>
                            </div>

                            {/* Mobile Register Button */}
                            {!user && (
                                <div className="pt-2 sm:hidden">
                                    <Link 
                                        to="/register" 
                                        className="block w-full btn btn-outline"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-16 lg:h-20"></div>

            <ToastContainer 
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                className="z-50"
            />
        </>
    );
};

export default Header;