// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, Dimensions } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from '@react-native-community/netinfo';  // To track network status
// import Header from '../MainScreens/Header';

// const Graph1 = ({ route }) => {
//   const { waterStorageId } = route.params; // Get waterStorageId from route params
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [waterStorageName, setWaterStorageName] = useState(''); // State to store waterStorageName
//   const [isOnline, setIsOnline] = useState(false); // To track if the device is online
//   const [showStatus, setShowStatus] = useState(true); // To control showing "Online/Offline" message

//   // Function to fetch the data from the API
//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.post('http://103.137.36.215:4500/api/levelReports/getLevelFlowHours20', {
//         waterStorageId: waterStorageId, // Use dynamic waterStorageId
//         date: '2025-01-06',
//       });

//       if (response.data.success === 1) {
//         // Set the waterStorageName from the API response
//         setWaterStorageName(response.data.info.waterStorageName);

//         // Map the API response to your chart format
//         const data = response.data.message.map(item => ({
//           time: item.fixtime.substring(11, 16), // Extract HH:mm from fixtime
//           value: item.percentage,
//           color: getBarColor(item.percentage), // Dynamically set the color
//         }));
//         setChartData(data);

//         // Save the data to AsyncStorage for offline use
//         await AsyncStorage.setItem(`waterStorage_${waterStorageId}`, JSON.stringify({
//           waterStorageName: response.data.info.waterStorageName,
//           chartData: data
//         }));
//       }
//     } catch (err) {
//       console.error('API Error:', err);

//       // Check if the error is a network error
//       if (err.message === 'Network Error') {
//         // Try to load the cached data from AsyncStorage
//         const cachedData = await AsyncStorage.getItem(`waterStorage_${waterStorageId}`);
//         if (cachedData) {
//           const parsedData = JSON.parse(cachedData);
//           setWaterStorageName(parsedData.waterStorageName);
//           setChartData(parsedData.chartData);
//         } else {
//           // If there's no cached data, show an offline message
//           setError('No internet connection and no cached data available.');
//         }
//       } else {
//         // Handle other types of errors (e.g., server errors)
//         setError('Failed to fetch data from the server.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   }, [waterStorageId]);

//   // Determine bar color based on percentage
//   const getBarColor = (percentage) => {
//     if (percentage <= 20) return 'rgba(255, 99, 71, 0.8)'; // Red for low values
//     if (percentage <= 50) return 'rgba(255, 165, 0, 0.8)'; // Orange for mid values
//     return 'rgba(144, 238, 144, 0.8)'; // Green for high values
//   };

//   // Check network status
//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       setIsOnline(state.isConnected);  // Set the online status
//     });

//     return () => unsubscribe();  // Clean up the listener
//   }, []);

//   // Hide the online/offline status after 2 seconds
//   useEffect(() => {
//     if (isOnline !== null) {
//       setShowStatus(true);
//       setTimeout(() => {
//         setShowStatus(false);
//       }, 2000);
//     }
//   }, [isOnline]);

//   // Fetch data when component mounts or waterStorageId changes
//   useEffect(() => {
//     if (waterStorageId) {
//       fetchData();
//     }
//   }, [waterStorageId, fetchData]);

//   if (loading) {
//     return (
//       <View style={styles.loadeContainer}>
//         <ActivityIndicator size="large" color="#3b82f6" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Header/>

//       {/* Display waterStorageName */}
//       <View style={styles.waterStorageInfo}>
//         <Text style={styles.waterStorageName}>{waterStorageName}</Text>
//       </View>

//       {/* Main Content */}
//       <ScrollView contentContainerStyle={styles.mainContent}>
//   <View style={styles.chartContainer}>
//   <View style={styles.chartHeaderRight}>
//   <Text style={{ marginRight:10, color:'#4A4A4A', fontWeight:'bold'}}>11-12-2024</Text>
//     <Image source={require('../../assets/default.png')} style={styles.icon} />
//     <Image source={require('../../assets/detail.png')} style={styles.icon}/>
//     <Image source={require('../../assets/investigate.png')} style={styles.icon}/>

//   </View>

//   {/* Axis Lines and Percentage Labels */}
//   <View style={styles.axisContainer}>
//     {/* Vertical Axis Line */}
//     <View style={styles.axisLineVertical} />
//     {/* Horizontal Axis Line */}
//     <View style={styles.axisLineHorizontal} />

//     {/* Percentage Labels */}
//     <View style={styles.percentageLabels}>
//       {Array.from({ length: 11 }, (_, index) => (
//         <Text key={index} style={[styles.percentageLabel, {}]}>
//           {100 - index * 10}%
//         </Text>
//       ))}
//     </View>
//   </View>

//   <View style={styles.legend}>
//     <View style={styles.legendItem}>
//       <View style={[styles.legendColor, { backgroundColor: 'rgba(255, 99, 71, 0.8)' }]} />
//       <Text style={{ color: '#000' }}>Increasing</Text>
//     </View>
//     <View style={styles.legendItem}>
//       <View style={[styles.legendColor, { backgroundColor: 'rgba(144, 238, 144, 0.8)' }]} />
//       <Text style={{ color: '#000' }}>Decreasing</Text>
//     </View>
//     <View style={styles.legendItem}>
//       <View style={[styles.legendColor, { backgroundColor: 'rgba(255, 165, 0, 0.8)' }]} />
//       <Text style={{ color: '#000' }}>Stable</Text>
//     </View>
//   </View>

//   <ScrollView horizontal contentContainerStyle={styles.chart}>
//     {chartData.map((item, index) => (
//       <View key={index} style={styles.barContainer}>
//         <Text style={styles.barLabel2}>{item.value}%</Text>
//         <View style={[styles.bar, { height: `${item.value}%`, backgroundColor: item.color }]} />
//         <Text style={styles.barLabel}>{item.time}</Text>
//       </View>
//     ))}
//   </ScrollView>
//   <Text style={{ alignSelf: 'center', color: '#000' }}>Time</Text>
// </View>
//       </ScrollView>
//        {/* Show Online/Offline Status */}
//        {showStatus && (
//         <View style={[styles.statusContainer, { backgroundColor: isOnline ? '#48bb78' : '#f56565' }]}>
//           <Text style={styles.statusText}>{isOnline ? 'Online...' : 'Offline!!!'}</Text>
//         </View>
//       )}

//     </View>
//   );
// };
// const {height , width } = Dimensions.get('window')
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   loadeContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     backgroundColor: '#fff',
//     padding: 16,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 18,
//     marginLeft: 8,
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dateTime: {
//     marginRight: 16,
//     alignItems: 'flex-end',
//   },
//   dateText: {
//     color: '#fff',
//   },
//   timeText: {
//     color: '#fff',
//   },
//   mainContent: {
//     // padding: 10,
//     paddingHorizontal:10
//   },
//   waterStorageInfo: {
//     padding: 5,
//     alignItems: 'center',
//     backgroundColor: '#f7fafc',
//   },
//   waterStorageName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   statusContainer: {
//     padding: 10,
//     borderRadius: 4,
//     marginBottom: 0,
//     alignItems: 'center',
//   },
//   statusText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   chartContainer: {
//     backgroundColor: '#fff',
//     marginLeft:4
//     // padding: 18,
//     // borderRadius: 8,
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.1,
//     // shadowRadius: 8,
//     // elevation: 4,
//   },
//   legend: {
//     flexDirection: 'row',
//     marginBottom: 16,
//     marginLeft:40
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   legendColor: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     marginRight: 4,
//   },
//   chartHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     padding: 25,
//   },
//   chart: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     height: 350,
//     marginLeft:5,
//   },
//   barContainer: {
//     alignItems: 'center',
//     width: 30,
//     marginHorizontal: 0,
//     marginVertical:54,
//     marginStart:10,
//   },
//   bar: {
//     width: '70%',
//     // borderWidth:0.5,
//     // borderColor:'#000',
//     },
//   barLabel: {
//     marginTop: 8,
//     fontSize: 12,
//     transform: [{ rotate: '-60deg'}],
//     // marginBottom:0,
//     color:'#736b6b',
//     top:5
//   },
//   icon: {
//     height:32,
//     width:32,
//     justifyContent:'space-between',
//     marginLeft:15,
//     opacity:10,
//   },
//   barLabel2: {
//     fontSize: 11,
//     fontWeight: '700',
//     color:'#736b6b',
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
//     borderBottomColor: 'grey',
//     borderBottomWidth:1,
//     width: '100%',
//     marginTop:1
//   },
//   axisContainer: {
//     position: 'absolute',
//     left: 0, // Position it to the left of the chart
//     top: 95,
//     bottom: 96,
//     right: 0,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },

//   axisLineVertical: {
//     position: 'absolute',
//     left: -5,
//     top: 0,
//     bottom: 0,
//     width: 1,
//     backgroundColor: '#000', // Color of the vertical axis line
//   },

//   axisLineHorizontal: {
//     position: 'absolute',
//     left: -5,
//     bottom: 0,
//     right: 0,
//     height: 1,
//     backgroundColor: '#000', // Color of the horizontal axis line
//   },

//   percentageLabels: {
//     position: 'absolute',
//     left: -2, // Space for the labels
//     top: 0,
//     bottom: 0,
//     justifyContent: 'space-between',
//     alignItems: 'flex-start', // Align items to the start (top)
//   },

//   percentageLabel: {
//     fontSize: 10,
//     color: '#000',
//     textAlign: 'right', // Align text to the right
//     fontWeight:'600'
//   },

// });

// export default React.memo(Graph1);

// ==============================================================================================================================================
// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import NetInfo from '@react-native-community/netinfo';  // To track network status
// import Header from '../MainScreens/Header';

// const Graph1 = ({ route }) => {
//   const { waterStorageId } = route.params; // Get waterStorageId from route params
//   const [chartData, setChartData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [waterStorageName, setWaterStorageName] = useState(''); // State to store waterStorageName
//   const [isOnline, setIsOnline] = useState(false); // To track if the device is online
//   const [showStatus, setShowStatus] = useState(true); // To control showing "Online/Offline" message
//   const [selectedBar, setSelectedBar] = useState(null); // State to track selected bar for the label

//   // Function to fetch the data from the API
//   const fetchData = useCallback(async () => {
//     try {
//       const response = await axios.post('http://103.137.36.215:4500/api/levelReports/getLevelFlowHours20', {
//         waterStorageId: waterStorageId, // Use dynamic waterStorageId
//         date: '2024-09-26',
//       });

//       if (response.data.success === 1) {
//         // Set the waterStorageName from the API response
//         setWaterStorageName(response.data.info.waterStorageName);

//         // Map the API response to your chart format
//         const data = response.data.message.map(item => ({
//           time: item.fixtime.substring(11, 16), // Extract HH:mm from fixtime
//           value: item.percentage,
//           color: getBarColor(item.percentage), // Dynamically set the color
//         }));
//         setChartData(data);

//         // Save the data to AsyncStorage for offline use
//         await AsyncStorage.setItem(`waterStorage_${waterStorageId}`, JSON.stringify({
//           waterStorageName: response.data.info.waterStorageName,
//           chartData: data
//         }));
//       }
//     } catch (err) {
//       console.error('API Error:', err);

//       // Check if the error is a network error
//       if (err.message === 'Network Error') {
//         // Try to load the cached data from AsyncStorage
//         const cachedData = await AsyncStorage.getItem(`waterStorage_${waterStorageId}`);
//         if (cachedData) {
//           const parsedData = JSON.parse(cachedData);
//           setWaterStorageName(parsedData.waterStorageName);
//           setChartData(parsedData.chartData);
//         } else {
//           // If there's no cached data, show an offline message
//           setError('No internet connection and no cached data available.');
//         }
//       } else {
//         // Handle other types of errors (e.g., server errors)
//         setError('Failed to fetch data from the server.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   }, [waterStorageId]);

//   // Determine bar color based on percentage
//   const getBarColor = (percentage) => {
//     if (percentage <= 20) return 'rgba(255, 99, 71, 0.8)'; // Red for low values
//     if (percentage <= 50) return 'rgba(255, 165, 0, 0.8)'; // Orange for mid values
//     return 'rgba(144, 238, 144, 0.8)'; // Green for high values
//   };

//   // Check network status
//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       setIsOnline(state.isConnected);  // Set the online status
//     });

//     return () => unsubscribe();  // Clean up the listener
//   }, []);

//   // Hide the online/offline status after 2 seconds
//   useEffect(() => {
//     if (isOnline !== null) {
//       setShowStatus(true);
//       setTimeout(() => {
//         setShowStatus(false);
//       }, 2000);
//     }
//   }, [isOnline]);

//   // Fetch data when component mounts or waterStorageId changes
//   useEffect(() => {
//     if (waterStorageId) {
//       fetchData();
//     }
//   }, [waterStorageId, fetchData]);

//   const handleBarPress = (index) => {
//     // Toggle label display on click
//     setSelectedBar(prevState => (prevState === index ? null : index));
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadeContainer}>
//         <ActivityIndicator size="large" color="#3b82f6" />
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <Header/>

//       {/* Display waterStorageName */}
//       <View style={styles.waterStorageInfo}>
//         <Text style={styles.waterStorageName}>{waterStorageName}</Text>
//       </View>

//       {/* Main Content */}
//       <ScrollView contentContainerStyle={styles.mainContent}>
//         <View style={styles.chartContainer}>
//           <View style={styles.chartHeaderRight}>
//             <Text style={{ marginRight: 10, color: '#4A4A4A', fontWeight: 'bold' }}>2024-12-11</Text>
//             <Image source={require('../../assets/default.png')} style={styles.icon} />
//             <Image source={require('../../assets/detail.png')} style={styles.icon}/>
//             <Image source={require('../../assets/investigate.png')} style={styles.icon}/>
//           </View>

//           {/* Axis Lines and Percentage Labels */}
//           <View style={styles.axisContainer}>
//             {/* Vertical Axis Line */}
//             <View style={styles.axisLineVertical} />
//             {/* Horizontal Axis Line */}
//             <View style={styles.axisLineHorizontal} />

//             {/* Percentage Labels */}
//             <View style={styles.percentageLabels}>
//               {Array.from({ length: 11 }, (_, index) => (
//                 <Text key={index} style={styles.percentageLabel}>
//                   {100 - index * 10}%
//                 </Text>
//               ))}
//             </View>
//           </View>

//           {/* Chart Legend */}
//           <View style={styles.legend}>
//             <View style={styles.legendItem}>
//               <View style={[styles.legendColor, { backgroundColor: 'rgba(255, 99, 71, 0.8)' }]} />
//               <Text style={{color:'#000'}}>Increasing</Text>
//             </View>
//             <View style={styles.legendItem}>
//               <View style={[styles.legendColor, { backgroundColor: 'rgba(144, 238, 144, 0.8)' }]} />
//               <Text style={{color:'#000'}}>Decreasing</Text>
//             </View>
//             <View style={styles.legendItem}>
//               <View style={[styles.legendColor, { backgroundColor: 'rgba(255, 165, 0, 0.8)' }]} />
//               <Text style={{color:'#000'}}>Stable</Text>
//             </View>
//           </View>

//           {/* Chart Bars */}
//           <ScrollView horizontal contentContainerStyle={styles.chart}>
//             {chartData.map((item, index) => (
//               <TouchableOpacity key={index} onPress={() => handleBarPress(index)}>
//                 <View style={[styles.barContainer,styles.chart]}>
//                   <View style={[styles.bar, { height: `${item.value}%`, backgroundColor: item.color }]}>
//                     {selectedBar === index && (
//                       <View style={[styles.barLabelPopup, { backgroundColor: item.color }]}>
//                         <Text style={styles.popupText}>{item.time} - {item.value}%</Text>
//                       </View>
//                     )}
//                   </View>
//                   <Text style={styles.barLabel}>{item.time}</Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//           <Text style={{ alignSelf: 'center', color: '#000' }}>Time</Text>
//         </View>
//       </ScrollView>

//       {/* Show Online/Offline Status */}
//       {showStatus && (
//         <View style={[styles.statusContainer, { backgroundColor: isOnline ? '#48bb78' : '#f56565' }]}>
//           <Text style={styles.statusText}>{isOnline ? 'Online...' : 'Offline!!!'}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   loadeContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   waterStorageInfo: {
//     padding: 5,
//     alignItems: 'center',
//     backgroundColor: '#f7fafc',
//   },
//   waterStorageName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   statusContainer: {
//     padding: 10,
//     borderRadius: 4,
//     marginBottom: 0,
//     alignItems: 'center',
//   },
//   statusText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   chartContainer: {
//     backgroundColor: '#fff',
//   },
//   chartHeaderRight: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     padding: 15,
//   },
//   chart: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     height: 350,
//     marginLeft: 0,
//     marginTop:20
//   },
//   barContainer: {
//     alignItems: 'center',
//     width: 30,
//     marginHorizontal: 5,
//     marginVertical: 77,
//     marginStart: 11,
//   },
//   bar: {
//     width: '70%',
//   },
//   barLabel: {
//     marginTop: 8,
//     fontSize: 12,
//     transform: [{ rotate: '-60deg' }],
//     color: '#736b6b',
//     top: 30,
//   },
//   icon: {
//     height: 32,
//     width: 32,
//     justifyContent: 'space-between',
//     marginLeft: 15,
//     opacity: 10,
//   },
//   legend: {
//     flexDirection: 'row',
//     marginBottom: 16,
//     marginLeft: 40,
//   },
//   legendItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 16,
//   },
//   legendColor: {
//     width: 16,
//     height: 16,
//     // borderRadius: 1,
//     borderTopEndRadius:4,
//     borderBottomLeftRadius: 4,
//     borderTopStartRadius:4,
//     marginRight: 4,
//   },
//   barLabelPopup: {
//     position: 'absolute',
//     top: -80,
//     padding: 5,
//     borderRadius: 4,
//     zIndex: 10,
//     minWidth: 70,
//     alignItems: 'center',
//     elevation:1
//   },
//   popupText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   axisContainer: {
//     position: 'absolute',
//     left: 0,
//     top: 95,
//     bottom: 96,
//     right: 0,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
//   axisLineVertical: {
//     position: 'absolute',
//     left: 2,
//     top: 0,
//     bottom: 0,
//     width: 1,
//     backgroundColor: '#000',
//   },
//   axisLineHorizontal: {
//     position: 'absolute',
//     left: 2,
//     bottom: 0,
//     right: 0,
//     height: 1,
//     backgroundColor: '#000',
//   },
//   percentageLabels: {
//     position: 'absolute',
//     left: 7,
//     top: 0,
//     bottom: 0,
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },
//   percentageLabel: {
//     fontSize: 10,
//     color: '#000',
//     textAlign: 'right',
//     fontWeight: '600',
//   },
// });

// export default React.memo(Graph1);

// ==============================================================================================================================================

import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo'; // To track network status
import Header from '../MainScreens/Header';
import Modal from 'react-native-modal';
import {Calendar} from 'react-native-calendars';
import moment from 'moment'; // Import moment.js
import Fontisto from 'react-native-vector-icons/Fontisto';

const Graph1 = ({route}) => {
  const {waterStorageId} = route.params; // Get waterStorageId from route params
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [waterStorageName, setWaterStorageName] = useState(''); // State to store waterStorageName
  const [isOnline, setIsOnline] = useState(false); // To track if the device is online
  const [showStatus, setShowStatus] = useState(true); // To control showing "Online/Offline" message
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  ); // current date
  const [formattedDate, setFormattedDate] = useState(
    moment().format('DD-MM-YYYY'),
  ); // current date
  const [isModalVisible, setIsModalVisible] = useState(false); // To control modal visibility
  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));
  // Function to fetch the data from the API
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post(
        'http://103.137.36.215:4500/api/levelReports/getLevelFlowHours20',
        {
          waterStorageId: waterStorageId, // Use dynamic waterStorageId
          date: selectedDate, // Use the selected date (in API format)
        },
      );

      if (response.data.success === 1) {
        setWaterStorageName(response.data.info.waterStorageName);
        const data = response.data.message.map(item => ({
          time: item.fixtime.substring(11, 16), // Extract HH:mm from fixtime
          value: item.percentage,
          color: getBarColor(item.percentage), // Dynamically set the color
        }));
        setChartData(data);

        // Save the data to AsyncStorage for offline use
        await AsyncStorage.setItem(
          `waterStorage_${waterStorageId}`,
          JSON.stringify({
            waterStorageName: response.data.info.waterStorageName,
            chartData: data,
          }),
        );
      }
    } catch (err) {
      console.error('API Error:', err);

      if (err.message === 'Network Error') {
        const cachedData = await AsyncStorage.getItem(
          `waterStorage_${waterStorageId}`,
        );
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setWaterStorageName(parsedData.waterStorageName);
          setChartData(parsedData.chartData);
        } else {
          setError('No internet connection and no cached data available.');
        }
      } else {
        setError('Failed to fetch data from the server.');
      }
    } finally {
      setLoading(false);
    }
  }, [waterStorageId, selectedDate]);

  // Determine bar color based on percentage
  const getBarColor = percentage => {
    if (percentage <= 20) return 'rgba(255, 99, 71, 0.8)'; // Red for low values
    if (percentage <= 50) return 'rgba(255, 165, 0, 0.8)'; // Orange for mid values
    return 'rgba(144, 238, 144, 0.8)'; // Green for high values
  };

  // Check network status
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected !== isOnline) {
        setIsOnline(state.isConnected);
        setShowStatus(true);
        setTimeout(() => {
          setShowStatus(false);
        }, 2000);
      }
    });
    return () => unsubscribe();
  }, [isOnline]);

  // Fetch data when component mounts or waterStorageId/selectedDate changes
  useEffect(() => {
    if (waterStorageId) {
      fetchData();
    }
  }, [waterStorageId, selectedDate, fetchData]);

  // Handle date selection
  const handleDateChange = date => {
    const newDate = date.dateString;
    setSelectedDate(newDate); // Set the selected date (API format YYYY-MM-DD)
    const formatted = moment(newDate).format('DD-MM-YYYY'); // Format the date for display (DD-MM-YYYY)
    setFormattedDate(formatted);
    setIsModalVisible(false); // Close the modal
  };

  if (loading) {
    return (
      <View style={styles.loadeContainer}>
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.waterStorageInfo}>
        <Text style={styles.waterStorageName}>{waterStorageName}</Text>
        <View style={{alignSelf: 'flex-end', marginTop: 10}}>
          <Text style={{color: '#000', right: 2, top: 12}}>Selected Date</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Text
              style={{
                marginRight: 20,
                color: '#000',
                fontWeight: '700',
                borderRadius: 20,
              }}>
              {formattedDate} {/* Display date in DD-MM-YYYY format */}
              {/* <Fontisto name='date' size={20} color="black"/> */}
              <Image
                source={require('../../assets/CalenderIcon.png')}
                style={styles.icon}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.chartContainer}>
          <View style={styles.chartHeaderRight}>
            <Text
              style={{marginRight: 10, color: '#4A4A4A', fontWeight: 'bold'}}>
              {formattedDate} {/* Display date in DD-MM-YYYY format */}
            </Text>
            <Image
              source={require('../../assets/default.png')}
              style={styles.icon}
            />
            <Image
              source={require('../../assets/detail.png')}
              style={styles.icon}
            />
            <Image
              source={require('../../assets/investigate.png')}
              style={styles.icon}
            />
          </View>

          <View style={styles.axisContainer}>
            <View style={styles.axisLineVertical} />
            <View style={styles.axisLineHorizontal} />

            <View style={styles.percentageLabels}>
              {Array.from({length: 11}, (_, index) => (
                <Text key={index} style={styles.percentageLabel}>
                  {100 - index * 10}%
                </Text>
              ))}
            </View>
          </View>

          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendColor,
                  {backgroundColor: 'rgba(255, 99, 71, 0.8)'},
                ]}
              />
              <Text style={{color: '#000'}}>Increasing</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendColor,
                  {backgroundColor: 'rgba(144, 238, 144, 0.8)'},
                ]}
              />
              <Text style={{color: '#000'}}>Decreasing</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[
                  styles.legendColor,
                  {backgroundColor: 'rgba(255, 165, 0, 0.8)'},
                ]}
              />
              <Text style={{color: '#000'}}>Stable</Text>
            </View>
          </View>

          <ScrollView horizontal contentContainerStyle={styles.chart}>
            {chartData.map((item, index) => (
              <View key={index} style={styles.barContainer}>
                <Text style={styles.barLabel2}>{item.value}%</Text>
                <View
                  style={[
                    styles.bar,
                    {height: `${item.value}%`, backgroundColor: item.color},
                  ]}
                />
                <Text style={styles.barLabel}>{item.time}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={{alignSelf: 'center', color: '#000'}}>Time</Text>
        </View>
      </ScrollView>

      {showStatus && (
        <View
          style={[
            styles.statusContainer,
            {backgroundColor: isOnline ? '#48bb78' : '#f56565'},
          ]}>
          <Text style={styles.statusText}>
            {isOnline ? 'Online...' : 'Offline!!!'}
          </Text>
        </View>
      )}

      {/* Modal for Calendar */}
      <Modal
        animationType="fade"
        isVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}>
        <View style={styles.modalContent}>
          <Calendar
            onDayPress={handleDateChange}
            hideExtraDays={true}
            markedDates={{
              [selectedDate]: {selected: true, selectedColor: 'lightblue'},
            }}
            // minDate={moment().format('YYYY-MM-DD')}
            maxDate={moment().format('YYYY-MM-DD')}
            theme={{
              selectedDayBackgroundColor: '#3b82f6',
              todayTextColor: '#00adf5',
            }}
            disableArrowRight={moment().format('YYYY-MM') === currentMonth} // Disable the right arrow only for current month
            onMonthChange={month =>
              setCurrentMonth(month.dateString.substring(0, 7))
            }
            // enableSwipeMonths={true}
          />
        </View>
      </Modal>
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  loadeContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  mainContent: {paddingHorizontal: 10},
  waterStorageInfo: {
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#f7fafc',
    // backgroundColor:'#fff'
  },
  waterStorageName: {fontSize: 18, fontWeight: 'bold', color: '#333'},
  chartContainer: {backgroundColor: '#fff', marginLeft: 4},
  chartHeaderRight: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 25,
  },
  axisContainer: {
    position: 'absolute',
    left: 0,
    top: 95,
    bottom: 96,
    right: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  axisLineVertical: {
    position: 'absolute',
    left: -5,
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#000',
  },
  axisLineHorizontal: {
    position: 'absolute',
    left: -5,
    bottom: 0,
    right: 0,
    height: 1,
    backgroundColor: '#000',
  },
  percentageLabels: {
    position: 'absolute',
    left: -2,
    top: 0,
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  percentageLabel: {
    fontSize: 10,
    color: '#000',
    textAlign: 'right',
    fontWeight: '600',
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 350,
    marginLeft: 5,
  },
  barContainer: {
    alignItems: 'center',
    width: 30,
    marginVertical: 54,
    marginStart: 10,
  },
  bar: {width: '70%'},
  barLabel: {
    marginTop: 8,
    fontSize: 12,
    transform: [{rotate: '-60deg'}],
    color: '#736b6b',
    top: 5,
  },
  barLabel2: {fontSize: 11, fontWeight: '700', color: '#736b6b'},
  icon: {height: 32, width: 32, marginLeft: 15},
  legend: {flexDirection: 'row', marginBottom: 16, marginLeft: 40},
  legendItem: {flexDirection: 'row', alignItems: 'center', marginRight: 16},
  legendColor: {width: 16, height: 16, borderRadius: 8, marginRight: 4},
  statusContainer: {
    padding: 10,
    borderRadius: 4,
    marginBottom: 0,
    alignItems: 'center',
  },
  statusText: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default React.memo(Graph1);
