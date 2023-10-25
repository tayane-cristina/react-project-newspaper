import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import SearchForm from './SearchForm';


const Navbar = () => {
    return (
        <div>
            <nav>
                <h1 className="h1-navbar"><Link className='h1-navbar' to='/'>Newspaper</Link></h1>
                <div className='links'>
                    <NavLink className='navbar-link' to="/">Home</NavLink>
                    <NavLink className='navbar-link' to="/registernews">Registrar Notícia</NavLink>
                </div>
                <SearchForm />
            </nav>
        </div>
    )
};
export default Navbar;