import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Error.css'

const Error = () => {
    return (
        <main className="error-container">
            <nav className="header"><h1>Rancid Tomatillos</h1></nav>
            <h1 className="error">Something went wrong</h1>
            <Link to='/'>
                <button type='button'>Back to Main</button>
            </Link>
        </main>
    )
} 

export default Error