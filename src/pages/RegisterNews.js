import './RegisterNews.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SocialMedia from '../hooks/SocialMedia';

const RegisterNews = ({addNewsData, title, setTitle, text, setText, journalist, setJournalist, newsData, setNewsData, time, setTime, loading, img, setImg}) => {
  
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
                  className='form-author'
                  name="journalist"
                  value={journalist}
                  onChange={(e) => setJournalist(e.target.value)} 
                />
                <TextField
                  required
                  id="outlined-required"
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
            <Box
            sx={{
              width: 100,
              maxWidth: '100%',
            }}
            >
            <TextField 
                fullWidth label="Imagem"
                required 
                id="fullWidth" 
                className='form-img' 
                value={img}
                name="img"
                onChange={(e) => setImg(e.target.value)}  />
            </Box>
            <label>
              <textarea
                className='form-text' 
                rows="10" 
                cols="120"
                placeholder="Digite seu texto aqui..."
                type="text"
                value={text}
                name="text"
                onChange={(e) => setText(e.target.value)} 
                >
              </textarea>
            </label>
            {!loading &&  <Button variant="contained" className="form-button" type='submit'>Enviar</Button>}
          </Box>
          <SocialMedia />
        </div>
    )
};
export default RegisterNews;