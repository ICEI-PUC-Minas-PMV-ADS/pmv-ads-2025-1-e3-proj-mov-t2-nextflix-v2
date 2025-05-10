import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/HomePage.css';  // Importando o arquivo de estilo CSS

const HomePage = () => {
  const [movies, setMovies] = useState([]);   // Estado para armazenar filmes
  const [searchQuery, setSearchQuery] = useState('');  // Estado para a pesquisa
  const [selectedCategory, setSelectedCategory] = useState('');  // Estado para armazenar a categoria selecionada

  const categorias = ['Ação', 'Comédia', 'Drama'];

  const recomendados = [
    { id: '1', titulo: 'Filme 1', rating: 4 },
    { id: '2', titulo: 'Filme 2', rating: 5 },
  ];

  // Defina a chave da API aqui
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Substitua com a sua chave de API TMDb
  const BASE_URL = 'https://api.themoviedb.org/3'; // URL base da API TMDb

  // Função para buscar filmes com base no texto digitado na barra de pesquisa
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);  // Atualiza a pesquisa conforme o usuário digita
  };

  // Função para buscar filmes quando a categoria for alterada
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);  // Atualiza a categoria selecionada
  };

  useEffect(() => {
    if (searchQuery) {
      // Faz a requisição para buscar filmes com base na pesquisa
      axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
        .then((response) => setMovies(response.data.results));  // Atualiza a lista de filmes com base na pesquisa
    }
  }, [searchQuery]);  // Faz a busca sempre que o valor da pesquisa mudar

  return (
    <div className="container">
      <h1 className="header">Home</h1>

      {/* Barra de pesquisa */}
      <input
        type="text"
        placeholder="Buscar filmes e séries..."
        value={searchQuery}
        onChange={handleSearchChange}  // Atualiza a pesquisa enquanto digita
        className="searchInput"
      />

      {/* Seção de categorias */}
      <h2 className="sectionTitle">Categorias</h2>
      <div className="categoriaContainer">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`categoriaBtn ${selectedCategory === cat ? 'active' : ''}`}  // Estilo para a categoria ativa
            onClick={() => handleCategoryChange(cat)}  // Atualiza a categoria ao clicar
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Seção de filmes recomendados */}
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

      {/* Exibir filmes filtrados pela pesquisa */}
      <h2 className="sectionTitle">Filmes encontrados</h2>
      <div className="recomendadosList">
        {movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((movie) => (
            <div key={movie.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="cardImage"
              />
              <div className="cardTitle">{movie.title}</div>
              <div>{'★'.repeat(Math.floor(movie.vote_average / 2))}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
