// import React, { useEffect, useState, useCallback } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Wave from '../MainScreens/Wave'; // Import the reusable WaveAnimation
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from '@react-native-community/netinfo';  // For checking network status

// const ProfileScreen = ({ route, navigation }) => {
//   const { waterStorageId, percentage } = route.params; // Retrieve the passed params
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isOnline, setIsOnline] = useState(true);  // Track online/offline status
//   const [showStatus, setShowStatus] = useState(false); // Control status visibility
//   const [dataSource, setDataSource] = useState(''); // Track data source (API or Offline)

//   // Fetch data from API
//   const getAPIData = useCallback(async () => {
//     try {
//       const url = `http://103.137.36.215:4500/api/waterStorage/devices/${waterStorageId}`;
//       const result = await axios.get(url);
//       setData(result.data);
//       setLoading(false);
//       setDataSource('API');  // Indicate that data was fetched from the API

//       // Store the fetched data in AsyncStorage for offline usage
//       await AsyncStorage.setItem(`profileData_${waterStorageId}`, JSON.stringify(result.data));
//     } catch (error) {
//       console.error('Error fetching API data', error);
//       setLoading(false);
//       setDataSource('Error');  // Indicate there was an error fetching data
//     }
//   }, [waterStorageId]);

//   // Fetch cached data from AsyncStorage (if offline)
//   const getOfflineData = async () => {
//     try {
//       const cachedData = await AsyncStorage.getItem(`profileData_${waterStorageId}`);
//       if (cachedData) {
//         setData(JSON.parse(cachedData));
//         setLoading(false);
//         setDataSource('Offline');  // Indicate that data was fetched from offline cache
//       } else {
//         setLoading(false);  // In case no cached data exists
//         setDataSource('Error');  // Indicate there was no cached data
//       }
//     } catch (error) {
//       console.error('Error fetching cached data', error);
//       setLoading(false);
//       setDataSource('Error');  // Indicate there was an error fetching cached data
//     }
//   };

//   // Check the network status
//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       const statusChanged = isOnline !== state.isConnected;
//       setIsOnline(state.isConnected);  // Set the online status
//       if (statusChanged) {
//         setShowStatus(true);  // Show status when it changes
//         setTimeout(() => {
//           setShowStatus(false);  // Hide status after 2 seconds
//         }, 2000);
//       }
//     });

//     return () => unsubscribe();  // Clean up the listener
//   }, [isOnline]);

//   // Fetch data on mount based on online/offline status
//   useEffect(() => {
//     if (isOnline) {
//       getAPIData();  // Fetch data from API if online
//     } else {
//       getOfflineData();  // Load data from AsyncStorage if offline
//     }
//   }, [isOnline, getAPIData]);

//   // Render loading or error states
//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#3b82f6" />
//       </View>
//     );
//   }

//   if (!data || !data.success) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>Failed to load data</Text>
//       </View>
//     );
//   }

//   const { info, message } = data;
//   const device = message[0];

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <Text style={styles.headerText}>Welcome User</Text>
//           </View>
//           <View style={styles.headerRight}>
//             <Text style={styles.headerDate}>Date: {device.CurrentTime.split(' ')[0]}</Text>
//             <Text style={styles.headerTime}>Time: {device.CurrentTime.split(' ')[1]}</Text>
//           </View>
//         </View>
//         <View style={styles.content}>
//           <ScrollView style={styles.mainContent}>
//             <Text style={styles.title}>{info.waterStorageName}</Text>
//             {/* <View style={styles.profileHeader}>
//               <Text style={styles.profileHeaderText}>PROFILE</Text>
//             </View>
//             <View style={styles.underline}></View> */}

//             <View style={styles.profileCard}>
//               <View style={styles.profileContent}>
//                 <View style={{ flexDirection: 'row' }}>
//                   <Wave percentage={percentage} size={110} />
//                   <View style={styles.statusInfo}>
//                     <Text style={styles.statusLabel}>Current Status</Text>
//                     <Text style={styles.statusValue}>{device.elevation} Lac Liter</Text>
//                   </View>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Total Capacity</Text>
//                   <Text style={styles.infoValue}>{info.waterStorageCapacity} L</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Type</Text>
//                   <Text style={styles.infoValue}>{info.waterStorageType}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Unit</Text>
//                   <Text style={styles.infoValue}>{info.waterStorageUnit}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Human Resource</Text>
//                   <Text style={styles.infoValue}>{info.humanResourceName}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>License Active Date</Text>
//                   <Text style={styles.infoValue}>{info.licenseActivatedOn}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>License Expire Date</Text>
//                   <Text style={styles.infoValue}>{info.licenseExpireOn}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Record Received At</Text>
//                   <Text style={styles.infoValue}>{device.CurrentTime}</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Certificate</Text>
//                   <Icon name="card-membership" size={24} color="#b88cd9" />
//                 </View>
//                 <View style={styles.infoRow}>
//                   <Text style={styles.infoLabel}>Show Graph</Text>
//                   <TouchableOpacity style={styles.showButton} onPress={() => navigation.navigate('Graph1', { waterStorageId })}>
//                     <Icon name="show-chart" size={24} color="white" />
//                     <Text style={styles.showButtonText}>SHOW</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </ScrollView>
//         </View>

//         {/* Show Online/Offline Status only when the network status changes */}
//         {showStatus && (
//           <View style={[styles.statusContainer, { backgroundColor: isOnline ? '#48bb78' : '#f56565' }]}>
//             <Text style={styles.statusText}>{isOnline ? 'Online...' : 'Offline!!!'}</Text>
//           </View>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//   },
//   header: {
//     backgroundColor: '#3b82f6',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 18,
//     marginLeft: 8,
//   },
//   headerRight: {
//     alignItems: 'flex-end',
//   },
//   headerDate: {
//     color: 'white',
//   },
//   headerTime: {
//     color: 'white',
//   },
//   content: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   mainContent: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   profileCard: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   profileHeader: {
//     backgroundColor: '#090ca3',
//     padding: 6,
//   },
//   profileHeaderText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   underline: {
//     borderBottomColor: '#f12759',
//     borderBottomWidth: 3,
//     width: '28%',
//     marginBottom: 10,
//   },
//   profileContent: {
//     alignItems: 'center',
//   },
//   statusInfo: {
//     marginLeft: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   statusLabel: {
//     color: '#6b7280',
//   },
//   statusValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e7eb',
//   },
//   infoLabel: {
//     color: '#6b7280',
//   },
//   infoValue: {
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   showButton: {
//     backgroundColor: '#090ca3',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 8,
//     borderRadius: 4,
//     marginTop: 16,
//   },
//   showButtonText: {
//     color: 'white',
//     marginLeft: 8,
//   },
//   statusContainer: {
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   statusText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 18,
//   },
// });

// export default ProfileScreen;

// ========================================================================================================================

import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo'; // For checking network status
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = ({route, navigation}) => {
  const {waterStorageId, percentage} = route.params; // Retrieve the passed params
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true); // Track online/offline status
  const [showStatus, setShowStatus] = useState(false); // Control status visibility
  const [dataSource, setDataSource] = useState(''); // Track data source (API or Offline)

  // Fetch data from API
  const getAPIData = useCallback(async () => {
    try {
      const url = `http://103.137.36.215:4500/api/waterStorage/devices/${waterStorageId}`;
      const result = await axios.get(url);
      setData(result.data);
      setLoading(false);
      setDataSource('API'); // Indicate that data was fetched from the API

      // Store the fetched data in AsyncStorage for offline usage
      await AsyncStorage.setItem(
        `profileData_${waterStorageId}`,
        JSON.stringify(result.data),
      );
    } catch (error) {
      console.error('Error fetching API data', error);
      setLoading(false);
      setDataSource('Error'); // Indicate there was an error fetching data
    }
  }, [waterStorageId]);

  // Fetch cached data from AsyncStorage (if offline)
  const getOfflineData = async () => {
    try {
      const cachedData = await AsyncStorage.getItem(
        `profileData_${waterStorageId}`,
      );
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        setDataSource('Offline'); // Indicate that data was fetched from offline cache
      } else {
        setLoading(false); // In case no cached data exists
        setDataSource('Error'); // Indicate there was no cached data
      }
    } catch (error) {
      console.error('Error fetching cached data', error);
      setLoading(false);
      setDataSource('Error'); // Indicate there was an error fetching cached data
    }
  };

  // Check the network status
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      const statusChanged = isOnline !== state.isConnected;
      setIsOnline(state.isConnected); // Set the online status
      if (statusChanged) {
        setShowStatus(true); // Show status when it changes
        setTimeout(() => {
          setShowStatus(false); // Hide status after 2 seconds
        }, 2000);
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, [isOnline]);

  // Fetch data on mount based on online/offline status
  useEffect(() => {
    if (isOnline) {
      getAPIData(); // Fetch data from API if online
    } else {
      getOfflineData(); // Load data from AsyncStorage if offline
    }
  }, [isOnline, getAPIData]);

  // Render loading or error states
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (!data || !data.success) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load data</Text>
      </View>
    );
  }

  const {info, message} = data;
  const device = message[0];

  return (
    <>
        <FontAwesome5
                  name="map-marker-alt"
                  size={20}
                  color="black"
                  style={{ alignSelf:'flex-end',right:20, top:30, marginBottom:-12}}
                />
                
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          {/* <Text style={styles.title}>{info.waterStorageName}</Text> */}
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardTitle}>{info.waterStorageName}</Text>
              <Text style={styles.cardSubtitle}>
                Capacity: {info.waterStorageCapacity} {info.waterStorageUnit}
              </Text>
              {/* <View style={{top: -20, left: 90, marginBottom: -10}}> */}
                {/* <FontAwesome5
                  name="map-marker-alt"
                  size={20}
                  color="black"
                  style={{backgroundColor:'red', alignSelf:'flex-end', left:40}}
                /> */}
              {/* </View> */}
              <View style={styles.borderLine}></View>
            </View>
          </View>
          {/* Display only the selected rows */}
          <View style={styles.profileCard}>
            <View style={styles.profileContent}>
              {/* Only the relevant rows */}
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Type :-</Text>
                <Text style={styles.infoValue}>{info.waterStorageType}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Unit :-</Text>
                <Text style={styles.infoValue}>{info.waterStorageUnit}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>License Active Date :-</Text>
                <Text style={styles.infoValue}>{info.licenseActivatedOn}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>License Expire Date :-</Text>
                <Text style={styles.infoValue}>{info.licenseExpireOn}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Human Resource :-</Text>
                <Text style={styles.infoValue}>{info.humanResourceName}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Certificate :-</Text>
                <Icon
                  name="card-membership"
                  size={24}
                  color="#b88cd9"
                  style={{right: 50}}
                />
              </View>
            </View>
            <View style={styles.borderLine2}></View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>
                Updated At:{' '}
                {device.CurrentTime
                  ? device.CurrentTime.split(' ')[1]
                  : 'Not Available'}
              </Text>
            </View>
          </View>
        </View>

        {/* Show Online/Offline Status only when the network status changes */}
        {/* {showStatus && (
          <View style={[styles.statusContainer, { backgroundColor: isOnline ? '#48bb78' : '#f56565' }]}>
            <Text style={styles.statusText}>{isOnline ? 'Online...' : 'Offline!!!'}</Text>
          </View>
        )} */}
        {/* </View> */}
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: 'white',
    borderRadius: 20,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 12,
  },
  mainContent: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileCard: {
    // backgroundColor: 'white',
    borderRadius: 8,
    padding: 0,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 1,
  },
  profileContent: {
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingVertical: 1.5,
    // borderBottomWidth: 1,
    // borderBottomColor: '#e5e7eb',
    marginLeft: -50,
    top:-4
  },
  infoLabel: {
    color: '#6b7280',
    // fontWeight:'400'
  },
  infoValue: {
    fontWeight: '700',
    color: 'black',
    marginRight: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: -8,
    marginBottom:6
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    bottom: 0,
  },
  cardSubtitle: {
    color: '#000',
    bottom: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  borderLine: {
    height: 1, // height for a horizontal line
    width: '180%', // Full width of its container
    backgroundColor: '#dcdcdc', // Line color
    marginVertical: 0,
    marginBottom: 5,
    marginLeft: -20,
    top: 6,
  },
  borderLine2: {
    height: 1, // height for a horizontal line
    width: '180%', // Full width of its container
    backgroundColor: '#dcdcdc', // Line color
    marginVertical: 0,
    marginBottom: 5,
    marginLeft: -20,
    top: -4,
  },
  cardFooter: {
    marginLeft: 20,
    },
  cardUpdate: {
    color: '#666',
    top: -2,
  },
});

export default ProfileScreen;

// ========================================================================================================================
