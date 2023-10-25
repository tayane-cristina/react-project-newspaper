import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import React from 'react';


const Navbar = () => {
    return (
        <div>
            <nav>
                <h1 className="h1-navbar"><Link className='h1-navbar' to='/'>Newspaper</Link></h1>
                <NavLink className='navbar-link' to="/">Home</NavLink>
                <NavLink className='navbar-link' to="/registernews">Registrar Notícia</NavLink>
            </nav>
        </div>
    )
};
export default Navbar;