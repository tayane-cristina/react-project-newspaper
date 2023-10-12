import './Home.css';

const Home = ({loading, error, items, handleRemove}) => {
    return (
        <div>
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
        </div>
    )
};
export default Home;