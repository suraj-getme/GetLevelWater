import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import ProfileScreen5 from '../screens/profilescreens/ProfileScreen5';

// Lazy load profile-related screens
const ProfileScreen = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen'));
const ProfileScreen2 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen2'));
const ProfileScreen3 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen3'));
const ProfileScreen4 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen4'));
const ProfileScreen5 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen5'));


const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Profile2" component={ProfileScreen2} />
      <Stack.Screen name="Profile3" component={ProfileScreen3} />
      <Stack.Screen name="Profile4" component={ProfileScreen4} />
      <Stack.Screen name="Profile5" component={ProfileScreen5}/>
   
    </Stack.Navigator>
  );
};

export default ProfileStack;
