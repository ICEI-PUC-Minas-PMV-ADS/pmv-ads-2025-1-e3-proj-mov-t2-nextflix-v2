import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, ScrollView } from 'react-native';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

export default function CreateUserScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [photoBase64, setPhotoBase64] = useState(null);

  const selectImage = () => {
    launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) => {
      if (response.assets && response.assets.length > 0) {
        const base64 = response.assets[0].base64;
        setPhotoBase64(base64);
      }
    });
  };

  const handleCreateUser = async () => {
    try {
      const user = {
        name,
        email,
        password,
        role: 'User',
        bio,
        photoBase64,
        following: [],
        followers: [],
        films: [],
        customFilmsLists: []
      };

      const response = await axios.post('http://localhost:7125/api/users', user);
      alert('Usuário criado com sucesso!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Erro ao criar usuário');
    }
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text>Nome</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 10 }} />
      
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Senha</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />

      <Text>Bio</Text>
      <TextInput value={bio} onChangeText={setBio} style={{ borderWidth: 1, marginBottom: 10 }} />

      <Button title="Selecionar Foto" onPress={selectImage} />
      {photoBase64 && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${photoBase64}` }}
          style={{ width: 100, height: 100, marginTop: 10 }}
        />
      )}

      <Button title="Criar Usuário" onPress={handleCreateUser} />
    </ScrollView>
  );
}