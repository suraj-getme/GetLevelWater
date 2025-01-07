import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
// import { Image } from 'react-native-elements';

const Header = () => {
    const [time ,setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
      //update the time every second
      const interval = setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
      },1000)
      return () => clearInterval(interval)
    }, [])
  return(
        <View style={styles.header}>
          {/* <View>
            <Image source={require('../../assets/logo.png')} style={styles.logo}/>
          </View> */}
        <Text style={styles.headerText}>Welcome Users</Text>
    <View style={styles.headerRight}>
      <Text style={styles.dateTimeText}>Date: {new Date().toLocaleString('en-GB'
      , {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        }
      ).replace(/\//g, '-')}</Text>
        <Text style={styles.dateTimeText}>Time: {time}</Text>

  </View>
</View>
    )
}
const styles = StyleSheet.create({
    header: {
      // backgroundColor: '#0163d2',
      // backgroundColor: '#4299e1',
      backgroundColor:'rgb(30, 144, 255)',
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      elevation:10
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