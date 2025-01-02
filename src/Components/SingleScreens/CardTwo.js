// import { useNavigation } from '@react-navigation/native';
// import React, {useEffect} from 'react';
// import {View, Text, ScrollView, StyleSheet, TouchableOpacity,} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// const Card2 = ({data}) => {
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
//     devices,
//   } = data;

//   const device = devices && devices.length > 0 ? devices[0] : {}; // Access first device
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         {/* { last card }  */}
//         <View style={styles.card}>
//           <View style={styles.cardHeader}>
//             {/* <Text style={styles.cardTitle}>in-out_flow samta nagar thane</Text> */}
//             <Text style={styles.cardTitle}>{waterStorageName}</Text>

//             <Icon name="map-marker-alt" size={20} color="darkblue" />
//           </View>
//           <Text style={styles.cardSubtitle}>
//             Capacity: {capacity} {unit}
//           </Text>
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

//           <View>
//             <View style={styles.circleContainer}>
//               <Text style={{marginBottom: 2, color: 'black', marginLeft: -10}}>
//                 0 m
//               </Text>
//               <View
//                 style={{
//                   alignSelf: 'flex-start',
//                   marginTop: -20,
//                   marginBottom: 20,
//                 }}>
//                 <Text>
//                   InFlow <Text style={{color: 'black'}}>Offline</Text>
//                 </Text>
//                 <Text>Pressure : bar</Text>
//               </View>

//               <View style={{alignSelf: 'flex-end', marginTop: -40}}>
//                 {/* <Icon name="exclamation-triangle" size={24} color="orange" /> */}
//                 <Text style={{marginBottom: 2, marginTop: -7}}>
//                   outflow
//                   <Icon
//                     name="exclamation-triangle"
//                     size={24}
//                     color="orange"
//                     style={{alignSelf: 'flex-end'}}
//                   />
//                 </Text>
//                 <Text style={{marginBottom: 4}}>Pressure: Offline</Text>
//               </View>
//               <View style={[styles.circle]}>
//                 <Text style={styles.circleText}>0%</Text>
//               </View>

//               <View
//                 style={{
//                   height: 140,
//                   width: 18,
//                   borderRadius: 400,
//                   backgroundColor: 'rgb(182, 188, 226)',
//                   marginTop: -100,
//                   marginLeft: -215,
//                 }}></View>
//               <View
//                 style={{
//                   height: 140,
//                   width: 18,
//                   borderRadius: 400,
//                   backgroundColor: 'rgb(182, 188, 226)',
//                   marginTop: -140,
//                   marginLeft: 215,
//                 }}></View>
//               <Text style={{alignSelf: 'flex-end', marginTop: 20}}>
//                 29D : 22H : 29M
//               </Text>
//               <Text style={{alignSelf: 'flex-start', marginTop: -20}}>
//                 6D : 10H: 59M
//               </Text>
//             </View>
//             <View style={styles.cardContent}>
//               <Text style={{color: 'black'}}>0 Lakh liters</Text>
//               <View
//                 style={{
//                   marginTop: 20,
//                   width: 360,
//                   height: 40,
//                   borderColor: 'lightgrey',
//                   borderWidth: 2,
//                 }}>
//                 <Text
//                   style={{color: 'black', alignSelf: 'center', marginTop: 8}}>
//                   Withheld
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <Text style={styles.cardFooter2}>Update At 16:38 PM</Text>
//           <TouchableOpacity>
//           <Icon
//             name="arrow-right"
//             size={18}
//             color="darkblue"
//             style={styles.cardArrow}
//           />
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Icon
//             name="arrow-down"
//             size={18}
//             color={'red'}
//             style={{marginRight: 270, marginTop: -300, marginLeft: 25}}></Icon>
//           <Icon
//             name="arrow-up"
//             size={18}
//             color={'red'}
//             style={{marginLeft: 295, marginTop: -30}}></Icon>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'rgb(219,219,227)',
//     paddingTop: 20,
//     // marginBottom: 45,
//   },
//   scrollView: {
//     marginHorizontal: 16,
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 20,
//     marginBottom: 20,
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
//   circleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black',
//   },
//   expiredCircle: {
//     borderColor: 'lightgrey',
//     backgroundColor: 'white',
//   },
//   expiredText: {
//     color: '#ef4444',
//     textAlign: 'center',
//     marginTop: 30,
//     fontWeight: '700',
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

// export default Card2;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Card2 = ({ data }) => {
  const {
    waterStorageName,
    capacity,
    unit,
    devices,
    pressureOutLetPressure,
  } = data;

  const navigation = useNavigation(); // Hook to handle navigation

  const handleNavigation = () =>{
    // console.log("Navigating to profile 5")
    navigation.navigate('Profile5')
  }

  const device = devices && devices.length > 0 ? devices[0] : {}; // Access first device

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>{waterStorageName}</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>
            Capacity: {capacity} {unit}
          </Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}
          />

          <View style={styles.circleContainer}>
            <Text style={{ marginBottom: 2, color: 'black', marginLeft: -10 }}>0 m</Text>
            <View
              style={{
                alignSelf: 'flex-start',
                marginTop: -20,
                marginBottom: 20,
              }}
            >
              <Text style={{color:'#808080'}}>
                InFlow: <Text style={{ color:'#808080' }}>Offline</Text>
              </Text>
              <Text style={{color:'#808080'}}>Pressure : bar</Text>
            </View>

            <View style={{ alignSelf: 'flex-end', marginTop: -40 }}>
              <Text style={{ bottom: 10, marginTop: -7 ,color:'#808080'}}>
                Outflow
                <Icon
                  name="exclamation-triangle"
                  size={24}
                  color="orange"
                  style={{ alignSelf: 'flex-end' }}
                />
              </Text>
              <Text style={{ bottom:10, color:'#808080' }}>Pressure: Offline</Text>
            </View>
            <View style={[styles.circle]}>
              <Text style={styles.circleText}>0%</Text>
            </View>

            <View
              style={{
                height: 140,
                width: 18,
                borderRadius: 400,
                backgroundColor: 'rgb(182, 188, 226)',
                marginTop: -100,
                marginLeft: -215,
              }}
            ></View>
            <View
              style={{
                height: 140,
                width: 18,
                borderRadius: 400,
                backgroundColor: 'rgb(182, 188, 226)',
                marginTop: -140,
                marginLeft: 215,
              }}
            ></View>
            <Text style={{ alignSelf: 'flex-end', marginTop: 20,color:'#808080', bottom:10 }}>29D : 22H : 29M</Text>
            <Text style={{ alignSelf: 'flex-start', marginTop: -20,color:'#808080',bottom:10 }}>6D : 10H: 59M</Text>
          </View>

          <View style={styles.cardContent}>
            <Text style={{ color: 'black' }}>0 Lakh liters</Text>
            <View
              style={{
                marginTop: 20,
                width: 360,
                height: 40,
                borderColor: 'lightgrey',
                borderWidth: 2,
              }}
            >
              <Text
                style={{ color: '#000', alignSelf: 'center', top:8 }}
              >
                Withheld
              </Text>
            </View>
          </View>
          <Text style={styles.cardFooter2}>Update At 16:38 PM</Text>

          {/* Navigate to ProfileScreen5 on right arrow click */}
          <TouchableOpacity onPress={handleNavigation}>
            <Icon
              name="arrow-right"
              size={18}
              color="darkblue"
              style={styles.cardArrow}
            />
          </TouchableOpacity>
        </View>

        {/* Some additional content */}
        <View>
          <Icon
            name="arrow-down"
            size={18}
            color={'red'}
            style={{ marginRight: 270, marginTop: -300, marginLeft: 25 }}
          />
          <Icon
            name="arrow-up"
            size={18}
            color={'red'}
            style={{ marginLeft: 290, marginTop: -25 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollView: {
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 20,
    marginBottom: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 20,
    // elevation: 6,
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
    marginVertical: 16,
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
  circleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  cardContent: {
    alignItems: 'center',
  },
  cardFooter: {
    color: '#000',
    fontSize: 12,
    marginTop: 14,
  },
  cardFooter2: {
    color: '#000',
    fontSize: 12,
    marginTop: 6,
  },
  cardArrow: {
    alignSelf: 'flex-end',
    marginTop: -6,
    marginBottom: 2,
  },
});

export default Card2;

