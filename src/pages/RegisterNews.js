import './RegisterNews.css';

const RegisterNews = ({addNewsData, title, setTitle, text, setText, journalist, setJournalist, newsData, setNewsData, time, setTime, loading}) => {
    return (
        <div className='div-registerNews'>
          <form onSubmit={addNewsData}>
            <div className='preliminary-information'>
              <label>Autor
                  <input 
                    className='form-author'
                    type="text"
                    name="journalist"
                    value={journalist}
                    onChange={(e) => setJournalist(e.target.value)} 
                    >
                  </input>
                </label>

                <label>Data
                  <input 
                    className='form-data'
                    type="date"
                    name="newsData"
                    value={newsData}
                    onChange={(e) => setNewsData(e.target.value)} 
                    >
                  </input>
                </label>
            </div>

            <label>Título
              <input 
                className='form-title'
                type="title"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)} 
                >
              </input>
            </label>

            <label>
              <textarea
                className='form-text' 
                rows="30" 
                cols="180"
                placeholder="Digite seu texto aqui..."
                type="text"
                value={text}
                name="text"
                onChange={(e) => setText(e.target.value)} 
                >
              </textarea>
            </label>
        
            {loading && <button className="form-button" type='submit' disabled value="Aguarde">Enviar Notícia</button>}
            {!loading &&  <button className="form-button" type='submit'>Enviar Notícia</button>}
          </form>
        </div>
    )
};
export default RegisterNews;