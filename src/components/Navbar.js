import { HiSearch } from "react-icons/hi";
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1 className="h1-navbar">Newspaper</h1>
                <Link to="/">Home</Link>
                <Link to="/registernews">Registrar Noticia</Link>
                <div className="navbar-div-search">
                    <input type="text" placeholder='Buscar'className='navbar-input-search'></input>
                    <button className='navbar-button-search' type='button'><HiSearch /></button>
                </div>
                
            </nav>
        </div>
    )
};
export default Navbar;