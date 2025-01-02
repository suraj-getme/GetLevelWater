// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// const FlipCardTwo = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={[styles.card, styles.cardFront]}>
//           <View style={styles.header}>
//             <View>
//               <Text style={styles.title}>Ramchandra Dombivili(E) KDMC</Text>
//               <Text style={styles.subtitle}>Capacity 1700000 L</Text>
//             </View>
//             <Icon name="map-marker" size={24} color="#1E90FF" style={{ alignSelf: 'flex-end', marginTop:-10 }} />
//           </View>
//           <View style={styles.infoContainer}>
//             <View>
              
//             </View>
//           </View>
//           {/* <View style={styles.footer}>
//             <Text style={styles.updateText}>Update At 12:28 PM</Text>
//             <View>
//               <Icon name="arrow-right" size={18} color="black" />
//               <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
//             </View>
//           </View> */}
//         </View>
//       </View>
//     </View>
//   );
// };

// const { width, height } = Dimensions.get('screen');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 0,
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
//     backgroundColor: 'white',
//   },
//   cardFront: {
//     zIndex: 2,
//   },
//   cardBack: {
//     zIndex: 1,
//   },
//   header: {
//     // flexDirection: 'row',
//     justifyContent: 'space-between',
//     // alignItems: 'center',
//     // marginTop: 0,
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
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   info: {
//     alignItems: 'center',
//   },
//   infoValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2D3748',
//     marginLeft: 60,
//   },
//   infoLabel: {
//     fontSize: 14,
//     color: '#A0AEC0',
//     marginLeft: 60,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf:'stretch',
//     marginStart:10,
//     marginTop:100
//   },
//   updateText: {
//     fontSize: 14,
//     color: '#A0AEC0',
//   },
// });

// export default FlipCardTwo;

// ====================================================================================================

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import axios from 'axios'; // Import axios for API calls
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('screen');

const FlipCardTwo = ({ waterStorageId }) => {
  const [loading, setLoading] = useState(true); // State for loading
  const [deviceData, setDeviceData] = useState(null); // State to store device data

  // Fetch device data from the second API
  useEffect(() => {
    axios
      .get(`http://103.137.36.215:4500/api/waterStorage/devices/${waterStorageId}`)
      .then((response) => {
        setDeviceData(response.data.message[0]); // Store the first device data (based on API response)
        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error("Error fetching device data:", error);
        setLoading(false); // Stop loading even in case of error
      });
  }, [waterStorageId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E90FF" />
      </View>
    );
  }

  if (!deviceData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.cardFront]}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>{deviceData.waterStorageName}</Text>
              <Text style={styles.subtitle}>
                Capacity {deviceData.waterStorageCapacity} {deviceData.waterStorageUnit}
              </Text>
            </View>
            <Icon
              name="map-marker"
              size={24}
              color="#1E90FF"
              style={{ alignSelf: 'flex-end', marginTop: -10 }}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <Text style={styles.infoValue}>{deviceData.level}</Text>
              <Text style={styles.infoLabel}>Level</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoValue}>{deviceData.elevation}</Text>
              <Text style={styles.infoLabel}>Elevation (m)</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoValue}>{deviceData.elevation}</Text>
              <Text style={styles.infoLabel}>Elevation (m)</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.updateText}>Last Update: {deviceData.CurrentTime}</Text>
            <MaterialCommunityIcons
              name="arrow-right"
              size={24}
              color="#1E90FF"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 0,
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
    marginTop: 50,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  cardContainer: {
    width: width - 50,
    height: height / 3,
  },
  card: {
    width: width - 50,
    height: height / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute',
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
  },
  cardFront: {
    zIndex: 2,
  },
  cardBack: {
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  info: {
    alignItems: 'center',
  },
  infoValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    marginLeft: 60,
  },
  infoLabel: {
    fontSize: 14,
    color: '#A0AEC0',
    marginLeft: 60,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginStart: 10,
    marginTop: 100,
  },
  updateText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
});

export default FlipCardTwo;

// ====================================================================================================

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
// import axios from 'axios'; // Import axios for API calls
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const { width, height } = Dimensions.get('screen');

// const FlipCardTwo = ({ waterStorageId }) => {
//   const [loading, setLoading] = useState(true); // State for loading
//   const [deviceData, setDeviceData] = useState(null); // State to store device data

//   // Fetch device data from the second API
//   useEffect(() => {
//     axios
//       .get(`http://103.137.36.215:4500/api/waterStorage/devices/${waterStorageId}`)
//       .then((response) => {
//         setDeviceData(response.data.message[0]); // Store the first device data (based on API response)
//         setLoading(false); // Stop the loading state
//       })
//       .catch((error) => {
//         console.error("Error fetching device data:", error);
//         setLoading(false); // Stop loading even in case of error
//       });
//   }, [waterStorageId]);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#1E90FF" />
//       </View>
//     );
//   }

//   if (!deviceData) {
//     return (
//       <View style={styles.errorContainer}>
//         <Text style={styles.errorText}>Failed to load data</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={[styles.card, styles.cardFront]}>
//           <View style={styles.header}>
//             <View>
//               <Text style={styles.title}>{deviceData.waterStorageName}</Text>
//               <Text style={styles.subtitle}>
//                 Capacity {deviceData.waterStorageCapacity} {deviceData.waterStorageUnit}
//               </Text>
//             </View>
//             <Icon
//               name="map-marker"
//               size={24}
//               color="#1E90FF"
//               style={{ alignSelf: 'flex-end', marginTop: -10 }}
//             />
//           </View>
//           <View style={styles.infoContainer}>
//             <View style={styles.info}>
//               <Text style={styles.infoValue}>{deviceData.level}</Text>
//               <Text style={styles.infoLabel}>Level</Text>
//             </View>
//             <View style={styles.info}>
//               <Text style={styles.infoValue}>{deviceData.elevation}</Text>
//               <Text style={styles.infoLabel}>Elevation (m)</Text>
//             </View>
//           </View>
//           <View style={styles.footer}>
//             <Text style={styles.updateText}>Last Update: {deviceData.CurrentTime}</Text>
//             <MaterialCommunityIcons
//               name="arrow-right"
//               size={24}
//               color="#1E90FF"
//             />
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     marginTop: 0,
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
//     marginTop: 50,
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
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
//   infoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   info: {
//     alignItems: 'center',
//   },
//   infoValue: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#2D3748',
//     marginLeft: 60,
//   },
//   infoLabel: {
//     fontSize: 14,
//     color: '#A0AEC0',
//     marginLeft: 60,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf: 'stretch',
//     marginStart: 10,
//     marginTop: 100,
//   },
//   updateText: {
//     fontSize: 14,
//     color: '#A0AEC0',
//   },
// });

// export default FlipCardTwo;

