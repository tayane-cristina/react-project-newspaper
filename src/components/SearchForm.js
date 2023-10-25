import { useNavigate } from "react-router-dom";
import  { useState } from 'react'

const SearchForm = () => { 
    
    const navigate = useNavigate()
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/search?q=' + query)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="div-search-navbar">
                    <input type="text" onChange={(e) => setQuery(e.target.value)} className="input-search-navbar" placeholder="Search"/>
                    <button type='submit'>Buscar</button>
                </form>
        </div>
    )
}
export default SearchForm;