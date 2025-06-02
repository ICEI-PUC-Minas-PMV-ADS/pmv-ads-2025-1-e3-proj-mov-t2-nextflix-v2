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

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha o e-mail e a senha.');
      return;
    }

    setLoading(true);
    try {
      // Simulação de login (substitua por API real depois)
      await new Promise(resolve => setTimeout(resolve, 1500));

      Alert.alert('Sucesso', '✅ Login simulado com sucesso!');
    } catch (error) {
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Entrar no NextFlix</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry={!mostrarSenha}
            style={[styles.input, { flex: 1 }]}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity
            onPress={() => setMostrarSenha(!mostrarSenha)}
            style={styles.toggleButton}
          >
            <Text style={{ color: '#1B1F3B', fontWeight: '600' }}>
              {mostrarSenha ? 'Ocultar' : 'Mostrar'}
            </Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#E50914" />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Alert.alert('Cadastro', 'Simulação de redirecionamento para cadastro.')
              }
            >
              <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Alert.alert('Recuperação', 'Simulação de redirecionamento para reset de senha.')
              }
            >
              <Text style={styles.link}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#021B79', // azul da paleta
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleButton: {
    marginLeft: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#E50914', // vermelho
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  link: {
    color: '#1B1F3B',
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
