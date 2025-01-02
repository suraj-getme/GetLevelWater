// import React, { useRef, useState, useCallback, useMemo } from 'react';
// import {
//   Animated,
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FlipCardTwo from './FlipCardTwo';

// const { width, height } = Dimensions.get('screen');

// const FlipCard = ({navigation}) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const flipAnimation = useRef(new Animated.Value(0)).current;

//   // Front and Back interpolation for rotation
//   const frontInterpolate = useMemo(() => {
//     return flipAnimation.interpolate({
//       inputRange: [0, 180],
//       outputRange: ['0deg', '180deg'],
//     });
//   }, [flipAnimation]);

//   const backInterpolate = useMemo(() => {
//     return flipAnimation.interpolate({
//       inputRange: [0, 180],
//       outputRange: ['180deg', '360deg'],
//     });
//   }, [flipAnimation]);

//   const flipToFrontStyle = useMemo(() => ({
//     transform: [{ rotateY: frontInterpolate }],
//   }), [frontInterpolate]);

//   const flipToBackStyle = useMemo(() => ({
//     transform: [{ rotateY: backInterpolate }],
//   }), [backInterpolate]);

//   // Function to handle card flip animation
//   const flipCard = useCallback(() => {
//     Animated.spring(flipAnimation, {
//       toValue: isFlipped ? 0 : 180,
//       friction: 8,
//       tension: 10,
//       useNativeDriver: true,
//     }).start();

//     setIsFlipped(prev => !prev);
//   }, [flipAnimation, isFlipped]);

//   // Card UI
//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         {/* Front Card */}
//         <TouchableWithoutFeedback onPress={flipCard}>
//         <Animated.View style={[styles.front, styles.card, flipToFrontStyle]}>
//           <View style={styles.header}>
         
//             <View style={{borderBottomWidth:1.5, borderBottomColor:'lightgrey',marginBottom:10,marginTop:2, width:'100%'}}>
//               <Text style={styles.title}>Ramchandra Dombivili(E) KDMC</Text>
//               <Text style={styles.subtitle}>Capacity 1700000 L</Text>
//             </View>
//             <MaterialCommunityIcons
//               name="map-marker"
//               size={24}
//               color="#1E90FF"
//               style={{ marginLeft: -30 }}
//             />
//           </View>
//           <View style={styles.circleContainer}>
//             <View style={styles.circle}>
//               <Text style={styles.circleText}>54%</Text>
//             </View>
//           </View>
//           <View style={styles.infoContainer}>
//             <View style={styles.info}>
//               <Text style={styles.infoValue}>2.72</Text>
//               <Text style={styles.infoLabel}>Meters tank filled</Text>
//             </View>
//             <View style={styles.info}>
//               <Text style={styles.infoValue}>9.18</Text>
//               <Text style={styles.infoLabel}>Lakh liters</Text>
//             </View>
//             <MaterialCommunityIcons
//               name="arrow-up"
//               size={24}
//               color="#32CD32"
//               style={{ marginTop: -50 }}
//             />
//           </View>
//           <View style={{borderTopWidth:1.5, borderTopColor:'lightgrey'}}>
//         <View style={styles.footer}>
//           <View style={{alignSelf:'flex-start'}}>
//             <Text style={{marginTop:10, marginLeft:5}}>Update At 12:28 PM</Text>
//             </View>
//             {/* <MaterialCommunityIcons
//               name="rotate-3d-variant"
//               size={24}
//               color="black"
//               style={{marginLeft:150}}
//             /> */}
//           </View>
//         </View>
//         </Animated.View>
//         </TouchableWithoutFeedback>
//         {/* Back Card */}
//         <TouchableWithoutFeedback onPress={flipCard}>
//         <Animated.View style={[styles.back, styles.card, flipToBackStyle]}>
//           <FlipCardTwo />
//         </Animated.View>
//         </TouchableWithoutFeedback>
//       </View>
//       {/* This design is for constant footer */}
//       {/* <View style={{borderTopWidth:1.5, borderTopColor:'lightgrey'}}>
//         <View style={styles.footer}>
//           <View style={{alignSelf:'flex-start'}}>
//             <Text>Update At 12:28 PM</Text>
//             </View>
//             <TouchableOpacity onPress={()=>navigation.navigate('SampleGraph')}>
//             <MaterialCommunityIcons
//               name="arrow-right"
//               size={24}
//               color="#1E90FF"
//               style={{marginLeft:150}}
//             />
//             </TouchableOpacity>
//           </View>
//         </View> */}
//       {/* Button to trigger the flip */}
//       <TouchableOpacity style={styles.button} onPress={flipCard}>
//         <Text style={styles.buttonText}>Flip Card</Text>
//         <MaterialCommunityIcons
//           name="rotate-3d-variant"
//           size={20}
//           color="white"
//         />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>navigation.navigate('SampleGraph')}>
//       <MaterialCommunityIcons
//           name="arrow-right"
//           size={24}
//           color="#1E90FF"
//           style={{marginVertical:-150, marginLeft:260}}
//         />
//         </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   cardContainer: {
//     width: width - 50,
//     height: height / 3,
//   },
//   front: {
//     backgroundColor: 'white',
//   },
//   back: {
//     backgroundColor: 'white',
//   },
//   card: {
//     width: width - 50,
//     height: height / 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     position: 'absolute',
//     backfaceVisibility: 'hidden',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2D3748',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#A0AEC0',
//   },
//   circleContainer: {
//     alignItems: 'center',
//   },
//   circle: {
//     width: 96,
//     height: 96,
//     borderRadius: 48,
//     backgroundColor: '#32CD32',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circleText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   info: {
//     alignItems: 'center',
//   },
//   infoValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#2D3748',
//   },
//   infoLabel: {
//     fontSize: 14,
//     color: '#A0AEC0',
//     marginLeft: 20,
//   },
//   footer: {
//     backgroundColor:'white', 
//     // marginTop:4,
//     flexDirection:'row',
//     width:width-50,
//     height:40,
//     // justifyContent:'center',
//     // alignItems:'center'
//   },
//   updateText: {
//     fontSize: 14,
//     color: '#A0AEC0',
//   },
//   button: {
//     marginTop: 80,
//     backgroundColor: '#1E90FF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
// });

// export default FlipCard;

// ====================================================================================================

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios'; // Add axios for making HTTP requests
import FlipCardTwo from './FlipCardTwo';

const { width, height } = Dimensions.get('screen');

const FlipCard = ({ navigation }) => {
  const [waterStorages, setWaterStorages] = useState([]);  // State to hold the water storage data
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fetch data from the API on component mount
    axios.get('http://103.137.36.215:4500/api/userWaterStorage/user_dashboard')
      .then((response) => {
        setWaterStorages(response.data.data);  // Store the API response
      })
      .catch((error) => {
        console.error("Error fetching water storage data", error);
      });
  }, []);

  // Function to handle card flip animation
  const flipCard = useCallback(() => {
    Animated.spring(flipAnimation, {
      toValue: isFlipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setIsFlipped(prev => !prev);
  }, [flipAnimation, isFlipped]);

  // Front and Back interpolation for rotation
  const frontInterpolate = useMemo(() => {
    return flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
  }, [flipAnimation]);

  const backInterpolate = useMemo(() => {
    return flipAnimation.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }, [flipAnimation]);

  const flipToFrontStyle = useMemo(() => ({
    transform: [{ rotateY: frontInterpolate }],
  }), [frontInterpolate]);

  const flipToBackStyle = useMemo(() => ({
    transform: [{ rotateY: backInterpolate }],
  }), [backInterpolate]);

  const renderCard = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        {/* Front Card */}
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View style={[styles.front, styles.card, flipToFrontStyle]}>
            <View style={styles.header}>
              <View style={{ borderBottomWidth: 1.5, borderBottomColor: 'lightgrey', marginBottom: 10, marginTop: 2, width: '100%' }}>
                <Text style={styles.title}>{item.waterStorageName}</Text>
                <Text style={styles.subtitle}>Capacity {item.capacity} {item.unit}</Text>
              </View>
              <MaterialCommunityIcons
                name="map-marker"
                size={24}
                color="#1E90FF"
                style={{ marginLeft: -30 }}
              />
            </View>
            <View style={styles.circleContainer}>
              <View style={styles.circle}>
                <Text style={styles.circleText}>{item.devices[0]?.percentage}%</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.info}>
                <Text style={styles.infoValue}>{item.devices[0]?.elevation}</Text>
                <Text style={styles.infoLabel}>Meters tank filled</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.infoValue}>{item.devices[0]?.actualPerValue}</Text>
                <Text style={styles.infoLabel}>{item.unit}</Text>
              </View>
              <MaterialCommunityIcons
                name="arrow-up"
                size={24}
                color="#32CD32"
                style={{ marginTop: -50 }}
              />
            </View>
            <View style={{ borderTopWidth: 1.5, borderTopColor: 'lightgrey' }}>
              <View style={styles.footer}>
                <Text style={{ marginTop: 10, marginLeft: 5 }}>Update At {item.devices[0]?.currentTime}</Text>
              </View>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>

        {/* Back Card */}
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View style={[styles.back, styles.card, flipToBackStyle]}>
            {/* Replace with your actual back content (FlipCardTwo or anything else) */}
            <FlipCardTwo waterStorageId={37}/>
            <Text>Back Side Content</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <FlatList
      data={waterStorages}    // Display cards dynamically
      renderItem={renderCard}
      keyExtractor={(item) => item.waterStorageId.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 25,
  },
  cardContainer: {
    width: width - 50,
    height: height / 3,
    marginBottom: 15,
    marginLeft:25,
    marginTop:2
  },
  front: {
    backgroundColor: 'white',
  },
  back: {
    backgroundColor: 'white',
  },
  card: {
    width: width - 50,
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  subtitle: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  circleContainer: {
    alignItems: 'center',
  },
  circle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#32CD32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  info: {
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  infoLabel: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: width - 50,
    height: 40,
  },
  updateText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
});

export default FlipCard;

// ====================================================================================================

// import React, { useRef, useState, useMemo, useCallback } from 'react';
// import {
//   Animated,
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   TouchableWithoutFeedback,
//   View,
// } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FlipCardTwo from './FlipCardTwo';

// const { width, height } = Dimensions.get('screen');

// const FlipCard = ({navigation}) => {
//   const [isFlipped, setIsFlipped] = useState(null); // Store which card is flipped
//   const flipAnimation = useRef(new Animated.Value(0)).current;

//   // Front and Back interpolation for rotation
//   const frontInterpolate = useMemo(() => {
//     return flipAnimation.interpolate({
//       inputRange: [0, 180],
//       outputRange: ['0deg', '180deg'],
//     });
//   }, [flipAnimation]);

//   const backInterpolate = useMemo(() => {
//     return flipAnimation.interpolate({
//       inputRange: [0, 180],
//       outputRange: ['180deg', '360deg'],
//     });
//   }, [flipAnimation]);

//   const flipToFrontStyle = useMemo(() => ({
//     transform: [{ rotateY: frontInterpolate }],
//   }), [frontInterpolate]);

//   const flipToBackStyle = useMemo(() => ({
//     transform: [{ rotateY: backInterpolate }],
//   }), [backInterpolate]);

//   // Function to handle card flip animation
//   const flipCard = useCallback((id) => {
//     Animated.spring(flipAnimation, {
//       toValue: isFlipped === id ? 0 : 180,
//       friction: 8,
//       tension: 10,
//       useNativeDriver: true,
//     }).start();

//     setIsFlipped(prev => (prev === id ? null : id)); // Only flip one card at a time
//   }, [flipAnimation, isFlipped]);

//   // Card UI
//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         {/* Loop through some dynamic data and create cards */}
//         {/** Assuming cards are from API response. Here, I'm using mock data */}
//         {[{ id: 1 }, { id: 2 }, { id: 3 }].map((card, index) => (
//           <View key={card.id}>
//             <TouchableWithoutFeedback onPress={() => flipCard(card.id)}>
//               <Animated.View
//                 style={[styles.card, styles.front, flipToFrontStyle, isFlipped === card.id && { opacity: 0.5 }]}>
//                 <Text style={styles.title}>Card {card.id}</Text>
//                 <Text style={styles.subtitle}>Tap to flip</Text>
//               </Animated.View>
//             </TouchableWithoutFeedback>
//             {/** Back of the card with dynamic data */}
//             {isFlipped === card.id && (
//               <TouchableWithoutFeedback onPress={() => flipCard(card.id)}>
//                 <Animated.View style={[styles.card, styles.back, flipToBackStyle]}>
//                   <FlipCardTwo waterStorageId={card.id} />
//                 </Animated.View>
//               </TouchableWithoutFeedback>
//             )}
//           </View>
//         ))}
//       </View>

//       {/* Button to trigger the flip (optional) */}
//       <TouchableOpacity style={styles.button} onPress={() => flipCard(2)}>
//         <Text style={styles.buttonText}>Flip Card</Text>
//         <MaterialCommunityIcons name="rotate-3d-variant" size={20} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   cardContainer: {
//     width: width - 50,
//     height: height / 3,
//   },
//   card: {
//     width: width - 50,
//     height: height / 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 5,
//     position: 'absolute',
//     backfaceVisibility: 'hidden',
//   },
//   front: {
//     backgroundColor: 'white',
//   },
//   back: {
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#2D3748',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#A0AEC0',
//   },
//   button: {
//     marginTop: 80,
//     backgroundColor: '#1E90FF',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
// });

// export default FlipCard;
