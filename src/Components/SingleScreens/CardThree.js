// import React from 'react';
// import {View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
// import {Image} from 'react-native-elements';
// import {useEffect, useRef} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { useNavigation } from '@react-navigation/native';

// const Card3 = ({navigate, data}) => {
//   const navigation = useNavigation()

//   return (
//     <View style={styles.container}>
//         <View style={styles.card}>
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardTitle}>Tukum Sumpwell Chandrapur</Text>
//             <Icon name="map-marker-alt" size={20} color="darkblue" />
//           </View>
//           <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
//           <View
//             style={{
//               borderWidth: 2,
//               borderBottomColor: 'lightgrey',
//               borderTopWidth: 0,
//               borderLeftWidth: 0,
//               borderRightWidth: 0,
//               height: 10,
//               width: 300,
//             }}></View>

//           <View style={styles.circleContainer}>
//             <View style={[styles.circle, styles.warningCircle]}>
//               <Image
//                 source={require('../../assets/warning.png')}
//                 style={styles.circleImage}
//               />
//             </View>
//             {/* //  circleContainer: {
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   circle: {
//     width: 96,
//     height: 96,
//     borderRadius: 48,
//     borderWidth: 5,
//     borderColor: 'orange',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   warningCircle: {
//     borderColor: 'black',
//   }, */}
//           </View>
//           <View style={styles.cardContent}>
//             <Text>0 Meters tank filled</Text>
//             <Text>0 Lakh liters</Text>
//             <Icon
//               name="arrow-up"
//               size={18}
//               color="green"
//               style={styles.arrow}
//             />
//           </View>
//           <Text style={styles.cardFooter}>Update At 2024-06-27 17:29 PM</Text>
//           <Icon
//             name="arrow-right"
//             size={18}
//             color="darkblue"
//             style={styles.cardArrow}
//           />
//         </View>        
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(219,219,227)',
//     padding:14
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 20,
//     marginBottom: 30,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 6,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   cardSubtitle: {
//     color: '#000',
//   },
//   cardText: {
//     marginTop: 10,
//     marginBottom: 5,
//     color: 'black',
//   },
//   circleContainer: {
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   circle: {
//     width: 96,
//     height: 96,
//     borderRadius: 48,
//     borderWidth: 5,
//     borderColor: 'orange',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   warningCircle: {
//     borderColor: 'black',
//   },
//   successCircle: {
//     borderColor: '#10b981',
//   },
//   cardContent: {
//     alignItems: 'center',
//   },
//   cardFooter: {
//     color: '#000',
//     fontSize: 12,
//     marginTop: 14,
//   },
//   cardFooter2: {
//     color: '#000',
//     fontSize: 12,
//     marginTop: 6,
//   },
//   cardArrow: {
//     alignSelf: 'flex-end',
//     marginTop: -6,
//     marginBottom: 2,
//   },
//   cardImage: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     // marginBottom: 20,
//     marginLeft: 94,
//     marginTop: 8,
//   },
//   circleImage: {
//     width: 55,
//     height: 55,
//     borderRadius: 22,
//     alignSelf: 'center',
//     marginBottom: 5,
//   },
//   arrow: {
//     alignSelf: 'flex-end',
//     marginTop: 0,
//   },
// });

// export default Card3;


// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Animated,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import {Easing} from 'react-native';
// import Svg, {Defs, ClipPath, Circle, Rect, Path, G} from 'react-native-svg';
// import {useNavigation} from '@react-navigation/native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// const Card1 = ({navigation, data}) => {

//   const {
//     waterStorageName,
//     capacity,
//     unit,
//     latitude,
//     longitude,
//     higherLevel,
//     lowerLevel,
//     registeredOn,
//     licenseStatus,
//     devices
//   } = data; // Destructuring the props


//   const naivigation = useNavigation();
//   const waterHeight = useRef(new Animated.Value(70)).current;
//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(waterHeight, {
//           toValue: 80,
//           duration: 1000,
//           useNativeDriver: false,
//         }),
//         Animated.timing(waterHeight, {
//           toValue: 70,
//           duration: 1000,
//           useNativeDriver: false,
//         }),
//       ]),
//     ).start();
//   }, [waterHeight]);

//   // ============================================================================================

//   const waterRiseAnim = useRef(new Animated.Value(100)).current;
//   const waveAnim1 = useRef(new Animated.Value(0)).current;
//   const waveAnim2 = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Animate water rising
//     Animated.timing(waterRiseAnim, {
//       toValue: 40,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();

//     // Animate waves
//     Animated.loop(
//       Animated.timing(waveAnim1, {
//         toValue: 1,
//         duration: 4000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }),
//     ).start();

//     Animated.loop(
//       Animated.timing(waveAnim2, {
//         toValue: 1,
//         duration: 3000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }),
//     ).start();
//   }, []);

//   const waterTranslateY = waterRiseAnim.interpolate({
//     inputRange: [0, 100],
//     outputRange: ['0%', '100%'],
//   });

//   const waveTransform1 = waveAnim1.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0', '-100'],
//   });

//   const waveTransform2 = waveAnim2.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0', '-100'],
//   });

//   // =========================================================================================

//   return (
//     <View style={[styles.container]}>
//       {/* Card 1 */}
//       <View style={styles.card}>
//         <View style={styles.cardHeader}>
//           <View>
//             {/* <Text style={styles.cardTitle}>Ramchandra Dombivli(E) KDMC</Text> */}
//             <Text style={styles.cardTitle}>{waterStorageName}</Text>

//             <Text style={[styles.cardSubtitle]}>Capacity: {capacity} {unit}</Text>
//             <View
//               style={{
//                 borderWidth: 1,
//                 borderBottomColor: 'lightgrey',
//                 borderTopWidth: 0,
//                 borderLeftWidth: 0,
//                 borderRightWidth: 0,
//                 height: 10,
//                 width: 300,
//               }}></View>
//           </View>
//           <Icon
//             name="map-marker-alt"
//             size={18}
//             color="black"
//             style={{marginLeft: -20}}
//           />
//         </View>
//         <View style={styles.cardContent}>
//           <View style={[styles.container, {backgroundColor: ''}]}>
//             <Svg width="130" height="150" viewBox="-2 0 110 110">
//               <Defs>
//                 <ClipPath id="circleClip">
//                   <Circle cx="50" cy="50" r="45" />
//                 </ClipPath>
//               </Defs>

//               {/* Circle container */}
//               <Circle
//                 cx="50"
//                 cy="50"
//                 r="50"
//                 fill="none"
//                 stroke="lightblue"
//                 strokeWidth="3"
//               />
//               {/* Water */}
//               <G clipPath="url(#circleClip)">
//                 <AnimatedPath
//                   d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
//                   fill="lightblue"
//                   style={{transform: [{translateX: waveTransform2}]}}
//                 />
//                 <AnimatedPath
//                   d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
//                   fill="lightblue"
//                   style={{transform: [{translateX: waveTransform2}]}}
//                 />
//                 <Text
//                   style={{
//                     marginTop: 45,
//                     marginLeft: 45,
//                     fontWeight: '900',
//                     color: 'black',
//                     fontSize: 18,
//                   }}>
//                   {/* 76% */}
//                   {devices && devices.length ? devices[0].percentage : '0'}
//                 </Text>
//               </G>
//             </Svg>
//           </View>
//           <View style={styles.cardText}>
//             <Text style={[styles.cardDetail, {marginBottom: -3}]}>
//               3.71 Meters tank filled 
//             </Text>
//             <View
//               style={{
//                 borderWidth: 1,
//                 borderBottomColor: 'lightgrey',
//                 borderTopWidth: 0,
//                 borderLeftWidth: 0,
//                 borderRightWidth: 0,
//                 height: 10,
//                 width: 120,
//                 marginLeft: 33,
//               }}></View>
//             <Text style={[styles.cardDetail, {marginTop: 5}]}>
//               12.92 Lakh liters
//             </Text>
//             <View style={{marginLeft: 165, marginTop: -10}}>
//               <Icon name="arrow-up" size={18} color={'green'} style={{}} />
//             </View>
//           </View>
//         </View>
//         <View
//           style={{
//             borderWidth: 2,
//             borderBottomColor: 'lightgrey',
//             borderTopWidth: 0,
//             borderLeftWidth: 0,
//             borderRightWidth: 0,
//             height: 10,
//             width: 300,
//             marginBottom: 15,
//           }}></View>
//         <View style={styles.cardFooter}>
//           <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
//           <TouchableOpacity onPress={() => naivigation.navigate('Card1')}>
//             <Icon name="arrow-right" size={18} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View></View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   content: {
//     padding: 5,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     alignSelf: 'center',
//     color: 'black',
//   },
//   cardContainer: {
//     flexDirection: 'column',
//     spaceBetween: 16,
//     marginBottom: 45,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     // backgroundColor: ('light' ? 'black'  : '#FFFFFF') ,
//     padding: 12,
//     borderRadius: 20,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 2,
//     bottom: 0,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color:'#000'
//   },
//   cardSubtitle: {
//     color: '#000',
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   percentage: {
//     // position: 'absolute',
//     // top: '50%',
//     // left: '50%',
//     // transform: [{ translateX: -50 }, { translateY: -50 }],
//     color: 'white',
//     fontWeight: 'bold',
//     marginTop: 35,
//     alignSelf: 'center',
//   },
//   cardText: {
//     marginLeft: 16,
//   },
//   cardDetail: {
//     color: '#666',
//     marginLeft: 30,
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cardUpdate: {
//     color: '#666',
//   },
//   circleImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 22,
//     alignSelf: 'center',
//     marginTop: 20,
//     marginLeft: -50,
//   },
// });

// export default Card1;
// const AnimatedRect = Animated.createAnimatedComponent(Rect);
// const AnimatedPath = Animated.createAnimatedComponent(Path);

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Card3 = ({route, data}) => {
  // const { waterStorageId} = route.params; // Retrieve the passed params
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* <TouchableOpacity>
            <Icon name="bars" size={24} color="#fff" />
          </TouchableOpacity> */}
          <Text style={styles.headerText}>Welcome user</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerDate}>Date: 06-12-2024</Text>
          <Text style={styles.headerTime}>Time: 11:28:00</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.backButtonContainer}>
          {/* <TouchableOpacity>
            <Icon name="arrow-left" size={24} color="#008080" />
          </TouchableOpacity> */}
          <View style={{flexDirection:'column'}}>
          <Text style={styles.profileText}>PROFILE</Text>
          <Text style={{fontSize:20, marginLeft:15,fontWeight:'700',color:'#0f0f0f'}}>Ramchandra Dombivli(E) KDMC</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.statusContainer}>
            <View style={styles.statusCircle}>
              <Text style={styles.statusText}>84%</Text>
            </View>
            <View style={styles.statusInfo}>
              <Text style={styles.statusLabel}>Current Status</Text>
              <Text style={styles.statusValue}>14.28 Lac Liter</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Total Capacity</Text>
              <Text style={styles.infoValue}>1,700,000 L</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Type</Text>
              <Text style={styles.infoValue}>Square/Concrete/Overhead</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Unit</Text>
              <Text style={styles.infoValue}>Liter</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Human Resource</Text>
              <Text style={styles.infoValue}>dolphin resource</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>License Active Date</Text>
              <Text style={styles.infoValue}>30-06-2023</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>License Expire Date</Text>
              <Text style={styles.infoValue}>30-07-2025</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Record Received At</Text>
              <Text style={styles.infoValue}>2024-12-06 11:27</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Certificate</Text>
              <Icon name="file" size={24} color="#008080" />
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Show Graph</Text>
              <TouchableOpacity style={styles.showButton} onPress={()=>navigation.navigate('Graph1')}>
                <Icon name="line-chart" size={20} color="#fff" />
                <Text style={styles.showButtonText}>SHOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#008080',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  headerDate: {
    color: '#fff',
  },
  headerTime: {
    color: '#fff',
  },
  content: {
    padding: 16,
  },
  backButtonContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 16,
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    // marginLeft: 8,
    textAlign:'center'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statusCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusInfo: {
    marginLeft: 16,
  },
  statusLabel: {
    color: '#666',
  },
  statusValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoContainer: {
    marginTop: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    color: '#666',
  },
  infoValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  showButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008080',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  showButtonText: {
    color: '#fff',
    marginLeft: 8,
  },
});

export default Card3;

// =======================================================================================================

// LogoutButton.js
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const Card3 = ({ onLogout }) => {
//   const handleLogout = () => {
//     // You can add your logout logic here
//     Alert.alert("Logged Out", "You have been logged out successfully.");
//     if (onLogout) {
//       onLogout();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f8ff', // Light blue background
//   },
//   button: {
//     backgroundColor: '#007BFF', // Blue color
//     paddingVertical: 15,
//     paddingHorizontal: 30,
//     borderRadius: 5,
//     elevation: 3, // For Android shadow
//     shadowColor: '#000', // For iOS shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//   },
//   buttonText: {
//     color: '#fff', // White text
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Card3;



