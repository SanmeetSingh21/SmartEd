import React from 'react';
import img from '../images/Professor2.jpg';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';

const Intro = () => {
    return (
        <>
            <div className="intro bg-custom-blu" id='about' style={{ marginTop: '80px' }}> {/* Apply background color class and adjust top margin */}
                <NavBar />
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            <h3 className="text-3xl mb-10 text-white font-bold">Empowering Academic Excellence Through SmartEd</h3> {/* Update text color to white */}
                            <div>
                                <p className='my-3 text-xl text-gray-500 font-semibold'>At SmartEd, we're dedicated to transforming how students engage with their studies. We understand the struggles of missed lectures, tedious searches for course materials, and rushed syllabus progression. That's why we've set out to offer innovative e-learning solutions. Our platform serves as a comprehensive learning hub for university students. It includes video lectures from their professors, ensuring they can catch up on missed classes or cover study gaps effortlessly and at no extra cost.</p> {/* Update text color to light gray */}
                            </div>
                            <Link to="/login" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                Continue Learning!   
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Intro;
