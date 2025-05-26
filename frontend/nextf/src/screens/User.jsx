import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList, Alert } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      console.log('Iniciando fetch...');
      const response = await fetch('http://192.168.18.5:5075/api/users');
      console.log('Resposta status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Dados recebidos:', data);
        setUsers(data);
        Alert.alert('Sucesso', `✅ Requisição bem-sucedida! Código de status: ${response.status}`);
      } else {
        Alert.alert('Erro', `❌ Erro ao buscar usuários. Código de status: ${response.status}`);
      }
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderUser = ({ item }) => (
    <View style={styles.userCard}>
      <Text style={styles.userText}><Text style={styles.bold}>Nome:</Text> {item.name}</Text>
      <Text style={styles.userText}><Text style={styles.bold}>Email:</Text> {item.email ?? 'Não informado'}</Text>
      <Text style={styles.userText}><Text style={styles.bold}>Bio:</Text> {item.bio ?? 'Sem bio'}</Text>
      <Text style={styles.userText}><Text style={styles.bold}>Role:</Text> {item.role ?? 'Sem função'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={fetchUsers} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Buscar Usuários'}</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={item => item.userId.toString()}
          renderItem={renderUser}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  userCard: {
    backgroundColor: '#f0f8ff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  userText: {
    fontSize: 16,
    marginBottom: 6,
  },
  bold: {
    fontWeight: '700',
  },
});
