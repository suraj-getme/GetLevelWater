// import React, { useEffect, useState, useCallback } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator,Image } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

// const ProfileScreen4 = ({route, navigation}) => {
//     const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { waterStorageId, percentage } = route.params; // Retrieve the passed param
//   const navigate = useNavigation

//     const getAPIData = useCallback(async () => {
//         try {
//           const url = `http://103.137.36.215:4500/api/waterStorage/devices/${waterStorageId}`;
//           const result = await axios.get(url);
//           setData(result.data);
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching API data', error);
//           setLoading(false);
//         }
//       }, []);
    
//       useEffect(() => {
//         getAPIData();
//         const interval = setInterval(() => {
//           getAPIData();
//         }, 8000);
//         return () => clearInterval(interval);
//       }, [getAPIData]);
    
//       if (loading) {
//         return (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#3b82f6" />
//           </View>
//         );
//       }
    
//       if (!data || !data.success) {
//         return (
//           <View style={styles.errorContainer}>
//             <Text style={styles.errorText}>Failed to load data</Text>
//           </View>
//         );
//       }
//       const { info, message } = data;
//       const device = message[0];
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <View style={styles.headerLeft}>
//           {/* <TouchableOpacity>
//             <Icon name="bars" size={24} color="white" />
//           </TouchableOpacity> */}
//           <Text style={styles.headerText}>Welcome User</Text>
//         </View>
//         <View style={styles.headerRight}>
//           <Text style={styles.headerDate}>Date: {device.CurrentTime.split(' ')[0]}</Text>
//           <Text style={styles.headerTime}>Time: {device.CurrentTime.split(' ')[1]}</Text>
//         </View>
//       </View>
//       <View style={styles.content}>
//         <ScrollView style={styles.mainContent}>
//           {/* <View style={styles.backButtonContainer}>
//             <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MainScreen')}>
//               <Icon name="keyboard-arrow-left" size={24} color="white" />
//               <Text style={styles.backButtonText}>BACK</Text>
//             </TouchableOpacity>
//           </View> */}
//           <View>
//           <Text style={styles.title}>{info.waterStorageName}</Text>
//           </View>
//           <View style={styles.profileHeader}>
//               <Text style={styles.profileHeaderText}>PROFILE</Text>
//             </View>
//           <View style={styles.profileCard}>
//             <View style={styles.profileContent}>
//               <View style={{flexDirection:'row'}}>
//                 <View style={{alignSelf:'flex-start'}}>
//               <Image
//                  source={require('../../assets/warning.png')}
//                  style={styles.cardImage}
//                 />
//                 </View>
//               <View style={styles.statusInfo}>
//                   <Text style={styles.statusLabel}>Current Status</Text>
//                   <Text style={styles.statusValue}>{device.status} L</Text>
//                </View>
//                </View>
//               {/* <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Total Capacity</Text>
//                 <Text style={styles.infoValue}>{info.waterStorageCapacity} L</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Type</Text>
//                 <Text style={styles.infoValue}>{info.waterStorageType}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Unit</Text>
//                 <Text style={styles.infoValue}>{info.waterStorageUnit}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Human Resource</Text>
//                 <Text style={styles.infoValue}>{info.humanResourceName}</Text>
//               </View> */}
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>License Active Date</Text>
//                 <Text style={styles.infoValue}>{info.licenseActivatedOn}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>License Expire Date</Text>
//                 <Text style={styles.infoValue}>{info.licenseExpireOn}</Text>
//               </View>
//               <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Record Received At</Text>
//                 <Text style={styles.infoValue}>{device.CurrentTime}</Text>
//               </View>
//               {/* <View style={styles.infoRow}>
//                 <Text style={styles.infoLabel}>Certificate</Text>
//                 <Icon name="card-membership" size={24} color="#b88cd9" />
//               </View> */}
//               {/* <View style={styles.infoRow}>
//               <Text style={styles.infoLabel}>Show Graph</Text>
//               <TouchableOpacity style={styles.showButton}>
//                 <Icon name="show-chart" size={24} color="white" />
//                 <Text style={styles.showButtonText}>SHOW</Text>
//               </TouchableOpacity>
//               </View> */}
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
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
//   backButtonContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: 10,
//     alignSelf:'flex-start',
//     flexDirection:'row'
//   },
//   backButton: {
//     backgroundColor: '#090ca3',
//     flexDirection: 'row',
//     // alignItems: 'center',
//     padding: 8,
//     borderRadius: 4,
//     marginRight: 16,
//   },
//   backButtonText: {
//     color: 'white',
//     marginLeft: 8,
//     flexDirection:'row',
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color:'black',
//     justifyContent:'center',
//     alignItems:'center',
//     marginBottom:10
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
//     borderBottomWidth: 2,
//     borderBottomColor: '#f12759',
//     paddingBottom: 8,
//     // marginBottom: 16,
//     backgroundColor:'#090ca3'
//   },
//   profileHeaderText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color:'white'
//   },
//   profileContent: {
//     alignItems: 'center',
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   statusCircle: {
//     width: 96,
//     height: 96,
//     borderRadius: 48,
//     backgroundColor: '#ef4444',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   statusText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   statusInfo: {
//     marginLeft: 16,
//     justifyContent:'center',
//     alignItems: 'center'
//   },
//   statusLabel: {
//     color: '#6b7280',
//   },
//   statusValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color:'black'
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e5e7eb',
//     borderTopWidth:1,
//     borderTopColor:'#e5e7eb'
//   },
//   infoLabel: {
//     color: '#6b7280',
//   },
//   infoValue: {
//     fontWeight: 'bold',
//     color:'black'
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
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardImage: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     // marginBottom: 20,
//     marginLeft: 94,
//     marginTop: 8,
//   }
// });

// export default ProfileScreen4




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

const ProfileScreen4 = ({route, navigation}) => {
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
              <View style={{top: -20, left: 30, marginBottom: -10}}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={20}
                  color="black"
                  style={{alignSelf: 'flex-end'}}
                />
              </View>
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
                <Text style={styles.infoLabel}>License Active Date</Text>
                <Text style={styles.infoValue}>{info.licenseActivatedOn}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>License Expire Date</Text>
                <Text style={styles.infoValue}>{info.licenseExpireOn}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Record Received At</Text>
                <Text style={styles.infoValue}>{device.CurrentTime}</Text>
              </View>
            </View>
            {/* <View style={styles.borderLine}></View> */}
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>
                Update At:{' '}
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
  // profileContent: {
  //   alignItems: 'center',
  // },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingVertical: 2,
    // paddingHorizontal:-10
    
  },
  infoLabel: {
    color: '#6b7280',
    // fontWeight:'400'
    left:10
  },
  infoValue: {
    fontWeight: '700',
    color: 'black',
    right:50
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
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    bottom: -8,
  },
  cardSubtitle: {
    color: '#000',
    bottom: -8,
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
    top: 4,
  },
  cardFooter: {
    // marginLeft: 30,
    marginTop:10,
    borderTopWidth: 1,
    borderTopColor:'lightgrey',
    left:-20,
    paddingTop:5,
    width:'100%',
    paddingLeft:30
  },
  cardUpdate: {
    color: '#666',
    top: 2,
  },
});

export default ProfileScreen4;