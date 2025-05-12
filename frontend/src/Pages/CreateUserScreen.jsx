import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, TextInput, Button, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';
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
    const favs = await AsyncStorage.getItem('@favorites');
    if (favs) setFavorites(JSON.parse(favs));
  };

  const toggleFavorite = async (movie) => {
    const exists = favorites.some(f => f.id === movie.id);
    const newFavs = exists
      ? favorites.filter(f => f.id !== movie.id)
      : [...favorites, movie];
    setFavorites(newFavs);
    await AsyncStorage.setItem('@favorites', JSON.stringify(newFavs));
  };

  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: IMAGE_BASE + item.poster_path }} style={styles.poster} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <Ionicons
                name={favorites.some(f => f.id === item.id) ? 'bookmark' : 'bookmark-outline'}
                size={24}
                color={favorites.some(f => f.id === item.id) ? 'tomato' : 'gray'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

// wishlist 
function WishlistScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadFavorites);
    return unsubscribe;
  }, [navigation]);

  const loadFavorites = async () => {
    const favs = await AsyncStorage.getItem('@favorites');
    if (favs) setFavorites(JSON.parse(favs));
  };

  const removeFavorite = async (movie) => {
    const newFavs = favorites.filter(f => f.id !== movie.id);
    setFavorites(newFavs);
    await AsyncStorage.setItem('@favorites', JSON.stringify(newFavs));
  };

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum favorito.</Text>}
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

function CreateUserScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [photoBase64, setPhotoBase64] = useState(null);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: true }, response => {
      if (response.assets && response.assets.length > 0) {
        setPhotoBase64(response.assets[0].base64);
      }
    });
  };

  const handleCreateUser = async () => {
    try {
      const user = { name, email, password, role: 'User', bio, photoBase64, following: [], followers: [], films: [], customFilmsLists: [] };
      await axios.post('http://localhost:7125/api/users', user);
      alert('Usuário criado com sucesso!');
      setName(''); setEmail(''); setPassword(''); setBio(''); setPhotoBase64(null);
    } catch (error) {
      console.error(error);
      alert('Erro ao criar usuário');
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Nome</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.input} keyboardType='email-address' />
      <Text>Senha</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Text>Bio</Text>
      <TextInput value={bio} onChangeText={setBio} style={styles.input} multiline />
      <Button title='Selecionar Foto' onPress={selectImage} />
      {photoBase64 && <Image source={{ uri: `data:image/jpeg;base64,${photoBase64}` }} style={{ width:100, height:100, marginTop:10 }} />}
      <Button title='Criar Usuário' onPress={handleCreateUser} style={{ marginTop: 20 }} />
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Wishlist') iconName = 'bookmark-outline';
          else if (route.name === 'Create') iconName = 'person-add-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Wishlist' component={WishlistScreen} />
        <Tab.Screen name='Create' component={CreateUserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', marginBottom:12, backgroundColor:'#fff', borderRadius:8, overflow:'hidden'
  },
  poster: { width:100, height:150 },
  info: { flex:1, padding:10, justifyContent:'space-between', flexDirection:'row', alignItems:'center' },
  title: { flex:1, fontSize:16, fontWeight:'bold' },
  input: { borderWidth:1, marginBottom:10, padding:8 },
});
