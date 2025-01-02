import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginStack from './src/Navigation/LoginStack'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <LoginStack/>
    </NavigationContainer>
  )
}

export default App