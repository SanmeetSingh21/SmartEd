import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-custom-blue">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/about" className="text-sm text-white mr-4">About</Link>
                        <Link to="/contactus" className="text-sm text-white">Contact Us</Link>
                    </div>
                    <p className="text-sm text-white">&copy; 2024 SmartEd.  All rights reserved.  Coded with <span role="img" aria-label="heart">❤️</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
