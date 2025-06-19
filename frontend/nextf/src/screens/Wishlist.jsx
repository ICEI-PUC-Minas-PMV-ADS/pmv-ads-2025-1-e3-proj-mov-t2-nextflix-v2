import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const API_KEY = '6f1a18a5f788f29024af558c355c8481';
const TMDB_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

function HomeScreen() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchMovies();
    loadFavorites();
  }, []);

  const fetchMovies = async () => {
    try {
      const res = await axios.get(TMDB_URL);
      setMovies(res.data.results);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
    }
  };

  const loadFavorites = async () => {
    try {
      const favs = await AsyncStorage.getItem('@favorites');
      if (favs) setFavorites(JSON.parse(favs));
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  const toggleFavorite = async (movie) => {
    let newFavs = [];
    if (favorites.some(f => f.id === movie.id)) {
      newFavs = favorites.filter(f => f.id !== movie.id);
    } else {
      newFavs = [...favorites, movie];
    }
    setFavorites(newFavs);
    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavs));
    } catch (error) {
      console.error('Erro ao salvar favoritos:', error);
    }
  };

  const isFavorite = (movie) => favorites.some(f => f.id === movie.id);

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: IMAGE_BASE + item.poster_path }} style={styles.poster} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <Ionicons
                name={isFavorite(item) ? 'bookmark' : 'bookmark-outline'}
                size={24}
                color={isFavorite(item) ? 'tomato' : 'gray'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

function WishlistScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavorites();
    });
    return unsubscribe;
  }, [navigation]);

  const loadFavorites = async () => {
    try {
      const favs = await AsyncStorage.getItem('@favorites');
      if (favs) setFavorites(JSON.parse(favs));
    } catch (error) {
      console.error('Erro ao carregar favoritos:', error);
    }
  };

  const removeFavorite = async (movie) => {
    const newFavs = favorites.filter(f => f.id !== movie.id);
    setFavorites(newFavs);
    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(newFavs));
    } catch (error) {
      console.error('Erro ao atualizar favoritos:', error);
    }
  };

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum favorito ainda.</Text>}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: IMAGE_BASE + item.poster_path }} style={styles.poster} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => removeFavorite(item)}>
              <Ionicons name='bookmark-remove' size={24} color='gray' />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home-outline';
            else if (route.name === 'Wishlist') iconName = 'bookmark-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wishlist" component={WishlistScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  poster: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

// npm install @react-navigation/native @react-navigation/bottom-tabs @react-native-async-storage/async-storage axios @expo/vector-icons
// npx expo install react-native-screens react-native-safe-area-context
