import { useState, useEffect} from 'react'
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  
const url = "http://localhost:3000/news" 

//CUSTOM HOOKS PARA RESGATAR OS DADOS:
const { data: items, httpConfig } = useFetch(url);

//STATES
const [news, setNews] = useState([]);


const [title, setTitle] = useState("")
const [text, setText] = useState("")
const [journalist, setJournalist] = useState("")
const [time, setTime] = useState("")
const [newsData, setNewsData] = useState("")

//LIMPANDO OS INPUTS:
const clean = () => {
  setTitle('')
  setText('')
  setJournalist('')
  setNewsData('')
  setTime('')
};

//ADICIONANDO DADOS:
const addNewsData = async (e) => {
e.preventDefault()

  const news = {

    title,
    text,
    journalist,
    newsData,
    time,
  };

  const res = await fetch(url , {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(news)

  })

  const addNews = await res.json()

  setNews((previousNews) => [...previousNews, addNews])
  clean()

}

  return (
    <div className="App">
      <ul>
        {items && items.map((notice) => <li key={notice.id}>
          <h1>{notice.title}</h1>
          <p>{notice.text}</p>
          <span>{notice.journalist}</span>
        </li> )}
      </ul>

      <form onSubmit={addNewsData}>

        <label>Título:
          <input 
          type="title"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)} 
          >
          </input>
        </label>

        <label>Texto:
          <input 
          type="text"
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)} 
          >
          </input>
        </label>

        <label>Autor:
          <input 
          type="text"
          name="journalist"
          value={journalist}
          onChange={(e) => setJournalist(e.target.value)} 
          >
          </input>
        </label>

        <label>Data:
          <input 
          type="text"
          name="newsData"
          value={newsData}
          onChange={(e) => setNewsData(e.target.value)} 
          >
          </input>
        </label>

        <label>Hora:
          <input 
          type="text"
          name='time'
          value={time}
          onChange={(e) => setTime(e.target.value)} 
          >
          </input>
        </label>
        <button type='submit'>Enviar Notícia</button>

      </form>
      
    </div>
  );
}

export default App;
