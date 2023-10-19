import './Home.css';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import SocialMedia from '../hooks/SocialMedia';



const Home = ({loading, error, items, handleRemove, img}) => {
    return (
        <div className='div-home'>
          {loading && <h2>Carregando dados...</h2>}
          {error && <p>{error}</p>}
          {!loading && (
          <ul className='ul-home'>
            {items && items.map((notice) => 
            <li key={notice.id} className="li-home">
              <div className='img-news-home'>
                <img src={notice.img} alt='news-cover'></img>
              </div>
              <div className='body-news-home'>
                <h2 className='news-title-home'>{notice.title}</h2>
                <span>{notice.journalist}</span>
                <Link className='see-more-link-news' to={`/seemore/${notice.id}`}>Ver mais</Link>
              </div>
              <div>
                <button className='button-remove-news-home' onClick={() => handleRemove(notice.id)}><FaRegTrashAlt /></button>
              </div>
            </li> )}
          </ul>
            )}
          <SocialMedia/>
        </div>
    )
};
export default Home;