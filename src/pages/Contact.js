import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Dashboard from './Dashboard';
import Footer from '../components/Footer';
import placeholderImage from '../images/register3.jpg';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/dashboard');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ background: "#000814" }}>
                <div className="bg-translucent position-relative p-5 rounded shadow-lg mt-10 mx-9" style={{ flex: 1, maxWidth: '500px', backgroundColor: '#000C23', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)', borderRadius: '20px' }}>
                    <h2 className='mb-4 text-white' style={{ color: '#fff' }}>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputName" className="form-label" style={{ color: '#fff' }}>
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                id="exampleInputName"
                                onChange={(event) => setName(event.target.value)}
                                required
                                style={{ color: '#000', backgroundColor: '#fff', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)' }}
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: '#fff' }}>
                                <strong>Email Address</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control"
                                id="exampleInputEmail1"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                style={{ color: '#000', backgroundColor: '#fff', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)' }}
                            />
                        </div>
                        <div className="mb-8 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#fff' }}>
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                style={{ color: '#000', backgroundColor: '#fff', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </form>
                    

                    <p className='mt-3 mb-2' style={{ color: '#fff' }}>Already have an account? <Link to='/login' >Login</Link></p>
                </div>
                <div className="mx-10 mt-8">
                    <img src={placeholderImage} alt="Placeholder" style={{ width: '100%', borderRadius: '5px' }} />
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default Contact;
