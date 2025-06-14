import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

export default function ResetSenha() {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, preencha o e-mail.');
      return;
    }

    Alert.alert('Sucesso', '🔒 Link de redefinição enviado para o e-mail (simulado).');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Redefinir Senha</Text>
        <Text style={styles.subtitle}>
          Insira seu e-mail para receber o link de redefinição:
        </Text>

        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Alert.alert('Ação simulada', 'Voltar ao login (simulado)')}
        >
          <Text style={styles.link}>← Voltar ao login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#021B79',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  box: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B1F3B',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4A4A4A', // cinza escuro
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#1B1F3B',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    color: '#000',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E50914', // vermelho
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    color: '#1B1F3B',
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

