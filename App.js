// In App.js in a new project

import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Home from './src/pages/Home';
import Dados from './src/pages/Dados';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'
      screenOptions={{ 
        headerTintColor:"white", 
        headerStyle:{backgroundColor: '#0086B8'}}}
      >

        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:"Previsão do Tempo"
        }}
        />

        <Stack.Screen 
        name="Dados"
        component={Dados}
        />

        <Stack.Screen 
        name="Sobre"
        component={Sobre}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;