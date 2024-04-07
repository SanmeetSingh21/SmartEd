// import React from 'react';
// import { HashLink } from 'react-router-hash-link';

// const NavLinks = () => {
//     return (
//         <>
//             <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900 mt-4" smooth to="/#about">
//                 About
//             </HashLink>
            
//             <HashLink className="px-8 font-extrabold text-gray-500 hover:text-blue-900 mt-4" to="/contact#contact">
//                 Contact Us
//             </HashLink>
            
//             <HashLink
//     to="/login" // Set the path to DemoProducts page
//     className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl mt-4 ml-4" // Add ml-4 for left margin
// >
//     Login
// </HashLink>
//         </>
//     )
// }

// export default NavLinks;
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
          
        </>
    )
}

export default NavLinks;
