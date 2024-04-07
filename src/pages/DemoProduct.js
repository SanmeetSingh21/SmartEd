import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import Dashboard from './Dashboard';
import Footer from '../components/Footer';
import placeholderImage from '../images/Login_2.jpg';

function DemoProduct() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    console.log("Login Success");
                    alert('Login successful!')
                    navigate('/dashboard');
                } else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <NavBar />
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style={{ background: "#000814" }}>
                <div className="bg-translucent p-5 rounded shadow-lg mt-8 mx-9 ml-40" style={{ flex: 1, maxWidth: '550px', backgroundColor: '#000C23', boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.5)', borderRadius: '20px' }}>
                <h2 className='mb-4 text-white' style={{ color: '#fff' }}>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label text-white">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-8 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label text-white">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <p className='mt-3 mb-2 text-white'>Don&apos;t have an account? <Link to='/contact' className="text-primary">Register</Link></p>
                </div>
                <div className="mx-20 mt-8">
                    <img src={placeholderImage} alt="Placeholder" style={{ width: '80%', borderRadius: '10px' }} />
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default DemoProduct;
