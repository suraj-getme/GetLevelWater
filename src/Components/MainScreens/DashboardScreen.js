// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   ActivityIndicator,
//   SafeAreaView,
//   BackHandler
//   Alert,
// } from 'react-native';
// import axios from 'axios'; // Import axios
// import Card1 from './Card1';
// import Card2 from './Card2';
// import Card3 from './Card3';
// import Card4 from './Card4';
// import Card6 from './Card6';
// import Header from './Header';
// import Card5 from './card5';
// import { useFocusEffect, useNavigation } from '@react-navigation/native';

// // A dynamic mapping of category to card component
// const categoryComponents = {
//   'B': Card1,
//   'A': Card2,
//   'BD': Card1,
//   'BC1C2': Card4,
//   // Add more categories as needed, for example:
//   // 'C': CardX, 
// };

// const MainDashboard = ({ navigation }) => {
//   const [cardsData, setCardsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigation()

//   // Function to fetch the category API data using axios
//   const getAPIData = async () => {
//     try {
//       const url = 'http://103.137.36.215:4500/api/userWaterStorage/user_dashboard';
//       const result = await axios.get(url);
//       setCardsData(result.data.data); // Set the response data to state
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching API data', error);
//       setLoading(false);
//     }
//   };
// const handleBackPress = () => {
//   Alert.alert('Exit APP', 'Are you sure you want to exit', [
//     {
//       text: 'Cancel',
//       onPress: () => null,
//       style: 'cancel',
//     },
//     {
//       text: 'Exit',
//       onPress: () => BackHandler.exitApp(),
//     }
//   ])
//   return true;
// }
// useFocusEffect(
//   React.useCallback(() => {
//     BackHandler.addEventListener('hardwareBackPress', handleBackPress)
//   return ()=>{
//     BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
//     }
//     }, [])
// )

//   // Fetch API data when the component mounts
//   useEffect(() => {
//   setTimeout (() => {
//     getAPIData();
//     }, 8000); // getAPIData();
//   }, [getAPIData]);

//   // Function to render the card based on licenseStatus and category
//   const renderCard = (card, index) => {
//     const { category, licenseStatus, devices} = card;
//     const CardComponent = categoryComponents[category];
//       const cardData = {...card, devices}

//     // If licenseStatus is false, show Card6 for 'A' and '[1]' categories, else Card5
//     if (licenseStatus === 'false') {
//       if (category === 'A' || category === '[1]') {
//         return <Card6 key={index} data={card} />;
//       }
//       return <Card5 key={index} data={card} />;
//     } else if (CardComponent) {
//       return <CardComponent key={index} data={card} />;
//     }else {
//       return <Text key={index}>No card found for category: {category}</Text>;
//     }
//   };

//   return (
//     <>
//        <Header />
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.content}>
//         {loading ? (
//           <SafeAreaView style={styles.loaderContainer}>
//             <ActivityIndicator size={'large'} color={'#0000ff'} />
//             <Text>Loading...</Text>
//           </SafeAreaView>
//         ) : (
//           cardsData.map((card, index) => renderCard(card, index))
//         )}

//         <View style={styles.navigationButtonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => navigation.navigate('Wave')}>
//             <Text style={styles.buttonText}>Go to Card 6</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e8e5e5',
//   },
//   content: {
//     paddingBottom: 20,
//   },
//   navigationButtonContainer: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgb(219,219,227)',
//   },
// });

// export default MainDashboard;

// ====================================================================================================

// import React, { useEffect, useState } from 'react';
// import { View, ScrollView, StyleSheet, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, BackHandler, Alert } from 'react-native';
// import axios from 'axios'; // Import axios
// import Card1 from './Card1';
// import Card2 from './Card2';
// import Card3 from './Card3';
// import Card4 from './Card4';
// import Card6 from './Card6';
// import Header from './Header';
// import Card5 from './Card5';
// import { useFocusEffect, useNavigation } from '@react-navigation/native';
// import Wave from './Wave'; // Assuming you have this component

// // A dynamic mapping of category to card component
// const categoryComponents = {
//   'B': Card1,
//   'A': Card4,
//   'BD': Card1,
//   'BC1C2': Card2,
//   // Add more categories as needed
// };

// const MainDashboard = ({ navigation }) => {
//   const [cardsData, setCardsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // const [progress, setProgress] = useState(0);  // Store the progress state 
//   const navigate = useNavigation();

//   // Function to fetch the category API data using axios
//   const getAPIData = async () => {
//     try {
//       const url = 'http://103.137.36.215:4500/api/userWaterStorage/user_dashboard';
//       const result = await axios.get(url);
//       setCardsData(result.data.data); // Set the response data to state
//       setLoading(false);

//       // Extract percentage from the first device in the data open this commited code to render the wave component
//       // if (result.data.data.length > 0) {
//       //   const percentage = result.data.data[0].devices[0].percentage;  // Get the percentage
//       //   setProgress(percentage);  // Set the progress value for Wave component
//       // }
//     } catch (error) {
//       console.error('Error fetching API data', error);
//       setLoading(false);
//     }
//   };

//   const handleBackPress = () => {
//     Alert.alert('Exit APP', 'Are you sure you want to exit', [
//       {
//         text: 'Cancel',
//         onPress: () => null,
//         style: 'cancel',
//       },
//       {
//         text: 'Exit',
//         onPress: () => BackHandler.exitApp(),
//       },
//     ]);
//     return true;
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//       };
//     }, [])
//   );

//   // Fetch API data when the component mounts
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     getAPIData();
//   //   }, 8000);
//   // }, [getAPIData]);

//   useEffect(() => {
//     getAPIData();
//     const interval = setInterval(() => {
//       getAPIData();
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [getAPIData]);

//   // Function to render the card based on licenseStatus and category
//   const renderCard = (card, index) => {
//     const { category, licenseStatus, devices } = card;
//     const CardComponent = categoryComponents[category];
//     const cardData = { ...card, devices };

//     // If licenseStatus is false, show Card6 for 'A' and '[1]' categories, else Card5
//     if (licenseStatus === 'false') {
//       if (category === 'A' || category === '[1]') {
//         return <Card6 key={index} data={card} />;
//       }
//       return <Card5 key={index} data={card} />;
//     } else if (CardComponent) {
//       return <CardComponent key={index} data={card} />;
//     } else {
//       return <Text key={index}>No card found for category: {category}</Text>;
//     }
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={styles.content}>
//           {loading ? (
//             <SafeAreaView style={styles.loaderContainer}>
//               <ActivityIndicator size={'large'} color={'#0000ff'} />
//               <Text>Loading...</Text>
//             </SafeAreaView>
//           ) : (
//             <>
//               {cardsData.map((card, index) => renderCard(card, index))}
//               {/* Pass the progress to the Wave component */}
//               {/* <Wave size={120} progress={progress} /> */}
//             </>
//           )}

//           <View style={styles.navigationButtonContainer}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => navigation.navigate('Card3')}
//             >
//               <Text style={styles.buttonText}>Go to Card 6</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e8e5e5',
//     // backgroundColor:'#0163d2'
//   },
//   content: {
//     paddingBottom: 20,
//   },
//   navigationButtonContainer: {
//     marginTop: 5,
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgb(219,219,227)',
//   },
// });

// export default MainDashboard;

// ====================================================================================================

// import React, { useEffect, useState } from 'react';
// import { View, ScrollView, StyleSheet, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, BackHandler, Alert } from 'react-native';
// import axios from 'axios'; 
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from '@react-native-community/netinfo';  // For checking the network status
// import Card1 from '../SingleScreens/CardOne';
// import Card2 from '../SingleScreens/CardTwo';
// import Card3 from '../SingleScreens/CardThree';
// import Card4 from '../SingleScreens/CardFour';
// import Card6 from '../SingleScreens/CardSix';
// import Header from './Header';
// import Card5 from '../SingleScreens/CardFive';
// import { useFocusEffect, useNavigation } from '@react-navigation/native';
// import Wave from './Wave'; // Assuming you have this component

// // A dynamic mapping of category to card component
// const categoryComponents = {
//   'B': Card1,
//   'A': Card4,
//   'BD': Card1,
//   'BC1C2': Card2,
//   // Add more categories as needed
// };

// const Dashboard = ({ navigation }) => {
//   const [cardsData, setCardsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isOnline, setIsOnline] = useState(true);  // Track online status
//   const [error, setError] = useState('');
//   const [statusVisible, setStatusVisible] = useState(false);  // Control the visibility of the status message
//   const navigate = useNavigation();

//   // Function to fetch the category API data using axios
//   const getAPIData = async () => {
//     try {
//       const url = 'http://103.137.36.215:4500/api/userWaterStorage/user_dashboard';
//       const result = await axios.get(url);
//       setCardsData(result.data.data); // Set the response data to state
//       setLoading(false);

//       // Store the fetched data in AsyncStorage for offline access
//       await AsyncStorage.setItem('cardsData', JSON.stringify(result.data.data));
//     } catch (error) {
//       console.error('Error fetching API data', error);
//       setLoading(false);
//       setError('Failed to load data.');
//     }
//   };

//   // Function to get data from AsyncStorage (if offline)
//   const getOfflineData = async () => {
//     try {
//       const data = await AsyncStorage.getItem('cardsData');
//       if (data) {
//         setCardsData(JSON.parse(data));  // Set the offline data to state
//       } else {
//         setError('No cached data available.');
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error('Error reading data from AsyncStorage', error);
//       setError('Failed to load offline data.');
//       setLoading(false);
//     }
//   };

//   // Function to handle the back button press on Android
//   const handleBackPress = () => {
//     Alert.alert('Exit APP', 'Are you sure you want to exit', [
//       { text: 'Cancel', onPress: () => null, style: 'cancel' },
//       { text: 'Exit', onPress: () => BackHandler.exitApp() },
//     ]);
//     return true;
//   };

//   useFocusEffect(
//     React.useCallback(() => {
//       BackHandler.addEventListener('hardwareBackPress', handleBackPress);
//       return () => {
//         BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
//       };
//     }, [])
//   );

//   // Check internet connection on mount and whenever it changes
//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       // Only show status if the connection changes
//       if (state.isConnected !== isOnline) {
//         setIsOnline(state.isConnected);
//         setStatusVisible(true);  // Show status bar when the network status changes
        
//         // Hide status after 2 seconds
//         setTimeout(() => {
//           setStatusVisible(false);
//         }, 2000);
//       }
//     });

//     return () => unsubscribe();
//   }, [isOnline]);

//   // Fetch API data when the component mounts
//   useEffect(() => {
//     if (isOnline) {
//         getAPIData()
//       ;  // Fetch data from API if online
//     } else {
//       getOfflineData();  // Load data from AsyncStorage if offline
//     }
//   }, [isOnline]);  // Trigger when the network status changes

//   // Function to render the card based on licenseStatus and category
//   const renderCard = (card, index) => {
//     const { category, licenseStatus, devices } = card;
//     const CardComponent = categoryComponents[category];
//     const cardData = { ...card, devices };

//     if (licenseStatus === 'false') {
//       if (category === 'A' || category === '[1]') {
//         return <Card6 key={index} data={card} />;
//       }
//       return <Card5 key={index} data={card} />;
//     } else if (CardComponent) {
//       return <CardComponent key={index} data={card} />;
//     } else {
//       return <Text key={index}>No card found for category: {category}</Text>;
//     }
//   };

//   return (
//     <>
//       <Header />
//       <View style={styles.container}>
//         <ScrollView contentContainerStyle={styles.content}>
//           {loading ? (
//             <SafeAreaView style={styles.loaderContainer}>
//               <ActivityIndicator size={'large'} color={'#0000ff'} />
//               <Text>Loading...</Text>
//             </SafeAreaView>
//           ) : (
//             <>
//               {cardsData.length > 0 ? (
//                 cardsData.map((card, index) => renderCard(card, index))
//               ) : (
//                 <Text style={styles.errorText}>
//                   {isOnline ? 'No data available' : 'You are offline, showing last cached data.'}
//                 </Text>
//               )}
//             </>
//           )}

//           <View style={styles.navigationButtonContainer}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => navigation.navigate('FlipCard')}
//             >
//               <Text style={styles.buttonText}>Go to Card 6</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>

//       {/* Display Online/Offline status only if it's visible */}
//       {statusVisible && (
//         <View style={[styles.statusContainer, { backgroundColor: isOnline ? '#48bb78' : '#f56565' }]}>
//           <Text style={styles.statusText}>
//             {isOnline ? 'Online...' : 'Offline!!!'}
//           </Text>
//         </View>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e8e5e5',
//     backfaceVisibility:'hidden'
//   },
//   content: {
//     paddingBottom: 20,
//   },
//   navigationButtonContainer: {
//     marginTop: 5,
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   loaderContainer: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor: 'rgb(219,219,227)',
//   },
//   errorText: {
//     color: '#D32F2F',
//     marginBottom: 10,
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   statusContainer: {
//     position: 'absolute',
//     paddingVertical: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     bottom: 0,
//     width: '100%',
//   },
//   statusText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
// });

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, BackHandler, Alert, RefreshControl } from 'react-native';
import axios from 'axios'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';  
import Card1 from '../SingleScreens/CardOne';
import Card2 from '../SingleScreens/CardTwo';
import Card3 from '../SingleScreens/CardThree';
import Card4 from '../SingleScreens/CardFour';
import Card6 from '../SingleScreens/CardSix';
import Header from './Header';
import Card5 from '../SingleScreens/CardFive';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Wave from './Wave'; 

const categoryComponents = {
  'B': Card1,
  'A': Card4,
  'BD': Card1,
  'BC1C2': Card2,
};

const Dashboard = ({ navigation }) => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);  
  const [error, setError] = useState('');
  const [statusVisible, setStatusVisible] = useState(false);  
  const [refreshing, setRefreshing] = useState(false); // New state for refreshing
  const navigate = useNavigation();

  const getAPIData = async () => {
    try {
      const url = 'http://103.137.36.215:4500/api/userWaterStorage/user_dashboard';
      const result = await axios.get(url);
      setCardsData(result.data.data); 
      setLoading(false);
      await AsyncStorage.setItem('cardsData', JSON.stringify(result.data.data));
    } catch (error) {
      console.error('Error fetching API data', error);
      setLoading(false);
      setError('Failed to load data.');
    }
  };

  const getOfflineData = async () => {
    try {
      const data = await AsyncStorage.getItem('cardsData');
      if (data) {
        setCardsData(JSON.parse(data));  
      } else {
        setError('No cached data available.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error reading data from AsyncStorage', error);
      setError('Failed to load offline data.');
      setLoading(false);
    }
  };

  const handleBackPress = () => {
    Alert.alert('Exit APP', 'Are you sure you want to exit', [
      { text: 'Cancel', onPress: () => null, style: 'cancel' },
      { text: 'Exit', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [])
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected !== isOnline) {
        setIsOnline(state.isConnected);
        setStatusVisible(true);  
        setTimeout (() => {
          setStatusVisible(false);
        }, 2000);
      }
    });

    return () => unsubscribe();
  }, [isOnline]);

  useEffect(() => {
    let interval
    if (isOnline) {
      getAPIData();  
     interval = setInterval(() => {
      getAPIData();
      }, 8000);
    } else {
      getOfflineData();  
    }
    return () => {
      if(interval){
        clearInterval(interval);
      }
    }
  }, [isOnline]);

  const onRefresh = async () => {
    setRefreshing(true);
    await getAPIData(); // Fetch the API data again
    setRefreshing(false);
  };

  const renderCard = (card, index) => {
    const { category, licenseStatus, devices } = card;
    const CardComponent = categoryComponents[category];
    const cardData = { ...card, devices };

    if (licenseStatus === 'false') {
      if (category === 'A' || category === '[1]') {
        return <Card4 key={index} data={card} />;
      }
      return <Card5 key={index} data={card} />;
    } else if (CardComponent) {
      return <CardComponent key={index} data={card} />;
    } else {
      return <Text key={index}>No card found for category: {category}</Text>;
    }
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {loading ? (
            <SafeAreaView style={styles.loaderContainer}>
              <ActivityIndicator size={'large'} color={'#0000ff'} />
              <Text>Loading...</Text>
            </SafeAreaView>
          ) : (
            <>
              {cardsData.length > 0 ? (
                cardsData.map((card, index) => renderCard(card, index))
              ) : (
                <Text style={styles.errorText}>
                  {isOnline ? 'No data available' : 'You are offline, showing last cached data.'}
                </Text>
              )}
            </>
          )}

          <View style={styles.navigationButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('NoInternetScreen')}
            >
              <Text style={styles.buttonText}>Go to Card 6</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {statusVisible && (
        <View style={[styles.statusContainer, { backgroundColor: isOnline ? '#48bb78' : '#f56565' }]}>
          <Text style={styles.statusText}>
            {isOnline ? 'Online...' : 'Offline!!!'}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e5e5',
  },
  content: {
    paddingBottom: 20,
  },
  navigationButtonContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  statusContainer: {
    position: 'absolute',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    width: '100%',
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Dashboard;


