import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home';

const Drawer = createDrawerNavigator()

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName = 'Home'>
      <Drawer.Screen name= 'Home' component = { Home } />
    </Drawer.Navigator>
  </NavigationContainer> 
)

export default App
