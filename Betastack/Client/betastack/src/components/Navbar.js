import React, { useContext } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import '../css/productItem.css'
import image from "../images/prod-logo.png"
import productContext from '../context/productContext';

function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();
    const context = useContext(productContext);
    const handleLogout = () => {
      context.logout();
    };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <img src={image} alt={"BetaStack"} className="product-image-logo" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid">
        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} aria-current="page" to="/products"><h5>Products</h5></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`} aria-current="page" to="/news"><h5>News</h5></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/discussions' ? 'active' : ''}`} aria-current="page" to="/discussions"><h5>Discussions</h5></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`} aria-current="page" to="/events"><h5>Events</h5></Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/myproducts' ? 'active' : ''}`} aria-current="page" to="/myproducts"><h5>My Products</h5></Link>
            </li>
          </ul>
          <div className="d-flex ms-auto">
          <button className="btn btn-primary btn-lg" onClick={handleLogout} style={{borderRadius:'40px'}}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar