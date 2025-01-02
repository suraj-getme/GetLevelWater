import React from 'react';
import {View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import { Image } from 'react-native-elements';

const Header = () => {
    return(
        <View style={styles.header}>
          {/* <View>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
          </View> */}
        <Text style={styles.headerText}>Welcome Users</Text>
    <View style={styles.headerRight}>
    <Text style={styles.dateTimeText}>Date: 27-09-2024</Text>
    <Text style={styles.dateTimeText}>Time: 16:39:10</Text>
  </View>
</View>
    )
}
const styles = StyleSheet.create({
    header: {
      backgroundColor: '#0163d2',
      // backgroundColor: '#4299e1',
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      // marginBottom:20
    },
    headerText: {
      fontSize: 20,
      color: 'white',
    },
    headerRight: {
      alignItems: 'flex-end',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 155,
      marginBottom: 10,
      marginTop: 10,
      color: 'black',
      // textAlign:"center"
    },
    dateTimeText: {
      color: 'white',
      fontSize: 12,
      marginRight: 8,
    },
    // logo: {
    //   width: 50,
    //   height: 50,
    //   resizeMode: 'center',
    //   marginRight: 10,
    //   opacity: 10,
    // }
  });
export default Header 