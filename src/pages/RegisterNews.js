import './RegisterNews.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RegisterNews = ({addNewsData, title, setTitle, text, setText, journalist, setJournalist, newsData, setNewsData, time, setTime, loading}) => {
    return (
        <div className='div-registerNews'>
          <Box
            component="form"
            onSubmit={addNewsData}
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                  required
                  id="outlined-required"
                  label="Autor"
                  defaultValue="Hello World"
                  className='form-author'
                  name="journalist"
                            value={journalist}
                            onChange={(e) => setJournalist(e.target.value)} 
                />
                <TextField
                  required
                  id="outlined-required"
                  defaultValue="Data"
                  type="date"
                  name="newsData"
                  value={newsData}
                  onChange={(e) => setNewsData(e.target.value)}
                  className='form-data' 
                />
            </div>
            <Box
            sx={{
              width: 100,
              maxWidth: '100%',
            }}
            >
            <TextField 
                fullWidth label="Título"
                required 
                id="fullWidth" 
                className='form-title' 
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}  />
            </Box>
            <label>
              <textarea
                className='form-text' 
                rows="30" 
                cols="120"
                placeholder="Digite seu texto aqui..."
                type="text"
                value={text}
                name="text"
                onChange={(e) => setText(e.target.value)} 
                >
              </textarea>
            </label>
            {loading && <button className="form-button" type='submit' disabled value="Aguarde">Enviar Notícia</button>}
            {!loading &&  <Button variant="contained" className="form-button" type='submit'>Enviar</Button>}
          </Box>
        </div>
    )
};
export default RegisterNews;