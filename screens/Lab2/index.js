import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import StudentCardContainer from '../containers/StudentCardContainer'
import LayoutsContainer from '../containers/LayoutsContainer'

const Lab2Stack = createStackNavigator()

const Lab2 = () => (
    <Lab2Stack.Navigator
        screenOptions={{
        'headerShown': false,
        initialRouteName: 'StudentCardContainer'
        }}
    >
        <Lab2Stack.Screen name='StudentCardContainer' component={ StudentCardContainer } />
        <Lab2Stack.Screen name='LayoutsContainer' component={ LayoutsContainer } />
    </Lab2Stack.Navigator>
)

export default Lab2