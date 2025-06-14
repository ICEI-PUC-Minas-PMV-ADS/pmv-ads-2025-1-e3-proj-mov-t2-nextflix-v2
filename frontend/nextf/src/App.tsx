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

const Stack = createNativeStackNavigator();

const App = () => {

  //console.log('Filtro é:', Filtro);

  return (
    <SafeAreaProvider>
       <PaperProvider
        settings={{
           icon: (props) => <Icon {...props} />,
           }}>
           <NavigationContainer>
               <Stack.Navigator initialRouteName="UserProfile">
                  <Stack.Screen
                     name="UserProfile"
                     component={UserProfile}
                     options={{ title: 'Detalhes do Usuário' }}
                    />
                  <Stack.Screen
                     name="UserCreate"
                     component={UserCreate}
                     options={{ title: 'Criar Usuário' }}
                   />
                  <Stack.Screen
                     name="Filtro"
                     component={Filtro}
                     options={{ title: 'Filtrar Filmes' }}
                   />
               </Stack.Navigator>
           </NavigationContainer>
       </PaperProvider>
     </SafeAreaProvider>
  );
};

export default App;