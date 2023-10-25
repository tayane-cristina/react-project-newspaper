import './SearchForm.css'
import { useNavigate } from "react-router-dom";
import  { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const SearchForm = () => { 
    
    const navigate = useNavigate()
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/search?q=' + query)
    }


    return (
        <div className="search-form-in-navbar">
            <form onSubmit={handleSubmit} className="div-search-navbar">
            <Stack spacing={2} direction="row">
                <input type="text" onChange={(e) => setQuery(e.target.value)} className="input-search-navbar" placeholder="Search"/>
                <Button variant="contained" type='submit'>Buscar</Button>
            </Stack>
                    
                </form>
        </div>
    )
}
export default SearchForm;