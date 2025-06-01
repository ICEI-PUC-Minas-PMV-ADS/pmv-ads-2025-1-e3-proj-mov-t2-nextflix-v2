import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Login from './screens/Login';
import ResetSenha from './screens/ResetSenha';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login'); // 'login' ou 'reset'

  return (
    <View style={{ flex: 1 }}>
      {telaAtual === 'login' ? <Login /> : <ResetSenha />}
      <Button
        title={telaAtual === 'login' ? 'Ir para Reset de Senha' : 'Voltar para Login'}
        onPress={() => setTelaAtual(telaAtual === 'login' ? 'reset' : 'login')}
      />
    </View>
  );
}
