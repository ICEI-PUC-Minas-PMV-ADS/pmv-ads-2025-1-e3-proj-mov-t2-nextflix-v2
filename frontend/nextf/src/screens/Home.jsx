import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categorias = ['Ação', 'Comédia', 'Drama'];
  const categoryIds = {
    Ação: 28,
    Comédia: 35,
    Drama: 18,
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const params = {
          api_key: 'c0f300a4f387cdcb4f6e7e88028a072a',
          language: 'pt-BR',
          sort_by: 'popularity.desc',
        };

        if (selectedCategory) {
          params.with_genres = categoryIds[selectedCategory];
        }

        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          { params }
        );

        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error.response?.data || error.message);
      }
    };

    fetchMovies();
  }, [selectedCategory]);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchQuery, movies]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.round(rating / 2);
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Filmes Recomendados</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar filmes..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.categories}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.activeCategoryButton,
            ]}
            onPress={() =>
              setSelectedCategory(selectedCategory === cat ? '' : cat)
            }
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.movieGrid}>
        {filteredMovies.map((movie) => (
          <View key={movie.id} style={styles.movieCard}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text>{renderStars(movie.vote_average)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  categoryButton: {
    backgroundColor: '#ddd',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    margin: 4,
  },
  activeCategoryButton: {
    backgroundColor: '#007bff',
  },
  categoryText: {
    color: '#000',
  },
  movieGrid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  movieCard: {
    width: 150,
    marginBottom: 20,
    alignItems: 'center',
  },
  poster: {
    width: 130,
    height: 190,
    borderRadius: 8,
    marginBottom: 8,
  },
  movieTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Home;
