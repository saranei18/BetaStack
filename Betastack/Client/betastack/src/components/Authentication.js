import React, { useContext, useState } from 'react'
import logo from '../images/prod-logo.png'; // Ensure you have the correct path to your logo
import productContext from '../context/productContext';
import { useNavigate } from 'react-router';

const Authentication = () => {
    const context = useContext(productContext);
    let navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        context.login(userName, password);
    }

    const handleSignIn = () => {
        context.signIn(userName, password);
    }

    return (
        <div className="container text-center mt-5">
            <img src={logo} alt="Beta Stack" className="mb-1 logo" />
            <h2 className="mb-2 logo">Welcome to Beta Stack!</h2>
            
            <div className='form-group mb-5 authcontent' style={{marginTop: '60px'}}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                <div className="">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className='authcontent'>
                <button className="btn btn-primary btn-lg " onClick={handleSignIn} style={{ borderRadius: '40px', marginRight: '80px' }}>Sign In</button>
                <button className="btn btn-primary btn-lg " onClick={handleLogin} style={{ borderRadius: '40px', marginRight: '60px' }}>Login</button>
            </div>

        </div>
    );
};

export default Authentication