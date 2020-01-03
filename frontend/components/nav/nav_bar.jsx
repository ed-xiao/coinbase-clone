import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="nav-right">
            <button className="nav-link" onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="nav-right">
            <Link className="nav-link" to="/login">Log In</Link>
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