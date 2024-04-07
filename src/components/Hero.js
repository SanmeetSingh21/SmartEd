import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroVideo from '../images/First-Vid.mp4'; // Replace 'your-video.mp4' with the path to your video file

const Hero = () => {
    return (
        <>
            <div className="hero bg-custom-blu" id='hero' style={{ paddingTop: '100px' }}>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id='hero' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center mt-0" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-4 ml-24 md:text-5xl text-3xl font-bold text-white">
                                Where Tradition Meets Technology
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-8 ml-24 text-gray-500">
                                With our online courses, you can learn at your own pace, from
                                anywhere in the world, and get access to personalised resources,
                                including feedback from professors.
                            </div>
                            {/* <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                The platform bridges the gap between students and professors, saving time by providing tailored courses aligned with students' curricula.
                            </div> */}
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8 mt-0">
                                <Link to="/contact" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0" style={{ marginTop: '-50px' }}>
                                    Register
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/3" data-aos="fade-up" data-aos-delay="700" style={{ width: '60%' }}>
    <video autoPlay loop muted className="rounded-t float-right duration-1000" style={{ width: '90%', height: 'auto', marginLeft: '-12px' }}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
