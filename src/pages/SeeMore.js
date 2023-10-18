import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SeeMore = () => {

    const { id, text } = useParams()

    const url = "http://localhost:3000/news/" + id 

    const {data: news, loading, error} = useFetch(url) 
    console.log(news)

    return (
        <div>
            <h1>See More</h1>
            <p>Está página tem detalhes sobre a notícia número {id}</p>
            <p>{text}</p>
        </div>
    )

};
export default SeeMore;