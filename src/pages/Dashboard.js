import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import courseImage from '../images/Dashboard.jpg'; // Import the image

const Dashboard = () => {
    return (
        <>
            <div className="dashboard" style={{ paddingTop: '100px', backgroundColor: '#000814' }}>
                <NavBar />
                <div className="justify-items-center m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1"> {/* Change the order */}
                            <h1 className="mb-5 mr-12 mt-16 md:text-5xl text-3xl font-bold text-white">
                                Courses for you:
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 mr-12 text-gray-500">
                            Unlock a world of tailored courses handpicked by our esteemed professors. Explore diverse topics catered to your interests and goals. Expand your knowledge and skills with our curated selection. Embark on a journey of learning designed just for you.
                            </div>
                            <div className="mb-4 mr-12 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/courses" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    View All Courses
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2 mt-8 ml-10"> {/* Change the order */}
                            <img src={courseImage} alt="Course" className="w-1/ h-auto lg:h-64 object-cover rounded-lg" /> {/* Use Bootstrap classes to control image size and make corners rounded */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Dashboard;
