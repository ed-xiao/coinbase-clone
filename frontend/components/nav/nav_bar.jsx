import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="nav-wrapper">
            <div className='nav-center'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">Portfolio</Link>
                <Link className="nav-link" to="/">Prices</Link>
            </div>
            <div className="nav-right">
                <button className="nav-link nav-trade">Trade</button>
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
        <header>
            <nav className='nav-bar'>
                <Link to="/" className="nav-link nav-logo">coinbase</Link>
                {display}
            </nav>
        </header>
    );
};