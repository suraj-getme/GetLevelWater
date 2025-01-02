import React from 'react';
import {View, Text, Image,ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Card6 = ({data}) => {
  const {
    waterStorageName,
    capacity,
    unit,
    devices,
    licenseExpireOn
  } = data;
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{waterStorageName}</Text>
          <Icon name="map-marker-alt" size={20} color="darkblue" />
        </View>
        <View style={{width:'100%', borderBottomWidth:1, borderBottomColor:'lightgrey',marginVertical:8}}></View>
        <Image
          source={require('../../assets/warning.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardFooter}>
          <Text>Expired On {licenseExpireOn.split('-').reverse().join('-')}</Text>
          <TouchableOpacity onPress={()=> navigation.navigate('Profile4')}>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
          </TouchableOpacity>
        </View>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'rgb(219,219,227)',
      padding: 18
 
    },
    card: {
      backgroundColor: '#FFFFFF',
       padding: 12,
     borderRadius: 20,
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
    cardImage: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      // marginBottom: 20,
      marginLeft: 94,
      marginTop: 8,
    }
  });
export default Card6
