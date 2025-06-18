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
  SafeAreaView, // Importar SafeAreaView para melhor compatibilidade
} from 'react-native';
import { Provider as PaperProvider, IconButton } from 'react-native-paper';
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

  const categorias = ['Ação', 'Comédia', 'Drama'];
  const categoryIds = {
    Ação: 28,
    Comédia: 35,
    Drama: 18,
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
          <SafeAreaProvider>
            <PaperProvider
              settings={{
                  icon: (props) => <MaterialCommunityIcons {...props} />,
                }}
            >
              <Filtro onClose={() => setShowFiltro(false)}/>
            </PaperProvider>
          </SafeAreaProvider>
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
  },
});

export default Home;
