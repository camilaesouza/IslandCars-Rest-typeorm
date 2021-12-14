import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import NewUser from './pages/NewUser';
import Home from './pages/home';
import NewCar from './pages/NewCar';
import ShowCar from './pages/ShowCar';
import EditCar from './pages/EditCar';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Criar usuário" component={NewUser} />
          <Stack.Screen name="Island Cars" component={Home} />
          <Stack.Screen name="Visualizar" component={ShowCar} />
          <Stack.Screen name="Criar novo" component={NewCar} />
          <Stack.Screen name="Editar" component={EditCar} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}