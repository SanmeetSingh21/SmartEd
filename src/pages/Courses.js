import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../images/CAM.pdf'; // Import the PDF file
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Courses = () => {
    // Define your list of videos with titles, YouTube video IDs, and PDF links
    const videos = [
        { title: 'Physics', videoId: 'DF8gKCPoS0c', description: 'Attenuation formula for optical fibres', pdfLink: 'link_to_pdf_1.pdf' },
        { title: 'CAM', videoId: 'GRInNLx3Tug', description: 'Introduction to Computer Architecture and Microprocessor (CAM)', pdfLink: pdf }, // Use imported PDF file
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
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowFullScreen
                                        ></iframe>
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
                                            <p className="text-gray-600">{video.description}</p>
                                            {/* Add a link to the PDF below the video */}
                                            <a href={video.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View PDF</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Heading for reference content support */}
                            <div className="mt-8">
                                <h1 className="text-4xl font-bold text-white mb-4">Reference Content Support</h1>
                                {/* Links to articles */}
                                <ul className="text-gray-300">
                                    <li><a href="https://www.electricity-magnetism.org/attenuation-in-optical-fibres-formula/" target="_blank" rel="noopener noreferrer">Attenuation formula for optical fibres</a></li>
                                    <li><a href="https://www.geeksforgeeks.org/introduction-to-8051-microcontroller/" target="_blank" rel="noopener noreferrer">8051 microcontroller</a></li>
                                    {/* Add more links as needed */}
                                </ul>
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
