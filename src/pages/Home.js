import './Home.css';
import { FaRegTrashAlt } from "react-icons/fa";


const Home = ({loading, error, items, handleRemove}) => {
    return (
        <div className='div-home'>
            {loading && <h2>Carregando dados...</h2>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul className='ul-home'>
        {items && items.map((notice) => <li key={notice.id} className="li-home">
          <h1>{notice.title}</h1>
          <p>{notice.text}</p>
          <span>{notice.journalist}</span>
          <button onClick={() => handleRemove(notice.id)}><FaRegTrashAlt /></button>
        </li> )}
      </ul>
      )}
        </div>
    )
};
export default Home;