import './Navbar.css'
import { Link } from 'react-router-dom';
import React from 'react';


const Navbar = () => {

    return (
        <div>
            <nav>
                <h1 className="h1-navbar">Newspaper</h1>
                <Link className='navbar-link' to="/">Home</Link>
                <Link className='navbar-link' to="/registernews">Registrar Noticia</Link>
                <div className="div-search-navbar">
                    <input type="text" className="input-search-navbar" placeholder="Search"/>
                </div>
                
            </nav>
        </div>
    )
};
export default Navbar;