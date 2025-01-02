// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import {View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';


// const Card5 = ({navigation}) =>{
//   const navigate = useNavigation()
//     return (
//         <View style={styles.container}>
//             <View style={styles.card}>
//           <View style={styles.cardHeader}>
//             <Text style={styles.cardTitle}>Birla Supriya Kalyan</Text>
//             <Icon name="map-marker-alt" size={20} color="darkblue" />
//           </View>
//           <Text style={styles.cardSubtitle}>Capacity 1500000 L</Text>
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
//             <View style={[styles.circle, styles.expiredCircle]}>
//               <View
//                 style={{
//                   height: 80,
//                   width: 80,
//                   borderRadius: 400,
//                   backgroundColor: 'lightgrey',
//                 }}>
//                 <Text style={styles.expiredText}>EXPIRED</Text>
//               </View>
//             </View>
//           </View>
//           <View style={[styles.cardContent]}>
//             <Text>-------------</Text>
//             <Text>--------------</Text>
//           </View>
//           {/* <View style={{ borderWidth:2, borderBottomColor:'lightgrey',borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,height:10,width:300}}></View> */}
//           <Text style={styles.cardFooter}>Expired On 14/09/2024</Text>
//           <TouchableOpacity onPress={()=>navigation.navigate('Profile2')}>
//           <Icon
//             name="arrow-right"
//             size={18}
//             color="darkblue"
//             style={styles.cardArrow}
//           />
//           </TouchableOpacity>
//         </View>
//         </View>
//         )

// }

// const styles = StyleSheet.create({
//     container:{
//         padding:16,
//     },
//     card: {
//       backgroundColor: 'white',
//       padding: 20,
//       borderRadius: 20,
//       marginBottom: 10,
//       shadowColor: '#000',
//       shadowOffset: {width: 0, height: 2},
//       shadowOpacity: 0.1,
//       shadowRadius: 20,
//       elevation: 6,
//     },
//     cardHeader: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     cardTitle: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     cardSubtitle: {
//       color: '#000',
//     },
//     cardText: {
//       marginTop: 10,
//       marginBottom: 5,
//       color: 'black',
//     },
//     circleContainer: {
//       alignItems: 'center',
//       marginVertical: 16,
//     },
//     circle: {
//       width: 96,
//       height: 96,
//       borderRadius: 48,
//       borderWidth: 5,
//       borderColor: 'orange',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     circle2: {
//       width: 96,
//       height: 96,
//       borderRadius: 48,
//       borderWidth: 4,
//       borderColor: 'green',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     circleText: {
//       fontSize: 20,
//       fontWeight: 'bold',
//       color: 'black',
//     },
//     expiredCircle: {
//       borderColor: 'lightgrey',
//       backgroundColor: 'white',
//     },
//     expiredText: {
//       color: '#ef4444',
//       textAlign: 'center',
//       marginTop: 30,
//       fontWeight: '700',
//     },
//     cardContent: {
//       alignItems: 'center',
//     },
//     cardFooter: {
//       color: '#000',
//       fontSize: 12,
//       marginTop: 14,
//     },
//     cardFooter2: {
//       color: '#000',
//       fontSize: 12,
//       marginTop: 6,
//     },
//     cardArrow: {
//       alignSelf: 'flex-end',
//       marginTop: -6,
//       marginBottom: 2,
//     },
//     arrow: {
//       alignSelf: 'flex-end',
//       marginTop: 0,
//     },
//   });

// export default Card5

// ======================================================================================================================================================================
// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window'); // Getting screen width and height

// const Card5 = ({route, data}) => {
//   const {
//     waterStorageName,
//     capacity,
//     unit,
//     devices,
//     licenseExpireOn
//   } = data;
//   const navigation = useNavigation(); // Correct usage of useNavigation
//   const device = devices && devices.length > 0 ? devices[0] : {};

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <View style={styles.cardHeader}>
//           <Text style={styles.cardTitle}>{waterStorageName}</Text>
//           <Icon name="map-marker-alt" size={20} color="darkblue" />
//         </View>
//         <Text style={styles.cardSubtitle}>Capacity: {capacity} {unit}</Text>
//         <View style={styles.separator} />
//         <View style={{flexDirection:'row'}}>
//         <View style={styles.circleContainer}>
//           <View style={[styles.circle, styles.expiredCircle]}>
//             <View style={styles.expiredContent}>
//               <Text style={styles.expiredText}>EXPIRED</Text>
//             </View>
//           </View>
//         </View>
//         <View style={styles.cardContent}>
//           <Text>-------------------</Text>
//           <Text>--------------</Text>
//         </View>
//         </View>
//         <View style={styles.separator2}>
//         <Text style={styles.cardFooter}>Expired On {licenseExpireOn.split('-').reverse().join('-')}</Text>
//         </View>
//         <TouchableOpacity onPress={() => navigation.navigate('Profile2', {
//                   waterStorageId: data.waterStorageId,
//                   percentage: device.percentage,
//                 })}>
//           <Icon
//             name="arrow-right"
//             size={18}
//             color="darkblue"
//             style={styles.cardArrow}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     padding: 12,
//     borderRadius: 20,
//     marginBottom: 6,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   cardTitle: {
//     fontSize: width < 350 ? 16 : 18, // Adjust font size for smaller screens
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   cardSubtitle: {
//     color: '#000',
//     // fontSize: width < 350 ? 12 : 16, // Responsive subtitle font size
//   },
//   separator: {
//     borderWidth: 1,
//     borderBottomColor: 'lightgrey',
//     height: 10,
//     width: '100%',
//     borderTopWidth: 0,
//     borderLeftWidth: 0,
//     borderRightWidth: 0,
//   },
//   separator2: {
//     borderTopWidth: 1,
//     borderTopColor:'lightgrey',
//     width:'100%',
//   },
//   circleContainer: {
//     alignItems: 'center',
//     marginVertical: 16,
//     flexDirection:'row'
//   },
//   circle: {
//     width: width < 350 ? 80 : 96, // Make circle smaller on smaller screens
//     height: width < 350 ? 80 : 96,
//     borderRadius: 48,
//     borderWidth: 5,
//     borderColor: 'orange',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   expiredCircle: {
//     borderColor: 'lightgrey',
//     backgroundColor: 'white',
//   },
//   expiredContent: {
//     height: 80,
//     width: 80,
//     borderRadius: 400,
//     backgroundColor: 'lightgrey',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   expiredText: {
//     color: '#ef4444',
//     textAlign: 'center',
//     fontWeight: '700',
//   },
//   cardContent: {
//     justifyContent:'center',
//     alignItems: 'center',
//     marginHorizontal: 50
//   },
//   cardFooter: {
//     color: '#000',
//     fontSize: 12,
//     marginTop: 6,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   cardArrow: {
//     alignSelf: 'flex-end',
//     marginTop: 0,
//     marginBottom: 0,
//   },
// });

// export default Card5;


// ======================================================================================================================================================================

import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreens/ProfileScreen'; // Assuming the path to ProfileScreen

const { width, height } = Dimensions.get('window'); // Getting screen width and height

const Card5 = ({ data }) => {
  const { waterStorageName, capacity, unit, devices, licenseExpireOn } = data;
  const navigation = useNavigation(); // Correct usage of useNavigation
  const device = devices && devices.length > 0 ? devices[0] : {};

  // State to control flip animation
  const [flipped, setFlipped] = useState(false);
  const flipAnimation = useMemo(() => new Animated.Value(0), []);

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    Animated.spring(flipAnimation, {
      toValue: flipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setFlipped((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Front Side of the Card */}
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View
            style={{
              transform: [{ rotateY: frontInterpolate }],
              backfaceVisibility: 'hidden',
            }}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{waterStorageName}</Text>
              <Icon name="map-marker-alt" size={20} color="darkblue" />
            </View>
            <Text style={styles.cardSubtitle}>
              Capacity: {capacity} {unit}
            </Text>
            <View style={styles.separator} />
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.circleContainer}>
                <View style={[styles.circle, styles.expiredCircle]}>
                  <View style={styles.expiredContent}>
                    <Text style={styles.expiredText}>EXPIRED</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardContent}>
                <Text>-------------------</Text>
                <Text>--------------</Text>
              </View>
            </View>
            <View style={styles.separator2}>
              <Text style={styles.cardFooter}>
                Expired On {licenseExpireOn.split('-').reverse().join('-')}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Profile2', {
                  waterStorageId: data.waterStorageId,
                  percentage: device.percentage,
                })
              }
            >
              {/* <Icon name="arrow-right" size={18} color="darkblue" style={styles.cardArrow} /> */}
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>

        {/* Back Side of the Card */}
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View
            style={{
              transform: [{ rotateY: backInterpolate }],
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backfaceVisibility: 'hidden',
            }}
          >
            <ProfileScreen
              route={{
                params: {
                  waterStorageId: data.waterStorageId,
                  percentage: device.percentage,
                },
              }}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 20,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: width < 350 ? 16 : 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardSubtitle: {
    color: '#000',
  },
  separator: {
    borderWidth: 1,
    borderBottomColor: 'lightgrey',
    height: 10,
    width: '100%',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  separator2: {
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    width: '100%',
  },
  circleContainer: {
    alignItems: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  circle: {
    width: width < 350 ? 80 : 96,
    height: width < 350 ? 80 : 96,
    borderRadius: 48,
    borderWidth: 5,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expiredCircle: {
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  expiredContent: {
    height: 80,
    width: 80,
    borderRadius: 400,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expiredText: {
    color: '#ef4444',
    textAlign: 'center',
    fontWeight: '700',
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  cardFooter: {
    color: '#000',
    fontSize: 12,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10
  },
  cardArrow: {
    alignSelf: 'flex-end',
    marginTop: 0,
    marginBottom: 0,
  },
});

export default Card5;

