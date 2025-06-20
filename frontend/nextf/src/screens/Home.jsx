import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView, //Importar SafeAreaView para melhor compatibilidade
  KeyboardAvoidingView,
} from 'react-native';
import { Provider as PaperProvider, IconButton,} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

import Filtro from './Filtro'

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFiltro, setShowFiltro] = useState(false);
  const [filtros, setFiltros] = useState(null);
  const [movieDurations, setMovieDurations] = useState({});

  const categorias = ['Ação', 'Comédia', 'Drama'];
  const categoryIds = {
    acao: 28,
    comedia: 35,
    drama: 18,
  };

  const handleLogout = () => {
    Alert.alert(
      "Sair",
      "Tem certeza que deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          onPress: () => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          },
          style: 'destructive'
        }
      ]
    );
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
              // Busca duração de cada filme (com cache)
                const moviesWithDurations = await Promise.all(
                  response.data.results.map(async (movie) => {
                    if (movieDurations[movie.id]) {
                      return { ...movie, runtime: movieDurations[movie.id] };
                    }

                    try {
                      const details = await axios.get(
                        `https://api.themoviedb.org/3/movie/${movie.id}`,
                        {
                          params: {
                            api_key: 'c0f300a4f387cdcb4f6e7e88028a072a',
                            language: 'pt-BR',
                          },
                        }
                      );
                      const runtime = details.data.runtime || 0;
                      setMovieDurations((prev) => ({
                        ...prev,
                        [movie.id]: runtime,
                      }));
                      return { ...movie, runtime };
                    } catch {
                      return { ...movie, runtime: 0 };
                    }
                  })
                );

                setMovies(moviesWithDurations);
                setFilteredMovies(moviesWithDurations);
              } catch (error) {
                console.error('Erro ao buscar filmes:', error.message);
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

  useEffect(() => {
    if (!filtros || typeof filtros !== 'object') return;

    try {
      console.log('Filtros recebidos:', filtros);
      console.log(movies);
      console.log('Filtros recebidos:', filtros);
      console.log('Antes dos filtros: ', movies.length);
      console.log('Tipos =>', {
        avaliacao: typeof filtros.avaliacao,
        dataInicio: filtros.dataInicio,
        dataFim: filtros.dataFim,
      });

      let resultados = movies.filter(movie => !!movie.release_date);

      // Filtro por gênero
      if (filtros.genero) {
        const generoKey = filtros.genero.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const generoId = categoryIds[generoKey];
        if (generoId) {
          resultados = resultados.filter(movie => movie.genre_ids.includes(generoId));
        }
      }

      // Filtro por avaliação mínima
      if (filtros.avaliacao) {
        const avaliacao = parseFloat(filtros.avaliacao.toString().replace(/[^\d.]/g, ''));
        if (!isNaN(avaliacao)) {
          resultados = resultados.filter(
            movie =>
              typeof movie.vote_average === 'number' &&
              (movie.vote_average / 2) >= avaliacao
          );
        }
      }

      // Filtro por data de lançamento (com normalização das datas)
      if (filtros.dataInicio) {
        const inicio = new Date(filtros.dataInicio);
        inicio.setHours(0, 0, 0, 0);
        resultados = resultados.filter(movie => {
          const movieDate = new Date(movie.release_date);
          movieDate.setHours(0, 0, 0, 0);
          return movieDate >= inicio;
        });
      }

      if (filtros.dataFim) {
        const fim = new Date(filtros.dataFim);
        fim.setHours(23, 59, 59, 999);
        resultados = resultados.filter(movie => {
          const movieDate = new Date(movie.release_date);
          movieDate.setHours(0, 0, 0, 0);
          return movieDate <= fim;
        });
      }

       if (filtros.duracao) {
               resultados = resultados.filter((movie) => {
                 const duracao = movie.runtime || 0;
                 if (filtros.duracao === '-90') return duracao < 90;
                 if (filtros.duracao === '90') return duracao >= 90 && duracao <= 120;
                 if (filtros.duracao === '120') return duracao >= 120 && duracao <= 150;
                 if (filtros.duracao === '150') return duracao >= 150 && duracao <= 180;
                 if (filtros.duracao === '180+') return duracao > 180;
                 return true;
               });
       }

      // Ordenação
      switch (filtros.ordem) {
        case '1': // Nome
          resultados.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case '2': // Avaliação
          resultados.sort((a, b) => b.vote_average - a.vote_average);
          break;
        case '3': // Lançamento
          resultados.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
          break;
        case '4': // Duração
          resultados.sort((a, b) => (a.runtime || 0) - (b.runtime || 0));
          break;
      }

      console.log('Filmes após filtros:', resultados.length);
      setFilteredMovies(resultados);
    } catch (err) {
      console.error('Erro ao aplicar filtros:', err);
    }
  }, [filtros, movies]);



  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.round(rating / 2);
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  // MUDANÇA PRINCIPAL: O retorno agora usa uma View principal e o ScrollView fica dentro dela.
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* O cabeçalho agora está FORA do conteúdo que rola */}
      <View style={styles.header}>
        <Text style={styles.title}>Filmes Recomendados</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Apenas o conteúdo abaixo do cabeçalho pode rolar */}
      <ScrollView>
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar filmes..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <IconButton
            mode="contained"
            icon="filter-menu-outline"
            iconColor="#1B1F3B"
            rippleColor="#1B1F3B"
            size={20}
            onPress={() =>
               setShowFiltro(true)}
               style={styles.filterButton}/>
        </View>

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
      {showFiltro && (
        <View style={styles.overlay}>
            <Filtro
            onClose={() => setShowFiltro(false)}
            onApply={(f) => {
                setFiltros(f);
                setShowFiltro(false);
                }}
            />
        </View>
      )}
    </SafeAreaView>
  );
};

// ESTILOS ATUALIZADOS
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#E50914',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  movieCard: {
    width: '45%', // Usar porcentagem para melhor ajuste
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
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
  },
  filterButton: {
    marginLeft: 8,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 10,
    padding: 16,
    elevation: 10,
  },
  modal: {
          backgroundColor: '#fff',
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 12,
      },
});

export default Home;
