import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import UserProfile from './screens/UserProfile';
import UserCreate from './screens/UserCreate';
import Filtro from './screens/Filtro';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
       <PaperProvider>
         <Filtro />
       </PaperProvider>
     </SafeAreaProvider>
  );
};

export default App;