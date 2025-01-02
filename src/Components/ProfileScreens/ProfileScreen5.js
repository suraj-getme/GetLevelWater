
// import React, { useEffect, useState, useCallback } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';
// import Wave from '../MultipleCards/Wave';

// const ProfileScreen5 = ({ navigation, route }) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigation();


//     const getAPIData = useCallback(async () => {
//         try {
//             const url = 'http://103.137.36.215:4500/api/waterStorage/devices/55';
//             const result = await axios.get(url);
//             setData(result.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching API data', error);
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         getAPIData();
//         const interval = setInterval(() => {
//             getAPIData();
//         }, 8000);
//         return () => clearInterval(interval);
//     }, [getAPIData]);

//     if (loading) {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#3b82f6" />
//             </View>
//         );
//     }

//     if (!data || !data.success) {
//         return (
//             <View style={styles.errorContainer}>
//                 <Text style={styles.errorText}>Failed to load data</Text>
//             </View>
//         );
//     }

//     const { info, message } = data;

//     // Helper function to determine the status color
//     const getStatusColor = (status) => {
//         if (status === "Online") {
//             return "#10b981"; // Green for Online
//         }
//         return "#ef4444"; // Red for Offline
//     };

//     // Render content for different cards based on their index
//     const renderCardImage = (index) => {
//         if (index === 2) {
//             return <Image source={require('../../assets/pressuremeter.png')} style={styles.cardImage} />;
//         } else if (index === 3) {
//             // Render wave component design here (assuming it's an image or custom component)
//             return <View><Text>0</Text></View>;
//         }
//         return <Image source={require('../../assets/warning.png')} style={styles.cardImage} />;
//     };

//     return (
//         <ScrollView>
//             <View style={styles.container}>
//                 <View style={styles.header}>
//                     <View style={styles.headerLeft}>
//                         <Text style={styles.headerText}>Welcome User</Text>
//                     </View>
//                     <View style={styles.headerRight}>
//                         <Text style={styles.headerDate}>Date: {message[0]?.CurrentTime.split(' ')[0]}</Text>
//                         <Text style={styles.headerTime}>Time: {message[0]?.CurrentTime.split(' ')[1]}</Text>
//                     </View>
//                 </View>

//                 <View style={styles.content}>
//                     <Text style={styles.title}>{info.waterStorageName}</Text>

//                     <View style={styles.profileHeader}>
//                         <Text style={styles.profileHeaderText}>PROFILE</Text>
//                     </View>
//                     <View style={styles.underline}></View>

//                     {/* Loop through devices */}
//                     {message.map((device, index) => {
//                         const statusColor = getStatusColor(device.status);
//                         return (
//                             <View key={index} style={styles.profileCard}>
//                                 <View style={styles.profileContent}>
//                                     <View style={{ flexDirection: 'row', marginBottom: 16 }}>
//                                         {renderCardImage(index)}
//                                         <View style={styles.statusInfo}>
//                                             <Text style={styles.statusLabel}>Current Status</Text>
//                                             <Text style={[styles.statusValue, { color: statusColor }]}>
//                                                 {device.status}
//                                             </Text>
//                                         </View>
//                                     </View>

//                                     {/* Device Information */}
//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>Total Capacity</Text>
//                                         <Text style={styles.infoValue}>{info.waterStorageCapacity} L</Text>
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>Type</Text>
//                                         <Text style={styles.infoValue}>{info.waterStorageType}</Text>
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>Unit</Text>
//                                         <Text style={styles.infoValue}>{info.waterStorageUnit}</Text>
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>Human Resource</Text>
//                                         <Text style={styles.infoValue}>{info.humanResourceName || 'N/A'}</Text>
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>License Active Date</Text>
//                                         <Text style={styles.infoValue}>{info.licenseActivatedOn}</Text>
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>License Expiry Date</Text>
//                                         <Text style={styles.infoValue}>{info.licenseExpireOn}</Text>
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>Record Received At</Text>
//                                         <Text style={styles.infoValue}>{device.CurrentTime}</Text>
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>Certificate</Text>
//                                         <Icon name="card-membership" size={24} color="#b88cd9" />
//                                     </View>

//                                     <View style={styles.infoRow}>
//                                         <Text style={styles.infoLabel}>Show Graph</Text>
//                                         <TouchableOpacity style={styles.showButton}>
//                                             <Icon name="show-chart" size={24} color="white" />
//                                             <Text style={styles.showButtonText}>SHOW</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                             </View>
//                         );
//                     })}
//                 </View>
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f3f4f6',
//     },
//     header: {
//         backgroundColor: '#3b82f6',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//     },
//     headerText: {
//         color: 'white',
//         fontSize: 18,
//     },
//     headerDate: {
//         color: 'white',
//     },
//     headerTime: {
//         color: 'white',
//     },
//     content: {
//         flex: 1,
//         padding: 16,
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'black',
//         marginBottom: 10,
//     },
//     profileHeader: {
//         backgroundColor: '#090ca3',
//         padding: 6,
//     },
//     profileHeaderText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'white',
//     },
//     underline: {
//         borderBottomColor: '#f12759',
//         borderBottomWidth: 3,
//         width: '28%',
//         // marginVertical: 6,
//         marginBottom:10
//     },
//     profileCard: {
//         backgroundColor: 'white',
//         borderRadius: 8,
//         padding: 16,
//         marginBottom: 16,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 2,
//     },
//     profileContent: {
//         alignItems: 'center',
//     },
//     cardImage: {
//         width: 50,
//         height: 50,
//         marginTop: 8,
//         marginBottom: 10,
//         marginRight: 30,
//     },
//     waveComponent: {
//         width: 50,
//         height: 50,
//         backgroundColor: '#b88cd9', // Placeholder for wave component
//         borderRadius: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     statusInfo: {
//         marginLeft: 16,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     statusLabel: {
//         color: '#6b7280',
//     },
//     statusValue: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: 'black',
//     },
//     infoRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         paddingVertical: 8,
//         borderBottomWidth: 1,
//         borderBottomColor: '#e5e7eb',
//     },
//     infoLabel: {
//         color: '#6b7280',
//     },
//     infoValue: {
//         fontWeight: 'bold',
//         color: 'black',
//     },
//     showButton: {
//         backgroundColor: '#090ca3',
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 8,
//         borderRadius: 4,
//         marginTop: 16,
//     },
//     showButtonText: {
//         color: 'white',
//         marginLeft: 8,
//     },
//     loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     errorContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     errorText: {
//         color: '#ef4444',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
// });

// export default ProfileScreen5;

import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Wave from '../MainScreens/Wave';

const ProfileScreen5 = ({ navigation }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigation();

    // Fetching API data and storing it
    const getAPIData = useCallback(async () => {
        try {
            const url = 'http://103.137.36.215:4500/api/waterStorage/devices/55';
            const result = await axios.get(url);
            setData(result.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching API data', error);
            setLoading(false);
        }
    }, []);

    // Polling the API every 8 seconds
    useEffect(() => {
        getAPIData();
        const interval = setInterval(() => {
            getAPIData();
        }, 8000);
        return () => clearInterval(interval);  // Clean up on component unmount
    }, [getAPIData]);

    // Show loading indicator while data is being fetched
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3b82f6" />
            </View>
        );
    }

    // Error handling if data fails to load
    if (!data || !data.success) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to load data</Text>
            </View>
        );
    }

    // Destructure data for easier access
    const { info, message } = data;

    // Helper function to get the status color based on status
    const getStatusColor = (status) => {
        if (status === "Online") {
            return "#10b981"; // Green for Online
        }
        return "#ef4444"; // Red for Offline
    };

    // Render images or wave component based on the index
    const renderCardImage = (index) => {
        if (index === 2) {
            return <Image source={require('../../assets/pressuremeter.png')} style={styles.cardImage} />;
        } else if (index === 3) {
            // Render Wave component
            return <Wave percentage={0} size={90} />;
        }
        return <Image source={require('../../assets/warning.png')} style={styles.cardImage} />;
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.headerText}>Welcome User</Text>
                    </View>
                    <View style={styles.headerRight}>
                        <Text style={styles.headerDate}>Date: {message[0]?.CurrentTime.split(' ')[0]}</Text>
                        <Text style={styles.headerTime}>Time: {message[0]?.CurrentTime.split(' ')[1]}</Text>
                    </View>
                </View>
                <Text style={styles.title}>{info.waterStorageName}</Text>
                <View style={styles.content}>
                    {/* 
                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeaderText}>PROFILE</Text>
                    </View>
                    <View style={styles.underline}></View> */}

                    {/* Loop through devices */}
                    {message.map((device, index) => {
                        const statusColor = getStatusColor(device.status);
                        return (
                            <View key={index} style={styles.profileCard}>
                                <View style={styles.profileContent}>
                                    <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                                        {renderCardImage(index)}
                                        <View style={styles.statusInfo}>
                                            <Text style={styles.statusLabel}>Current Status</Text>
                                            <Text style={[styles.statusValue, { color: statusColor }]}>
                                                {device.status}
                                            </Text>
                                        </View>
                                    </View>

                                    {/* Device Information */}
                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Total Capacity</Text>
                                        <Text style={styles.infoValue}>{info.waterStorageCapacity} L</Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Type</Text>
                                        <Text style={styles.infoValue}>{info.waterStorageType}</Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Unit</Text>
                                        <Text style={styles.infoValue}>{info.waterStorageUnit}</Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Human Resource</Text>
                                        <Text style={styles.infoValue}>{info.humanResourceName || 'N/A'}</Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>License Active Date</Text>
                                        <Text style={styles.infoValue}>{info.licenseActivatedOn}</Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>License Expiry Date</Text>
                                        <Text style={styles.infoValue}>{info.licenseExpireOn}</Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Record Received At</Text>
                                        <Text style={styles.infoValue}>{device.CurrentTime}</Text>
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Certificate</Text>
                                        <Icon name="card-membership" size={24} color="#b88cd9" />
                                    </View>

                                    <View style={styles.infoRow}>
                                        <Text style={styles.infoLabel}>Show Graph</Text>
                                        <TouchableOpacity style={styles.showButton}>
                                            <Icon name="show-chart" size={24} color="white" />
                                            <Text style={styles.showButtonText}>SHOW</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
    },
    header: {
        backgroundColor: '#3b82f6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
    },
    headerDate: {
        color: 'white',
    },
    headerTime: {
        color: 'white',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        // marginBottom: 10,
        left:80,
        padding:10
    },
    profileHeader: {
        backgroundColor: '#090ca3',
        padding: 8,
    },
    profileHeaderText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    underline: {
        borderBottomColor: '#f12759',
        borderBottomWidth: 3,
        width: '24%',
        marginBottom: 10,
        marginTop:0.5
    },
    profileCard: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    profileContent: {
        alignItems: 'center',
    },
    cardImage: {
        width: 50,
        height: 50,
        marginTop: 8,
        marginBottom: 10,
        marginRight: 30,
    },
    waveComponent: {
        width: 50,
        height: 50,
        backgroundColor: '#b88cd9', // Placeholder for wave component
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusInfo: {
        marginLeft: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusLabel: {
        color: '#6b7280',
    },
    statusValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
    },
    infoLabel: {
        color: '#6b7280',
    },
    infoValue: {
        fontWeight: 'bold',
        color: 'black',
    },
    showButton: {
        backgroundColor: '#090ca3',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 4,
        marginTop: 16,
    },
    showButtonText: {
        color: 'white',
        marginLeft: 8,
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
        backgroundColor: 'white',
    },
    errorText: {
        color: '#ef4444',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProfileScreen5;





