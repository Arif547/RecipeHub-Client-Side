import React from 'react';
import { Link } from 'react-router';
import { IoRestaurantOutline } from 'react-icons/io5';
import { FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { path: '/aboutUs', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
        { path: '/all-recipes', label: 'All Recipes' },
        { path: '/services', label: 'Services' },
        
    ];

    const socialLinks = [
        { href: 'https://twitter.com/', icon: FaTwitter, label: 'Twitter', color: 'hover:text-blue-400' },
        { href: 'https://youtube.com/', icon: FaYoutube, label: 'YouTube', color: 'hover:text-red-500' },
        { href: 'https://facebook.com/', icon: FaFacebook, label: 'Facebook', color: 'hover:text-blue-600' },
        { href: 'https://instagram.com/', icon: FaInstagram, label: 'Instagram', color: 'hover:text-pink-500' }
    ];

    return (
        <footer className="bg-base-200 text-base-content">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Logo & Brand Section */}
                    <div className="lg:col-span-2">
                        <Link
                            to="/"
                            className="flex items-center space-x-3 group mb-4 w-fit"
                        >
                            <div className="relative p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all duration-300">
                                <IoRestaurantOutline
                                    className="w-6 h-6 md:w-8 md:h-8 text-white transform group-hover:rotate-12 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                                    Recipe Hub
                                </h2>
                                <p className="text-sm text-base-content/60 -mt-1">
                                    Delicious Recipes
                                </p>
                            </div>
                        </Link>

                        <p className="text-base-content/70 text-sm md:text-base max-w-md leading-relaxed">
                            Discover amazing recipes from around the world. Join our community of food lovers and share your culinary adventures with Recipe Hub.
                        </p>

                        {/* Newsletter Signup */}
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered flex-1 text-sm"
                                />
                                <button className="btn btn-primary btn-sm sm:btn-md">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="space-y-2">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-base-content/70 hover:text-primary transition-colors duration-200 text-sm md:text-base"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

                        {/* Contact Info */}
                        <div className="space-y-2 mb-6">
                            <p className="text-base-content/70 text-sm">
                                📧 hello@recipehub.com
                            </p>
                            <p className="text-base-content/70 text-sm">
                                📞 +1 (555) 123-4567
                            </p>
                            <p className="text-base-content/70 text-sm">
                                📍 123 Food Street, Culinary City
                            </p>
                        </div>

                        {/* Social Media Links */}
                        <div>
                            <h4 className="text-base font-medium mb-3">Follow Us</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`
                                                p-2 rounded-full bg-base-300 text-base-content/70 
                                                ${social.color} hover:bg-base-100 
                                                transform hover:scale-110 transition-all duration-200
                                                shadow-sm hover:shadow-md
                                            `}
                                            aria-label={social.label}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-base-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">

                        {/* Copyright */}
                        <div className="flex items-center space-x-1 text-sm text-base-content/60 order-2 md:order-1">
                            <span>© {currentYear} Recipe Hub. All rights reserved.</span>
                            <span className="hidden sm:inline">Made with</span>
                            <FaHeart className="w-4 h-4 text-red-500 hidden sm:inline animate-pulse" />
                            <span className="hidden sm:inline">for food lovers</span>
                        </div>

                        {/* Legal Links */}
                        {/* <div className="flex items-center space-x-6 text-sm order-1 md:order-2">
                            <Link
                                to="/privacy"
                                className="text-base-content/60 hover:text-primary transition-colors duration-200"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/terms"
                                className="text-base-content/60 hover:text-primary transition-colors duration-200"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/cookies"
                                className="text-base-content/60 hover:text-primary transition-colors duration-200"
                            >
                                Cookie Policy
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;