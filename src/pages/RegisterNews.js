import './RegisterNews.css';

const RegisterNews = ({addNewsData, title, setTitle, text, setText, journalist, setJournalist, newsData, setNewsData, time, setTime, loading}) => {
    return (
        <div>
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
{loading && <button type='submit' disabled value="Aguarde">Enviar Notícia</button>}
{!loading &&  <button type='submit'>Enviar Notícia</button>}
</form>
        </div>
    )
};
export default RegisterNews;