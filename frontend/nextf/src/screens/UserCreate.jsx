import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: 'Usuário 1',
    email: 'user@user.com',
    password: '',
    role: 'User',
    bio: 'O Senhor dos Anéis é o melhor filme do mundo',
  });

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://192.168.18.5:5075/api/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        Alert.alert('Sucesso', '✅ Perfil atualizado com sucesso!');
        setEditing(false);
     } else {
       const errorText = await response.text(); // pega resposta do backend mesmo com erro
       console.log('❌ Erro ao atualizar usuário');
       console.log('Status:', response.status);
       console.log('JSON enviado:', JSON.stringify(usuarioAtualizado, null, 2));
       console.log('Resposta do backend:', errorText);

       Alert.alert(
         'Erro',
         `❌ Erro ao atualizar.\nCódigo: ${response.status}\nMensagem: ${errorText}`
       );
     }
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    Alert.alert('Confirmação', 'Tem certeza que deseja excluir seu perfil?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          setLoading(true);
          try {
            const response = await fetch(`http://192.168.18.5:5075/api/users`, {
              method: 'DELETE',
            });

            if (response.ok) {
              Alert.alert('Excluído', '✅ Seu perfil foi excluído.');
              // Redirecionar ou limpar estado
            } else {
              Alert.alert('Erro', `❌ Erro ao excluir. Código: ${response.status}`);
            }
          } catch (error) {
            Alert.alert('Erro', error.message);
          } finally {
            setLoading(false);
          }
        },
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        editable={editing}
        value={user.name}
        onChangeText={(text) => setUser({ ...user, name: text })}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        editable={editing}
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        editable={editing}
        value={user.bio}
        onChangeText={(text) => setUser({ ...user, bio: text })}
        multiline
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        editable={editing}
        value={user.password}
        onChangeText={(text) => setUser({ ...user, password: text })}
        secureTextEntry
        placeholder="Nova senha"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#E50914" />
      ) : (
        <>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#1B1F3B' }]}
            onPress={() => setEditing(!editing)}
          >
            <Text style={styles.buttonText}>{editing ? 'Cancelar Edição' : 'Editar Perfil'}</Text>
          </TouchableOpacity>

          {editing && (
            <TouchableOpacity style={[styles.button, { backgroundColor: '#E50914' }]} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar Alterações</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={[styles.button, { backgroundColor: '#333333' }]} onPress={handleDelete}>
            <Text style={[styles.buttonText, { color: '#E50914' }]}>Excluir Perfil</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}

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
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1B1F3B',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  button: {
    marginTop: 20,
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
