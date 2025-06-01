import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserProfile from './screens/UserProfile';
import UserCreate from './screens/UserCreate';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserProfile">
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ title: 'Detalhes do Usuário' }} />
        <Stack.Screen name="UserCreate" component={UserCreate} options={{ title: 'Criar Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;