import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Courses = () => {
    // Define your list of videos with titles and YouTube video IDs
    const videos = [
        { title: 'Java', videoId: 'xk4_1vDrzzo', description: 'Learn Java programming language from scratch.' },
        { title: 'CAM', videoId: 'GRInNLx3Tug', description: 'Introduction to Computer Architecture and Microprocessor (CAM)' },
        // Add more videos as needed
    ];

    return (
        <>
            <div className="courses" style={{ paddingTop: '100px', backgroundColor: '#000814' }}>
                <NavBar />
                <div className="justify-items-center m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div className="flex flex-col lg:flex-row py-8 justify-center text-center lg:text-left">
                        <div className="lg:w-2/3">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                                Courses Available
                            </h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Map over the list of videos to render them */}
                                {videos.map((video, index) => (
                                    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                                        <iframe 
                                            width="490" // Adjusted width
                                            height="315" 
                                            src={`https://www.youtube.com/embed/${video.videoId}`} // Use videoId from the videos array
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen
                                        ></iframe>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
                                            <p className="text-gray-600">{video.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />                
            </div>
        </>
    )
}

export default Courses;
