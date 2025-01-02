// // import React from 'react';
// // import { createStackNavigator } from '@react-navigation/stack';

// // // Lazy loading authentication-related screens
// // const LoginScreen = React.lazy(() => import('../screens/AuthenticationScreens/LoginScreen'));
// // const RegistrationScreen = React.lazy(() => import('../screens/AuthenticationScreens/RegistrationScreen'));
// // const EmailVerificationScreen = React.lazy(() => import('../screens/AuthenticationScreens/EmailVerification'));
// // const Homescreen = React.lazy(() => import('../screens/HomeScreen'));
// // const ins = React.lazy(() => import('../screens/ins'));

// // const Stack = createStackNavigator();

// // const LoginStack = () => {
// //   return (
// //     <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
// //       <Stack.Screen name="Login" component={LoginScreen} />
// //       <Stack.Screen name="EmailVerify" component={EmailVerificationScreen} />
// //       <Stack.Screen name="Registration" component={RegistrationScreen} />
// //       <Stack.Screen name="-ins" component={ins} />
// //       <Stack.Screen name="Home" component={Homescreen} options={{ headerShown: false }} />
// //     </Stack.Navigator>
// //   );
// // };

// // export default LoginStack;

import {createStackNavigator} from '@react-navigation/stack';
import React, { Suspense } from 'react';
import LoginScreen from '../Components/LoginScreens/LoginScreen';
import EmailVerificationScreen from '../Components/LoginScreens/EmailVerification';
import Card1 from '../Components/SingleScreens/CardOne';
import Card2 from '../Components/SingleScreens/CardTwo';
import Card3 from '../Components/SingleScreens/CardThree';
import Card4 from '../Components/SingleScreens/CardFour';
import Card5 from '../Components/SingleScreens/CardFive';
import Card6 from '../Components/SingleScreens/CardSix';
import Wave from '../Components/MainScreens/Wave';
import Header from '../Components/MainScreens/Header';
import Graph1 from '../Components/GraphScreens/GraphInMinuteScreen';
import WhoAmI from '../Components/LoginScreens/WhoAmI';
import NewUserScreen from '../Components/LoginScreens/NewUserScreen';
import Dashboard from '../Components/MainScreens/DashboardScreen';
import FlipCardTwo from '../MiniComponent/FlipCardTwo';
import FlipCards from '../MiniComponent/FlipCard';
import { NoInternetScreen } from '../Components/LoginScreens/NoInternetScreen';
import { WifiOffIcon } from '../MiniComponent/WifiOffIcon';
import { RetryButton } from '../MiniComponent/RetryButton';



// Lazy loading profile screens
const ProfileScreen = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen'));
const ProfileScreen2 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen2'));
const ProfileScreen3 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen3'));
const ProfileScreen4 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen4'));
const ProfileScreen5 = React.lazy(() => import('../Components/ProfileScreens/ProfileScreen5'))

const Stack = createStackNavigator();

const LoginStack = ({navigation}) => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Stack.Navigator initialRouteName="WhoAmI" screenOptions={{headerShown: false}}>
          <Stack.Screen name="WhoAmI" component={WhoAmI}/>
          {/* Login Screen */}
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="EmailVerify" component={EmailVerificationScreen} />
          {/* Registration Screen */}
          <Stack.Screen name="Registration" component={NewUserScreen}/>
          {/* Dashboard Screen (optional) */}
          <Stack.Screen name="Card1" component={Card1}/>
          <Stack.Screen name="Card2" component={Card2}/>
          <Stack.Screen name="Card3" component={Card3}/>
          <Stack.Screen name="Card4" component={Card4}/>
          <Stack.Screen name="Card5" component={Card5}/>
          <Stack.Screen name="Card6" component={Card6}/>
          <Stack.Screen name="Wave" component={Wave} size={250} progress={20} space={15}/>
          <Stack.Screen name="Profile" component={ProfileScreen}/>
          <Stack.Screen name="Profile2" component={ProfileScreen2}/>
          <Stack.Screen name="Profile3" component={ProfileScreen3}/>
          <Stack.Screen name="Profile4" component={ProfileScreen4}/>
          <Stack.Screen name="Profile5" component={ProfileScreen5}/>
          <Stack.Screen name="Header" component={Header}/>
          <Stack.Screen name="MainScreen" component={Dashboard}/>
          <Stack.Screen name="Graph1" component={Graph1}/>
          <Stack.Screen name="FlipCard" component={FlipCards}/>
          <Stack.Screen name="FlipCardTwo" component={FlipCardTwo}/>
          <Stack.Screen name="NoInternetScreen" component={NoInternetScreen}/>
          <Stack.Screen name="WifiOffIcon" component={WifiOffIcon}/>
          <Stack.Screen name='RetryButton' component={RetryButton}/>
        </Stack.Navigator>
      </Suspense>
    );
};

export default LoginStack;




