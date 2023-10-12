import { useState} from 'react'
import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  
const url = "http://localhost:3000/news" 

//CUSTOM HOOKS PARA RESGATAR OS DADOS:
const { data: items, httpConfig, loading, error } = useFetch(url);

//STATES
const [title, setTitle] = useState("");
const [text, setText] = useState("");
const [journalist, setJournalist] = useState("");
const [time, setTime] = useState("");
const [newsData, setNewsData] = useState("");

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

  httpConfig(news, "POST")

  clean()

};

//DELETANDO DADOS:
const handleRemove = (id) => {
  httpConfig(id, "DELETE")
};

  return (
    <div className="App">
      {loading && <h2>Carregando dados...</h2>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
        {items && items.map((notice) => <li key={notice.id}>
          <h1>{notice.title}</h1>
          <p>{notice.text}</p>
          <span>{notice.journalist}</span>
          <button onClick={() => handleRemove(notice.id)}>Excluir</button>
        </li> )}
      </ul>
      )}
    
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
        {loading && <button type='submit' disabled value="Aguarde">Enviar Notícia</button>};
        {!loading &&  <button type='submit'>Enviar Notícia</button>}
       

      </form>
      
    </div>
  );
}

export default App;
