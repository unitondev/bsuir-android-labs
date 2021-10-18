import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './screens/Home'
import Lab2 from './screens/Lab2'

const Drawer = createDrawerNavigator()

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName = 'Home'>
      <Drawer.Screen name='Home' component={ Home } />
      <Drawer.Screen name='Lab2' component={ Lab2 } />
    </Drawer.Navigator>
  </NavigationContainer> 
)

export default App
