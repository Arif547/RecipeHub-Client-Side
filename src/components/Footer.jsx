import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 mt-10">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-xl font-bold">Recipe Hub</h2>
                <p className="text-sm mt-2">© {new Date().getFullYear()} Recipe Hub. All rights reserved.</p>

                <div className="mt-4">
                    <p className="text-sm">Contact: <a href="mailto:contact@recipehub.com" className="text-blue-400 hover:underline">contact@yourwebsite.com</a></p>
                </div>

                <div className="flex mt-4 space-x-4">
                    <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">Facebook</a>
                    <a href="https://twitter.com" target="_blank" className="hover:text-blue-500">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" className="hover:text-blue-500">LinkedIn</a>
                    <a href="https://instagram.com" target="_blank" className="hover:text-blue-500">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
