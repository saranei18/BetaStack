import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../css/productItem.css'
import image from "../images/prod-logo.png"

function Navbar() {

    let location = useLocation();
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
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar