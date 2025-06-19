import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import ResetSenha from './screens/ResetSenha';
import Home from './screens/Home';  // Importa a Home do time
import UserCreate from './screens/UserCreate';
import UserProfile from './screens/UserProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetSenha"
          component={ResetSenha}
          options={{ title: 'Redefinir Senha' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
          <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'Detalhes do Usuário' }} />
          <Stack.Screen name="UserCreate" component={UserCreate} options={{ title: 'Criar Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
