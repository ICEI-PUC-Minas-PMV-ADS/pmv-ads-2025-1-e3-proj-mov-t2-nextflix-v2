import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import UserProfile from './screens/UserProfile';
import UserCreate from './screens/UserCreate';
import Filtro from './screens/Filtro';
import Login from './screens/Login';
import ResetSenha from './screens/ResetSenha';
import Home from './screens/Home';  // Importa a Home do time

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <SafeAreaProvider>
    <PaperProvider
        settings={{
        icon: (props) => <Icon {...props} />,
    }}> 
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
          </Stack.Navigator>
        </NavigationContainer>
    </PaperProvider>
  </SafeAreaProvider>
  );
}
