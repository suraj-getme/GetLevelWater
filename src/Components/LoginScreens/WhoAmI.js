import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios'


export default function WhoAmI({ navigation }) {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Function to check if the user is logged in
  const whoAmI = async () => {
    const postPhone = {
      method: 'get',
      url: `http://103.137.36.215:4500/api/users/whoami`,
      withCredentials: true,
      headers: { crossDomain: true, 'Content-Type': 'application/json' },
    }

    try {
      const resp = await axios(postPhone)
      if (resp.data.success === 1) {
        // User is authenticated
        navigation.navigate('MainScreen') // Navigate to the main screen
      } else {
        // User is not authenticated
        navigation.navigate('Login') // Navigate to login screen
      }
    } catch (error) {
      // Handle error (e.g., no internet connection, server error, etc.)
      // console.log('Error:', error)
      navigation.navigate('NoInternetScreen')
      setIsLoading(false)
      setHasError(true)
    }
  }

  // Check user's authentication status when the screen is focused
  useFocusEffect(
    useCallback(() => {
      whoAmI()

      // Simulate progress bar animation
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 10
        )
      }, 1000)

      return () => {
        clearInterval(timer)
      }
    }, [])
  )

  return (
    <View style={styles.container}>
      {isLoading ? (
        // Loading spinner while the request is in progress
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.loadingText}>Checking your status...</Text>
        </View>
      ) : hasError ? (
        // Error message if the API call fails
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Something went wrong. Please try again.
          </Text>
        </View>
      ) : (
        // Show the progress bar and simulate progress
        <View style={styles.progressContainer}>
          <View
            style={[styles.progressBar, { width: `${progress}%` }]}
          />
          <Text style={styles.progressText}>{progress}%</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C6B49',
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#fff',
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressBar: {
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
})


// ====================================================================================================================================================================




// import React, { useState, useEffect, useCallback } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import { useFocusEffect } from '@react-navigation/native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from '@react-native-community/netinfo'; // To track network status

// export default function WhoAmI({ navigation }) {
//   const [progress, setProgress] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);
//   const [isOnline, setIsOnline] = useState(true); // Track the network status
//   const [userData, setUserData] = useState(null); // Store user data

//   // Function to check if the user is logged in
//   const whoAmI = async () => {
//     const postPhone = {
//       method: 'get',
//       url: `http://103.137.36.215:4500/api/users/whoami`,
//       withCredentials: true,
//       headers: { crossDomain: true, 'Content-Type': 'application/json' },
//     };

//     try {
//       const resp = await axios(postPhone);
//       if (resp.data.success === 1) {
//         // User is authenticated
//         navigation.navigate('MainScreen'); // Navigate to the main screen
//         await AsyncStorage.setItem('userData', JSON.stringify(resp.data)); // Save user data to AsyncStorage
//         setUserData(resp.data);
//       } else {
//         // User is not authenticated
//         navigation.navigate('Login'); // Navigate to login screen
//       }
//     } catch (error) {
//       // Handle error (e.g., no internet connection, server error, etc.)
//       console.log('Error:', error);
//       setIsLoading(false);
//       setHasError(true);
//     }
//   };

//   // Function to check if there is cached data in AsyncStorage
//   const loadCachedData = async () => {
//     const cachedData = await AsyncStorage.getItem('userData');
//     if (cachedData) {
//       setUserData(JSON.parse(cachedData));
//       setIsLoading(false);
//     } else {
//       setHasError(true);
//       setIsLoading(false);
//     }
//   };

//   // Check user's authentication status when the screen is focused
//   useFocusEffect(
//     useCallback(() => {
//       if (isOnline) {
//         whoAmI();
//       } else {
//         loadCachedData();
//       }

//       // Simulate progress bar animation
//       const timer = setInterval(() => {
//         setProgress((prevProgress) =>
//           prevProgress >= 100 ? 100 : prevProgress + 10
//         );
//       }, 2000);

//       return () => {
//         clearInterval(timer);
//       };
//     }, [isOnline])
//   );

//   // Track network status (online or offline)
//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       setIsOnline(state.isConnected); // Set the online status
//     });

//     return () => unsubscribe(); // Clean up the listener
//   }, []);

//   // Show the loading, error, or user data based on the network status and loading state
//   if (isLoading) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#fff" />
//           <Text style={styles.loadingText}>Checking your status...</Text>
//         </View>
//       </View>
//     );
//   }

//   if (hasError) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.errorContainer}>
//           <Text style={styles.errorText}>
//             Something went wrong. Please try again.
//           </Text>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* Progress bar and user data */}
//       <View style={styles.progressContainer}>
//         <View style={[styles.progressBar, { width: `${progress}%` }]} />
//         <Text style={styles.progressText}>{progress}%</Text>
//       </View>

//       {/* Display user data */}
//       {userData && (
//         <View style={styles.userDataContainer}>
//           <Text style={styles.userDataText}>Hello, {userData.username}!</Text>
//         </View>
//       )}

//       {/* Show the bottom status bar */}
//       <View
//         style={[
//           styles.statusBar,
//           { backgroundColor: isOnline ? '#48bb78' : '#f56565' },
//         ]}
//       >
//         <Text style={styles.statusText}>
//           {isOnline ? 'You are online' : 'You are offline'}
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'green',
//     width: '100%',
//     height: '100%',
//   },
//   loadingContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 20,
//     fontSize: 18,
//     color: '#fff',
//   },
//   progressContainer: {
//     alignItems: 'center',
//   },
//   progressBar: {
//     height: 20,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   progressText: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   errorContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   userDataContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   userDataText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   statusBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 10,
//     alignItems: 'center',
//   },
//   statusText: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
