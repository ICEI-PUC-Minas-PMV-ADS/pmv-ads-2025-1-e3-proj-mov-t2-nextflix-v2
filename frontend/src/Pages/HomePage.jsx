import '../styles/HomePage.css';
import React from 'react';

const categorias = ['Ação', 'Comédia', 'Drama'];

const recomendados = [
  { id: '1', titulo: 'Filme 1', rating: 4 },
  { id: '2', titulo: 'Filme 2', rating: 5 },
];

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="header">Home</h1>

      <input
        type="text"
        placeholder="Buscar filmes e séries..."
        className="searchInput"
      />

      <h2 className="sectionTitle">Categorias</h2>
      <div className="categoriaContainer">
        {categorias.map((cat) => (
          <button key={cat} className="categoriaBtn">
            {cat}
          </button>
        ))}
      </div>

      <h2 className="sectionTitle">Recomendados para você</h2>
      <div className="recomendadosList">
        {recomendados.map((item) => (
          <div key={item.id} className="card">
            <div className="posterPlaceholder" />
            <div className="cardTitle">{item.titulo}</div>
            <div>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
