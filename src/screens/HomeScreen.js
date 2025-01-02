import React from 'react';
import {View, Text, ScrollView, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Homescreen = ({navigate}) => {
  const waterHeight = useRef(new Animated.Value(70)).current;
  const navigation = useNavigation()

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(waterHeight, {
          toValue: 80,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(waterHeight, {
          toValue: 70,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [waterHeight]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Users</Text>
        <View style={styles.headerRight}>
          <Text style={styles.dateTimeText}>Date: 27-09-2024</Text>
          <Text style={styles.dateTimeText}>Time: 16:39:10</Text>
        </View>
      </View>
      <Text style={styles.title}>Monitor</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Ramchandra Dombivli(E) KDMC</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 1700000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          {/* <View style={styles.beaker2}>
            <Animated.View
              style={[
                styles.water,
                {
                  height: waterHeight.interpolate({
                    inputRange: [40, 90],
                    outputRange: ['40%', '90%'],
                  }),
                },
              ]}></Animated.View>
            <View style={[styles.indicator, {bottom: '25%'}]} />
            <View style={[styles.indicator, {bottom: '50%'}]} />
            <View style={[styles.indicator, {bottom: '75%'}]} />

            <Text style={styles.label}>57%</Text>
          </View> */}
          <View style={styles.circleContainer}>
            <View style={[styles.circle , {borderColor:'lightblue'}]}>
            <Animated.View style={[styles.water2, {backgroundColor:'lightblue'} ,{ height: waterHeight.interpolate({
                  inputRange: [40, 90],
                  outputRange: ['40%', '90%']
                }) }]}></Animated.View>
                  {/* <Text style={styles.label}>57%</Text> */}
              <Text style={styles.circleText}>0%</Text>
            </View>
            </View>
          <View style={styles.cardContent}>
            <Text style={[styles.cardText, {marginBottom: -5, marginTop: 10}]}>
              0.92 Meters tank filled
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderBottomColor: 'lightgrey',
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                height: 10,
                width: 120,
                marginLeft: 12,
              }}></View>
            <Text style={[styles.cardText, {marginTop: 5}]}>
              2.38 Lakh liters
            </Text>
            <Icon
              name="arrow-up"
              size={18}
              color="green"
              style={styles.arrow}
              onPress={()=>navigation.navigate('Card3')}
            />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          <Text style={styles.cardFooter}>Update At 16:38 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Birla Supriya Kalyan</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 1500000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          <View style={styles.circleContainer}>
            <View style={[styles.circle, styles.expiredCircle]}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 400,
                  backgroundColor: 'lightgrey',
                }}>
                <Text style={styles.expiredText}>EXPIRED</Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardContent]}>
            <Text>-------------</Text>
            <Text>--------------</Text>
          </View>
          {/* <View style={{ borderWidth:2, borderBottomColor:'lightgrey',borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,height:10,width:300}}></View> */}
          <Text style={styles.cardFooter}>Expired On 14/09/2024</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Old Chikanghar Kalyan</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 1500000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Animated.View
                style={[
                  styles.water2,
                  {
                    height: waterHeight.interpolate({
                      inputRange: [40, 90],
                      outputRange: ['40%', '90%'],
                    }),
                  },
                ]}></Animated.View>
              {/* <Text style={styles.label}>57%</Text> */}
              <Text style={styles.circleText}>0%</Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>0 Meters tank filled</Text>
            <Text style={{color: 'black'}}>0 Lakh liters</Text>
            <Icon
              name="arrow-up"
              size={18}
              color="green"
              style={{alignSelf: 'flex-end'}}
            />
          </View>
          <Text style={styles.cardFooter}>Update At 16:39 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Ram Nagar MBR Chandrapur</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 1800000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.circleText}>10%</Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <Text>1 Meters tank filled</Text>
            <Text>1.80 Lakh liters</Text>
            <Icon
              name="arrow-up"
              size={18}
              color="green"
              style={styles.arrow}
            />
          </View>
          <Text style={styles.cardFooter}>Update At 16:39 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Tukum Sumpwell Chandrapur</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>

          <View style={styles.circleContainer}>
            <View style={[styles.circle, styles.warningCircle]}>
              {/* <Icon name="exclamation-triangle" size={24} color="yellow" /> */}
              <Image
                source={require('../assets/warning.png')}
                style={styles.circleImage}
              />
            </View>
          </View>
          <View style={styles.cardContent}>
            <Text>0 Meters tank filled</Text>
            <Text>0 Lakh liters</Text>
            <Icon
              name="arrow-up"
              size={18}
              color="green"
              style={styles.arrow}
            />
          </View>
          <Text style={styles.cardFooter}>Update At 2024-06-27 17:29 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Tukum MBR Chandrapur</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>

          <View style={styles.circleContainer}>
            <View style={[styles.circle, styles.successCircle]}>
              <Text style={styles.circleText}>66%</Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <Text>3.8 m</Text>
            <Text>13.20 Lac Liter</Text>
            <Icon
              name="arrow-down"
              size={18}
              color="red"
              style={styles.arrow}
            />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          <Text style={{marginTop: 5, color: 'black'}}>Valve On - </Text>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginTop: -10,
              marginBottom: -10,
              color: 'black',
            }}>
            Total Valve-2
          </Text>
          <Text style={{marginTop: 5, color: 'black'}}>Valve Off - 2</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          <Text style={styles.cardFooter}>Update At 2024-06-27 17:29 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Intake Kalyan Corporation</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Image
            source={require('../assets/warning.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardFooter}>
            <Text>Update At 2024-08-26 12:03 PM</Text>
            <Icon
              name="arrow-right"
              size={18}
              color="darkblue"
              style={styles.cardArrow}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Samta Nagar Thane Tank1</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 27500000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>

          <View style={styles.circleContainer}>
            <View style={[styles.circle, styles.warningCircle]}>
              {/* <Icon name="exclamation-triangle" size={24} color="yellow" /> */}
              <Image
                source={require('../assets/warning.png')}
                style={styles.circleImage}
              />
            </View>
          </View>
          <View style={styles.cardContent}>
            <Icon
              name="arrow-up"
              size={18}
              color="green"
              style={styles.arrow}
            />
          </View>
          <Text style={styles.cardFooter}>Update At 2024-06-27 17:29 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Intake Samta Nagar Thane</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>
          <Image
            source={require('../assets/warning.png')}
            style={styles.cardImage}
          />
          <View style={styles.cardFooter}>
            <Text>Update At 2024-09-27 17:40 PM</Text>
            <Icon
              name="arrow-right"
              size={18}
              color="darkblue"
              style={styles.cardArrow}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Netaji Tank Chandrapur</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 12000000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>

          <View style={styles.circleContainer}>
            <View style={styles.circle2}>
              <Text style={styles.circleText}>72%</Text>
            </View>
          </View>
          <View style={styles.cardContent}>
            <Text>0.92 Meters tank filled</Text>
            <Text>2.38 Lakh liters</Text>
            <Icon
              name="arrow-down"
              size={18}
              color="red"
              style={styles.arrow}
            />
          </View>
          <Text style={styles.cardFooter}>Update At 16:38 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        {/* { last card }  */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>in-out_flow samta nagar thane</Text>
            <Icon name="map-marker-alt" size={20} color="darkblue" />
          </View>
          <Text style={styles.cardSubtitle}>Capacity 200000 L</Text>
          <View
            style={{
              borderWidth: 2,
              borderBottomColor: 'lightgrey',
              borderTopWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              height: 10,
              width: 300,
            }}></View>

          <View>
            <View style={styles.circleContainer}>
              <Text style={{marginBottom: 2, color: 'black', marginLeft: -10}}>
                0 m
              </Text>
              <View
                style={{
                  alignSelf: 'flex-start',
                  marginTop: -20,
                  marginBottom: 20,
                }}>
                <Text>
                  InFlow <Text style={{color: 'black'}}>Offline</Text>
                </Text>
                <Text>Pressure : bar</Text>
              </View>

              <View style={{alignSelf: 'flex-end', marginTop: -40}}>
                {/* <Icon name="exclamation-triangle" size={24} color="orange" /> */}
                <Text style={{marginBottom: 2, marginTop: -7}}>
                  outflow
                  <Icon
                    name="exclamation-triangle"
                    size={24}
                    color="orange"
                    style={{alignSelf: 'flex-end'}}
                  />
                </Text>
                <Text style={{marginBottom: 4}}>Pressure: Offline</Text>
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
                }}></View>
              <View
                style={{
                  height: 140,
                  width: 18,
                  borderRadius: 400,
                  backgroundColor: 'rgb(182, 188, 226)',
                  marginTop: -140,
                  marginLeft: 215,
                }}></View>
              <Text style={{alignSelf: 'flex-end', marginTop: 20}}>
                29D : 22H : 29M
              </Text>
              <Text style={{alignSelf: 'flex-start', marginTop: -20}}>
                6D : 10H: 59M
              </Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={{color: 'black'}}>0 Lakh liters</Text>
              <View
                style={{
                  marginTop: 20,
                  width: 360,
                  height: 40,
                  borderColor: 'lightgrey',
                  borderWidth: 2,
                }}>
                <Text
                  style={{color: 'black', alignSelf: 'center', marginTop: 8}}>
                  Withheld
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.cardFooter2}>Update At 16:38 PM</Text>
          <Icon
            name="arrow-right"
            size={18}
            color="darkblue"
            style={styles.cardArrow}
          />
        </View>
        <View>
          <Icon
            name="arrow-down"
            size={18}
            color={'red'}
            style={{marginRight: 270, marginTop: -300, marginLeft: 25}}></Icon>
            {/* <TouchableOpacity onPress={}> */}
          <Icon
            name="arrow-up"
            size={18}
            color={'red'}
            style={{marginLeft: 295, marginTop: -30}} 
            onPress={()=>navigation.navigate('Card2')}></Icon>
            {/* </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(219,219,227)',
    // marginBottom: 45,
  },
  header: {
    backgroundColor: '#1E40AF',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  scrollView: {
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 6,
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
  circle2: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  expiredCircle: {
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  expiredText: {
    color: '#ef4444',
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '700',
  },
  warningCircle: {
    borderColor: 'black',
  },
  successCircle: {
    borderColor: '#10b981',
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
    marginTop: 0,
  },
  beaker2: {
    width: 80,
    height: 100,
    borderWidth: 2,
    borderColor: '#3A3A3A',
    borderTopWidth: 0,
    position: 'relative',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  water: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  water2: {
    position: 'absolute',
    height: 85,
    width: 80,
    borderRadius: 42.5,
    // bottom: 0,
    // left: 0,
    // right: 0,
    backgroundColor: 'orange',
    // borderTopLeftRadius: 2,
    // borderTopRightRadius:2
  },
  label: {
    position: 'absolute',
    color: 'white',
    lineHeight: 30,
    width: 30,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: -30,
    backgroundColor: '#3A3A3A',
    right: -35,
    bottom: '76%',
  },
  indicator: {
    position: 'absolute',
    backgroundColor: '#3A3A3A',
    height: 2,
    width: 7,
    right: 0,
  },
});

export default Homescreen;
