import './Navbar.css'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1 className="h1-navbar">Newspaper</h1>
                <Link to="/">Home</Link>
                <Link to="/registernews">Registrar Noticia</Link>
                <div className="navbar-div-search">
                    <Box
                        sx={{
                            py: 2,
                            display: 'grid',
                            gap: 2,
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}
                        >
                        <Input placeholder="Buscar"  variant="solid" className='navbar-input-search' />
                    </Box>
                </div>
                
            </nav>
        </div>
    )
};
export default Navbar;