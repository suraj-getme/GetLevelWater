import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Lazy load screens
const MainDashBoard = React.lazy(() => import('../Components/MainScreens/DashboardScreen'));
const Card1 = React.lazy(() => import('../Components/SingleScreens/CardOne'));
const Card2 = React.lazy(() => import('../Components/SingleScreens/CardTwo'));
const Card3 = React.lazy(() => import('../Components/SingleScreens/CardThree'));
const Card4 = React.lazy(() => import('../Components/SingleScreens/CardFour'));
const Card5 = React.lazy(() => import('../Components/SingleScreens/CardFive'));
const Card6 = React.lazy(() => import('../Components/SingleScreens/CardSix'));
const Header = React.lazy(() => import('../Components/MainScreens/Header'));
const Wave = React.lazy(() => import('../Components/MainScreens/Wave'));

const Stack = createStackNavigator();

const MainDashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainDashBoard} />
      <Stack.Screen name="Card1" component={Card1} />
      <Stack.Screen name="Card2" component={Card2} />
      <Stack.Screen name="Card3" component={Card3} />
      <Stack.Screen name="Card4" component={Card4} />
      <Stack.Screen name="Card5" component={Card5} />
      <Stack.Screen name="Card6" component={Card6} />
      <Stack.Screen name="Wave" component={Wave} />
      <Stack.Screen name="Header" component={Header} />
    </Stack.Navigator>
  );
};

export default MainDashboardStack;
