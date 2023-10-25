import './SeeMore.css'

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import SocialMedia from '../hooks/SocialMedia'
const SeeMore = () => {

    const { id } = useParams()

    const url = "http://localhost:3000/news/" + id 

    const {data: news, loading, error} = useFetch(url) 
    console.log(news)

    return (
        <div className="div-seemore-news">
            {error && <p>Falha ao carregar os dados...</p>}
            {loading && <p>Carregando os dados...</p>}
            {news && (
                <div className='div-seemore-text-infor'>
                    <img src={news.img} alt="Descrição de imagem"></img>
                    <h2>{news.title}</h2>
                    <div className="infor-about-infor">
                        <span><strong>{news.journalist}</strong></span>
                        <span>{news.newsData}</span>
                    </div>
                    <p className='text-news'>{news.text}</p>
                </div>
            ) } 
            <SocialMedia />
        </div>
    )

};
export default SeeMore;