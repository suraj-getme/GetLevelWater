import React, { useEffect, useMemo, useState } from 'react';
import {View, Text, Image, StyleSheet, Pressable, Animated, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreens/ProfileScreen';
import ProfileScreen4 from '../ProfileScreens/ProfileScreen4';

const Card4 = ({navigate , data}) => {
  const {
    waterStorageName,
    capacity,
    unit,
    devices,
    licenseExpireOn
  } = data;
  const device = devices && devices.length > 0 ? devices[0] : {};
  const [percentage, setPercentage] = useState(device.percentage || 0);

  useEffect(() => {
    setPercentage(device.percentage || 0);
  }, [device]);

  const [flipped, setFlipped] = useState(false)
  const flipAnimation = useMemo(()=> new Animated.Value(0), [])

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })

  const flipCard = () => {
    Animated.spring(flipAnimation, {
      toValue: flipped? 0: 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }). start()
    setFlipped((prev)=> !prev)
  }
  
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <View style={styles.card}>
          <TouchableWithoutFeedback onPress={flipCard}>
            <Animated.View style={{
              transform: [{ rotateY: frontInterpolate}],
              backfaceVisibility: 'hidden'
            }}>
                <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{waterStorageName}</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>{capacity} {unit}</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'lightgrey',
              // borderTopWidth: 0,
              // borderLeftWidth: 0,
              // borderRightWidth: 0,
              height: 10,
              width: '100%',
            }}></View>

          <View style={styles.circleContainer}>
              <Image
                source={require('../../assets/warning.png')}
                style={styles.cardImage}
              />
          </View>
          <View>
          <Text style={styles.cardFooter}>Expired On {licenseExpireOn.split('-').reverse().join('-')}</Text>
          </View>
            </Animated.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={flipCard}>
            <Animated.View  
              style={{
                  transform: [{rotateY : backInterpolate}],
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backfaceVisibility:'hidden'
              }}>
                <ProfileScreen4 route={{
                  params: {
                    waterStorageId: data.waterStorageId,
                  }
                }}/>

            </Animated.View>
          </TouchableWithoutFeedback>
          {/* <View>
          <Text style={styles.cardFooter}>Expired On {licenseExpireOn.split('-').reverse().join('-')}</Text>
          <Pressable onPress={()=>navigation.navigate('Profile4', {
                  waterStorageId: data.waterStorageId,
                  percentage: device.percentage,
                })}>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
          </Pressable>
          </View> */}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e5e5',
    padding:20
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 20,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  cardSubtitle: {
    color: '#000',
  },
  cardText: {
    marginTop: 10,
    marginBottom: 5,
    color: 'black',
  },
  circleContainer: {
    alignItems: 'center',
    // marginVertical: 16,
  },
  circle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 5,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningCircle: {
    borderColor: 'black',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardFooter: {
    color: '#000',
    fontSize: 12,
    marginTop: 20,
  },
  cardArrow: {
    alignSelf: 'flex-end',
    marginTop: -6,
    marginBottom: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    // marginBottom: 20,
    // marginLeft: 20,
    // marginTop: 8,
  },
  circleImage: {
    width: 55,
    height: 55,
    borderRadius: 22,
    alignSelf: 'center',
    marginBottom: 5,
  },
  arrow: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});

export default Card4;

// ============================================================================================================================================


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
// import { Image } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { useNavigation } from '@react-navigation/native';

// const Card4 = ({ data }) => {
//   const {
//     waterStorageName,
//     capacity,
//     unit,
//     devices,
//     licenseExpireOn,
//   } = data;

//   const device = devices && devices.length > 0 ? devices[0] : {};
//   const [percentage, setPercentage] = useState(device.percentage || 0);

//   useEffect(() => {
//     setPercentage(device.percentage || 0);
//   }, [device]);

//   const navigation = useNavigation();

//   // Flip animation states
//   const [flipped, setFlipped] = useState(false);
//   const flipAnimation = new Animated.Value(0); // Animation value for flip

//   // Interpolate rotation values for front and back sides
//   const frontInterpolate = flipAnimation.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['0deg', '180deg'],
//   });

//   const backInterpolate = flipAnimation.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['180deg', '360deg'],
//   });

//   // Function to handle flip animation
//   const flipCard = () => {
//     Animated.spring(flipAnimation, {
//       toValue: flipped ? 0 : 180,
//       friction: 8,
//       tension: 10,
//       useNativeDriver: true,
//     }).start();
//     setFlipped(!flipped);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableWithoutFeedback onPress={flipCard}>
//         <Animated.View
//           style={[
//             styles.flipCard,
//             {
//               transform: [{ rotateY: frontInterpolate }],
//             },
//           ]}>
//           {/* Front Side of the Card */}
//           <View style={styles.card}>
//             <View style={styles.cardHeader}>
//               <Text style={styles.cardTitle}>{waterStorageName}</Text>
//               <Icon name="map-marker-alt" size={20} color="darkblue" />
//             </View>
//             <Text style={styles.cardSubtitle}>
//               {capacity} {unit}
//             </Text>
//             <View style={styles.separator} />
//             <View style={styles.circleContainer}>
//               <Image
//                 source={require('../../assets/warning.png')}
//                 style={styles.cardImage}
//               />
//             </View>
//             <Text style={styles.cardFooter}>
//               Expired On {licenseExpireOn.split('-').reverse().join('-')}
//             </Text>
//           </View>
//         </Animated.View>
//       </TouchableWithoutFeedback>

//       {/* Back Side of the Card */}
//       <Animated.View
//         style={[
//           styles.flipCardBack,
//           {
//             transform: [{ rotateY: backInterpolate }],
//           },
//         ]}>
//         <View style={styles.cardBackContent}>
//           <Text style={styles.cardBackTitle}>More Info</Text>
//           <Text style={styles.cardBackText}>Percentage: {percentage}%</Text>
//           <TouchableWithoutFeedback
//             onPress={() =>
//               navigation.navigate('Profile', {
//                 waterStorageId: data.waterStorageId,
//                 percentage: device.percentage,
//               })
//             }>
//             <Icon
//               name="arrow-right"
//               size={18}
//               color="darkblue"
//               style={styles.cardArrow}
//             />
//           </TouchableWithoutFeedback>
//         </View>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e8e5e5',
//     padding: 20,
//   },
//   flipCard: {
//     backfaceVisibility: 'hidden',
//     position: 'absolute',
//     width: '100%',
//     height: 250,
//   },
//   flipCardBack: {
//     backfaceVisibility: 'hidden',
//     position: 'absolute',
//     width: '100%',
//     height: 250,
//     top: 0,
//     left: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     padding: 12,
//     borderRadius: 20,
//     marginBottom: 6,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 2,
//     width: '100%',
//     height: '100%',
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
//   separator: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgrey',
//     height: 10,
//     width: '100%',
//   },
//   circleContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   cardImage: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//   },
//   cardFooter: {
//     color: '#000',
//     fontSize: 12,
//     marginTop: 14,
//   },
//   cardBackContent: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   cardBackTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   cardBackText: {
//     color: '#666',
//     fontSize: 14,
//     marginTop: 10,
//   },
//   cardArrow: {
//     marginTop: 10,
//   },
// });

// export default Card4;




