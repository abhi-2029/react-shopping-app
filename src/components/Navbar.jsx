import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Kartify</NavLink>
                <button 
                    className="navbar-toggler mx-2" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    {/* Right-side buttons */}
                    <div className="d-flex align-items-center text-center">

                        {/* Profile Button */}
                        <NavLink 
                            to="/profile" 
                            className="btn btn-primary rounded-pill px-4 mx-2 d-flex align-items-center shadow-sm"
                        >
                            <i className="fa fa-user me-2"></i> Profile
                        </NavLink>

                        {/* Cart Button */}
                        <NavLink 
                            to="/cart" 
                            className="btn btn-success rounded-pill px-4 mx-2 d-flex align-items-center shadow-sm position-relative"
                        >
                            <i className="fa fa-shopping-cart me-2"></i> Cart
                            {state.length > 0 && (
                                <span 
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                >
                                    {state.length}
                                </span>
                            )}
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



