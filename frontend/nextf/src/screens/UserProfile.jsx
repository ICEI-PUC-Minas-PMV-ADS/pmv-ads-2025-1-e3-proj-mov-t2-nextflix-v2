import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserDetails = () => {
  const navigation = useNavigation();

  // Exemplo de dados do usuário (substitua conforme necessário)
  const user = {
    name: 'Usuário 1',
    email: 'user@user.com',
    phone: '(00) 12345-6789',
    bio: 'O Senhor dos Anéis é o melhor filme do mundo',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>

      <Text style={styles.label}>Nome</Text>
      <Text style={styles.value}>{user.name}</Text>

      <Text style={styles.label}>Email</Text>
      <Text style={styles.value}>{user.email}</Text>

      <Text style={styles.label}>Telefone</Text>
      <Text style={styles.value}>{user.phone}</Text>

      <Text style={styles.label}>Bio</Text>
      <Text style={styles.value}>{user.bio}</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#1B1F3B' }]}
        onPress={() => navigation.navigate('UserCreate')}
      >
        <Text style={styles.buttonText}>Editar Cadastro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B1F3B',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
    marginTop: 12,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1B1F3B',
  },
  button: {
    marginTop: 30,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default UserDetails;
