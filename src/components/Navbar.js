import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>Newspaper</h1>
                <Link to="/">Home</Link>
                <Link to="/registernews">Registrar Noticia</Link>
            </nav>
        </div>
    )
};
export default Navbar;