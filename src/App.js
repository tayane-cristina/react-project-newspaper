import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState} from 'react'
import './App.css';
import { useFetch } from './hooks/useFetch';
import Home from './pages/Home';
import RegisterNews from './pages/RegisterNews';
import Navbar from './components/Navbar';
import SeeMore from './pages/SeeMore';

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
const [img, setImg] = useState("")

//LIMPANDO OS INPUTS:
const clean = () => {
  setTitle('')
  setText('')
  setJournalist('')
  setNewsData('')
  setTime('')
  setImg('')
};

//ADICIONANDO DADOS:
const addNewsData = async (e) => {
e.preventDefault()

  const news = {
    img,
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home 
          handleRemove={handleRemove} 
          items={items} 
          loading={loading}
          error={error}
          img={img}
          />}
          >
          </Route>
          <Route path='/registernews' element={<RegisterNews 
          addNewsData={addNewsData} 
          title={title}
          setTitle={setTitle} 
          text={text} 
          setText={setText} 
          journalist={journalist}
          setJournalist={setJournalist} 
          newsData={newsData} 
          setNewsData={setNewsData} 
          time={time} 
          setTime={setTime} 
          loading={loading}
          img={img}
          setImg={setImg}/>}
          >
          </Route>
        <Route path='/seemore/:id' element={<SeeMore />}></Route>
        </Routes>
      </BrowserRouter>
      
    
      
    </div>
  );
}

export default App;
