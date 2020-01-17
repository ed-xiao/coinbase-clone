import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout, openModal }) => {
    const display = currentUser ? (
        <div className="nav-wrapper">
            <div className='nav-center'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">Portfolio</Link>
                <Link className="nav-link" to="/">Prices</Link>
            </div>
            <div className="nav-right">
                <button className="nav-link nav-trade" onClick={openModal}>Trade</button>
                <button className="nav-link" onClick={logout}>Logout</button>
            </div>
        </div>
    ) : (
        <div className="nav-right">
            <Link className="nav-link" to="/login">Sign In</Link>
            <Link className="nav-link" to="/signup">Get Started</Link>
        </div>
    );

    return (
        <nav className='nav-bar'>
            <Link to="/" className="nav-link nav-logo">coinlabo</Link>
            {display}
        </nav>
    );
};