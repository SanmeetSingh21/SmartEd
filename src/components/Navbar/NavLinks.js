import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 py-2 font-extrabold text-lg text-white hover:text-blue-900 mt-4" smooth to="/about">
                About
            </HashLink>
            
            <HashLink className="px-8 py-2 font-extrabold text-lg text-white hover:text-blue-900 mt-4" to="/contactus#contact">
                Contact Us
            </HashLink>

            {/* Add a link to the admin page */}
                <HashLink className="px-8 py-2 font-extrabold text-lg text-white hover:text-blue-900 mt-4" to="/admin">
                    Instructor
                </HashLink>
        </>
    )
}

export default NavLinks;
