import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div className="contact-us bg-custom-blu" id='contact-us' style={{ paddingTop: '115px' }}>
            <div>
                <NavBar />
            </div>
            
            <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                <div id='contact-us' className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                        <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white">
                            Contact Us
                        </h1>
                        <div className="text-xl font-semibold tracking-tight mb-5 text-white">Have questions or feedback? Reach out to us!</div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-up" data-aos-delay="700">
                        <form className="max-w-md">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-white font-semibold mb-4">Name</label>
                                <input type="text" id="name" name="name" className="form-input w-full px-4 py-2 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-white font-semibold mb-4">Email</label>
                                <input type="email" id="email" name="email" className="form-input w-full px-4 py-2 rounded-lg" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-white font-semibold mb-4">Message</label>
                                <textarea id="message" name="message" rows="4" className="form-textarea w-full px-4 py-2 rounded-lg"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;
