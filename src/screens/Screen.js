// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// export default function SettingsScreen({ route, navigation }) {
//   const [goal, setGoal] = useState(route.params?.goal.toString() || '2000');

//   const saveGoal = () => {
//     const newGoal = parseInt(goal);
//     if (newGoal > 0) {
//       navigation.navigate('Home', { goal: newGoal });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Settings</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Daily Water Goal (ml):</Text>
//         <TextInput
//           style={styles.input}
//           keyboardType="numeric"
//           value={goal}
//           onChangeText={setGoal}
//         />
//       </View>
//       <TouchableOpacity style={styles.saveButton} onPress={saveGoal}>
//         <Text style={styles.saveButtonText}>Save</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F0F0F0',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: '#FFF',
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 18,
//   },
//   saveButton: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   saveButtonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
// // ======================================================================================

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';
// import { useNavigation } from '@react-navigation/native';
// import { Feather } from '@expo/vector-icons';

// export default function HomeScreen() {
//   const [waterIntake, setWaterIntake] = useState(0);
//   const [goal, setGoal] = useState(2000); // Default goal: 2000ml
//   const navigation = useNavigation();

//   const addWater = (amount) => {
//     setWaterIntake(Math.min(waterIntake + amount, goal));
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.settingsButton}
//         onPress={() => navigation.navigate('Settings')}
//       >
//         <Feather name="settings" size={24} color="#007AFF" />
//       </TouchableOpacity>
//       <Text style={styles.title}>Water Intake Tracker</Text>
//       <CircularProgress
//         value={waterIntake}
//         maxValue={goal}
//         radius={120}
//         textColor="#000"
//         activeStrokeColor="#007AFF"
//         inActiveStrokeColor="#9CC3FF"
//         inActiveStrokeOpacity={0.5}
//         inActiveStrokeWidth={20}
//         activeStrokeWidth={20}
//         title="ml"
//         titleColor="#000"
//         titleStyle={{ fontWeight: 'bold' }}
//       />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={() => addWater(250)}>
//           <Text style={styles.buttonText}>+250ml</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => addWater(500)}>
//           <Text style={styles.buttonText}>+500ml</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         style={styles.progressButton}
//         onPress={() => navigation.navigate('Progress')}
//       >
//         <Text style={styles.progressButtonText}>View Progress</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F0F0F0',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 30,
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   progressButton: {
//     marginTop: 20,
//     backgroundColor: '#4CD964',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   progressButtonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   settingsButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//   },
// });
// // ===========================================================================


// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// export default function ProgressScreen() {
//   // Mock data for the chart
//   const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [
//       {
//         data: [1500, 1800, 2000, 1700, 2200, 1900, 2100],
//         color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
//         strokeWidth: 2,
//       },
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Weekly Progress</Text>
//       <LineChart
//         data={data}
//         width={Dimensions.get('window').width - 40}
//         height={220}
//         yAxisSuffix="ml"
//         chartConfig={{
//           backgroundColor: '#FFF',
//           backgroundGradientFrom: '#FFF',
//           backgroundGradientTo: '#FFF',
//           decimalPlaces: 0,
//           color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F0F0F0',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// //======================================================================================


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './src/screens/HomeScreen';
// import ProgressScreen from './src/screens/ProgressScreen';
// import SettingsScreen from './src/screens/SettingsScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Progress"
//           component={ProgressScreen}
//           options={{ title: 'Progress' }}
//         />
//         <Stack.Screen
//           name="Settings"
//           component={SettingsScreen}
//           options={{ title: 'Settings' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

