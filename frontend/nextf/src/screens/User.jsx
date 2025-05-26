import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import api from '../services/api';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const userId = 1; // ou pegue de login/contexto

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user.photoBase64 && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${user.photoBase64}` }}
          style={styles.avatar}
        />
      )}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <Text style={styles.bio}>{user.bio}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Seguir" color="#007bff" onPress={() => alert('Seguindo...')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});

export default UserProfile;
