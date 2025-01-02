import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Appearance,
  Alert,
} from 'react-native';
import {Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CircularProgress, {
  CircularProgressBase,
} from 'react-native-circular-progress-indicator';
import {Easing} from 'react-native';
import Svg, {Defs, ClipPath, Circle, Rect, Path, G} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BackHandler } from 'react-native';

const App = ({navigation}) => {
  const naivigation = useNavigation()
  // i want to write code to user not going to back 
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     () => {
  //       Alert.alert('Exit App', 'Do you want to exit app?', [
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel',
  //           },
  //           {
  //             text: 'OK',
  //             onPress: () => BackHandler.exitApp(),
  //             },
  //             ]);
  //             return true
  //             }
  //             );
  //             return () => {
  //               backHandler.remove
  //               }
  //               }, [naivigation]);

  const waterHeight = useRef(new Animated.Value(70)).current;
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

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  // ============================================================================================

  const waterRiseAnim = useRef(new Animated.Value(100)).current;
  const waveAnim1 = useRef(new Animated.Value(0)).current;
  const waveAnim2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate water rising
    Animated.timing(waterRiseAnim, {
      toValue: 40,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    // Animate waves
    Animated.loop(
      Animated.timing(waveAnim1, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    Animated.loop(
      Animated.timing(waveAnim2, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const waterTranslateY = waterRiseAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  const waveTransform1 = waveAnim1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0', '-100'],
  });

  const waveTransform2 = waveAnim2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0', '-100'],
  });

  // =========================================================================================

  return (
    // <View style={[styles.container]}>
    <View
      style={{
        flex: 1,
        backgroundColor:
          theme === 'light' ? 'black' : 'rgba(128, 128, 128, 0.24)',
      }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Suraj</Text>
        <View style={styles.headerRight}>
          <Text style={styles.headerDate}>Date: 02-10-2024</Text>
          <Text style={styles.headerTime}>Time: 10:52:38</Text>
        </View>
      </View>
      {/* <Text style={styles.title}>Monitor</Text> */}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Monitor</Text>
        <View style={styles.cardContainer}>
          {/* Card 1 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>
                  Ramchandra Dombivli(E) KDMC
                </Text>
                <Text style={[styles.cardSubtitle]}>Capacity 1700000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              {/* <View style={styles.beaker2}>
                <Animated.View style={[styles.water, { height: waterHeight.interpolate({
                  inputRange: [40, 90],
                  outputRange: ['40%', '90%']
                }) }]}></Animated.View>
                <View style={styles.waterLevelIndicator}></View>
                <View style={[styles.indicator, {top:'1%'}]}/>
                <View style={[styles.indicator, { bottom: '25%' }]} />
                <View style={[styles.indicator, { bottom: '50%' }]} />
                <View style={[styles.indicator, { bottom: '75%' }]} />
                  <Text style={styles.label}>57%</Text>
                <Text style={styles.percentage}>76%</Text>
              </View> */}
              {/* <CircularProgress
               radius={50}
                  value={80}
                  maxValue={100}
                    duration={5000}
                    activeStrokeColor={'green'}
                    activeStrokeSecondaryColor={'lightgreen'}
                    rotation={-360}
                    valueSuffix='%'
                  inActiveStrokeColor='green'
                  inActiveStrokeOpacity={0.2}
                  progressValueColor='black'
                  inActiveStrokeWidth={7}
                  activeStrokeWidth={7}
                  progressValueStyle={{fontWeight:'600', fontSize:22}}
                  // onAnimationComplete={() => alert('Refreshed !')}
                  /> */}
              <View style={[styles.container, {backgroundColor: ''}]}>
                <Svg width="130" height="150" viewBox="-2 0 110 110">
                  <Defs>
                    <ClipPath id="circleClip">
                      <Circle cx="50" cy="50" r="45" />
                    </ClipPath>
                  </Defs>

                  {/* Circle container */}
                  <Circle
                    cx="50"
                    cy="50"
                    r="50"
                    fill="none"
                    stroke="green"
                    strokeWidth="3"
                  />

                  {/* Water */}
                  <G clipPath="url(#circleClip)">
                    {/* <AnimatedRect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="lightgreen"
            style={{ transform: [{ translateY: waterTranslateY }] }}
            
          /> */}
                    {/* <AnimatedPath
            d="M0 55 Q 25 45, 50 55 T 100 55 T 150 55 T 200 55 V 100 H 0 Z"
            // d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
            fill="green"
            style={{ transform: [{ translateX: waveTransform1 }] }}
          /> */}
                    <AnimatedPath
                      d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
                      fill="green"
                      style={{transform: [{translateX: waveTransform2}]}}
                    />
                    <AnimatedPath
                      d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
                      fill="green"
                      style={{transform: [{translateX: waveTransform2}]}}
                    />
                    <Text
                      style={{
                        marginTop: 45,
                        marginLeft: 45,
                        fontWeight: '900',
                        color: 'black',
                        fontSize: 18,
                      }}>
                      76%
                    </Text>
                  </G>
                </Svg>
              </View>
              <View style={styles.cardText}>
                <Text style={[styles.cardDetail, {marginBottom: -3}]}>
                  3.71 Meters tank filled
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
                    marginLeft: 33,
                  }}></View>
                <Text style={[styles.cardDetail, {marginTop: 5}]}>
                  12.92 Lakh liters
                </Text>
                <View style={{marginLeft: 165, marginTop: -10}}>
                  <Icon name="arrow-up" size={18} color={'green'} style={{}} />
                </View>
              </View>
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
                marginBottom: 15,
              }}></View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <TouchableOpacity onPress={()=>naivigation.navigate('Home')}>
              <Icon name="arrow-right" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Birla Supriya Kalyan</Text>
                <Text style={styles.cardSubtitle}>Capacity 1500000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              {/* <View style={[styles.beaker2, {backgroundColor:'white'}]}>
                <View style={[styles.water, { height: '0%', backgroundColor: '#ccc' }]}></View>
                <Text style={[styles.percentage, { color: '#e3342f',}]}>EXPIRED</Text>
              </View> */}
              <CircularProgress
                radius={50}
                value={0}
                maxValue={100}
                duration={5000}
                activeStrokeColor={'#E75D5C'}
                activeStrokeSecondaryColor={'#F79E94'}
                rotation={-360}
                valueSuffix="%"
                inActiveStrokeColor="#B3B3B3"
                inActiveStrokeOpacity={0.3}
                progressValueColor="black"
                inActiveStrokeWidth={7}
                activeStrokeWidth={7}
                progressValueStyle={{fontWeight: '600', fontSize: 22}}
              />
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Expired On 14/09/2024</Text>
              <Icon name="arrow-right" size={18} color="black" />
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Old Chikanghar Kalyan</Text>
                <Text style={styles.cardSubtitle}>Capacity 1500000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              {/* <View style={styles.beaker2}>
              {/* <View style={styles.rim} /> 
                <View style={[styles.water, { height: '0%', backgroundColor: '#ffa500' }]}></View>
                <Text style={[styles.percentage, { color: '#ffa500' }]}>0%</Text>
              </View> */}
              {/* <CircularProgress
               radius={50}
                  value={0}
                  maxValue={100}
                    duration={5000}
                    activeStrokeColor={'#E75D5C'}
                    activeStrokeSecondaryColor={'#F79E94'}
                    rotation={-360}
                    valueSuffix='%'
                  inActiveStrokeColor='#E75D5C'
                  inActiveStrokeOpacity={0.3}
                  progressValueColor='black'
                  inActiveStrokeWidth={7}
                  activeStrokeWidth={7}
                  progressValueStyle={{fontWeight:'600', fontSize:22}}
                  /> */}
              <View style={[styles.container, {backgroundColor: ''}]}>
                <Svg width="130" height="150" viewBox="-2 0 110 110">
                  <Defs>
                    <ClipPath id="circleClip">
                      <Circle cx="50" cy="50" r="45" />
                    </ClipPath>
                  </Defs>

                  {/* Circle container */}
                  <Circle
                    cx="50"
                    cy="50"
                    r="50"
                    fill="none"
                    stroke="skyblue"
                    strokeWidth="3"
                  />

                  {/* Water */}
                  <G clipPath="url(#circleClip)">
                    {/* <AnimatedRect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="lightgreen"
            style={{ transform: [{ translateY: waterTranslateY }] }}
            
          /> */}
                    <AnimatedPath
                      d="M0 55 Q 25 45, 50 55 T 100 55 T 150 55 T 200 55 V 100 H 0 Z"
                      // d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
                      fill="#60a5fa"
                      style={{transform: [{translateX: waveTransform1}]}}
                    />
                    <AnimatedPath
                      d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
                      fill="#93c5fd"
                      style={{transform: [{translateX: waveTransform2}]}}
                    />
                    <AnimatedPath
                      d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
                      fill="#4973"
                      style={{transform: [{translateX: waveTransform2}]}}
                    />
                    <Text
                      style={{
                        marginTop: 45,
                        marginLeft: 45,
                        fontWeight: '900',
                        color: 'black',
                        fontSize: 18,
                      }}>
                      50%
                    </Text>
                  </G>
                </Svg>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>0 Meters tank filled</Text>
                <Text style={styles.cardDetail}>0 Lakh liters</Text>
                <View style={{marginLeft: 175, marginTop: -30}}>
                  <Icon name="arrow-up" size={18} color={'green'} style={{}} />
                </View>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <Icon name="arrow-right" size={18} color="black" />
            </View>
          </View>

          {/* Card 4 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Ram Nagar MBR Chandrapur</Text>
                <Text style={styles.cardSubtitle}>Capacity 1800000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              {/* <View style={styles.beaker2}>
                <Animated.View style={[styles.water, { height: waterHeight.interpolate({
                  inputRange: [10, 30],
                  outputRange: ['10%', '30%']
                }), backgroundColor:'lightblue'}]}></Animated.View>
            
                 <View style={[styles.indicator, { bottom: '25%' }]} />
                <View style={[styles.indicator, { bottom: '50%' }]} />
                <View style={[styles.indicator, { bottom: '75%' }]} />

                  <Text style={[styles.label, {bottom: '20%'}]}>10%</Text>
              </View> */}
              <CircularProgress
                radius={50}
                value={50}
                maxValue={100}
                duration={5000}
                activeStrokeColor={'#FF9F05'}
                activeStrokeSecondaryColor={'#FFBE43'}
                rotation={-360}
                valueSuffix="%"
                inActiveStrokeColor="#FF9F05"
                inActiveStrokeOpacity={0.2}
                progressValueColor="black"
                inActiveStrokeWidth={7}
                activeStrokeWidth={7}
                progressValueStyle={{fontWeight: '600', fontSize: 22}}
              />
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
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>1 Meters tank filled</Text>
                <Text style={styles.cardDetail}>1.80 Lakh liters</Text>
                <View style={{marginLeft: 185, marginTop: -30}}>
                  <Icon
                    name="arrow-up"
                    size={18}
                    color={'green'}
                    style={{marginLeft: -14}}
                  />
                </View>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <Icon name="arrow-right" size={18} color="black" />
            </View>
          </View>

          {/* Card 5 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Tukum Sumpwell Chandrapur</Text>
                <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              {/* <View style={styles.beaker2}>
                <View style={[styles.water, { height: '0%', backgroundColor: '#ffcc00' }]}></View>
                <Text style={[styles.percentage, { color: '#ffcc00' }]}><Icon name="exclamation-triangle" size={24} /></Text>
              </View> */}
              <CircularProgress
                radius={50}
                value={80}
                maxValue={100}
                duration={5000}
                activeStrokeColor={'#CF3341'}
                activeStrokeSecondaryColor={'#E75D5C'}
                rotation={-360}
                valueSuffix="%"
                inActiveStrokeColor="#B00020"
                inActiveStrokeOpacity={0.2}
                progressValueColor="black"
                inActiveStrokeWidth={7}
                activeStrokeWidth={7}
                progressValueStyle={{fontWeight: '600', fontSize: 22}}
              />
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>0 Meters tank filled</Text>
                <Text style={styles.cardDetail}>0 Lakh liters</Text>
                <View style={{marginLeft: 165, marginTop: -10}}>
                  <Icon name="arrow-up" size={18} color={'green'} style={{}} />
                </View>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>
                Update At 2024-06-27 17:29 PM
              </Text>
              <Icon name="arrow-right" size={18} color="black" />
            </View>
          </View>

          {/* Card 6 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Tukum MBR Chandrapur</Text>
                <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              <View>
                <Image
                  source={require('../assets/watertank.png')}
                  style={{height: 150, width: 120, marginBottom: -30}}
                />
                {/* <View style={styles.rim} /> */}
                {/* <Animated.View style={[styles.water2, { height: waterHeight.interpolate({
                  inputRange: [10, 30],
                  outputRange: ['10%', '30%']
                }), backgroundColor:'lightblue'}]}></Animated.View> */}
                <Text style={[styles.percentage]}>56%</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>3.3 m</Text>
                <Text style={styles.cardDetail}>11.20 Lac Liter</Text>
                <View style={{marginLeft: 185, marginTop: -30}}>
                  <Icon name="arrow-up" size={18} color={'green'} style={{}} />
                </View>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Valve On - Valve Off - 2</Text>
              <Text style={styles.cardUpdate}>Total Valve - 2</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <Icon name="arrow-right" size={18} color="black" />
            </View>
          </View>

          {/* Card 7 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Intake Kalyan Corporation</Text>
                <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker2}>
                {/* <View style={styles.rim} /> */}
                <View
                  style={[
                    styles.water,
                    {height: '0%', backgroundColor: '#ffcc00'},
                  ]}></View>
                <Text style={[styles.percentage, {color: '#ffcc00'}]}>
                  <Icon name="exclamation-triangle" size={24} />
                </Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>
                Update At 2024-08-26 12:03 PM
              </Text>
              <Icon name="arrow-right" size={18} color="black" />
            </View>
          </View>

          {/* Card 8 */}
          <View style={[styles.card, {bottom: 0}]}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Samta Nagar Thane Tank1</Text>
                <Text style={styles.cardSubtitle}>Capacity 2750000 L</Text>
                <View
                  style={{
                    borderWidth: 1,
                    borderBottomColor: 'lightgrey',
                    borderTopWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    height: 10,
                    width: 300,
                  }}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={18}
                color="black"
                style={{marginLeft: -20}}
              />
            </View>
            <View style={styles.cardContent}>
              {/* <View style={styles.beaker2}>
              <View style={styles.rim} />
                <View style={[styles.water, { height: '0%', backgroundColor: '#ffcc00' }]}></View>
                <Text style={[styles.percentage, { color: '#ffcc00' }]}> */}
              <CircularProgress
                radius={50}
                value={0}
                maxValue={100}
                duration={5000}
                activeStrokeColor={'green'}
                activeStrokeSecondaryColor={'lightgreen'}
                valueSuffix="%"
                inActiveStrokeColor="green"
                inActiveStrokeOpacity={0.2}
                progressValueColor="black"
                inActiveStrokeWidth={7}
                activeStrokeWidth={7}
                progressValueStyle={{fontWeight: '600', fontSize: 0}}
              />
              <Image
                source={require('../assets/warning.png')}
                style={styles.circleImage}
              />

              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>0 Meters tank filled</Text>
                <Text style={styles.cardDetail}>0 Lakh liters</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>
                Update At 2024-09-20 13:31 PM
              </Text>
              <Icon name="arrow-right" size={18} color="black" onPress={()=>{naivigation.navigate('Card4')}}/>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#598BFF',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  headerRight: {
    alignItems: 'flex-end',
  },
  headerDate: {
    color: 'white',
  },
  headerTime: {
    color: 'white',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
    color: 'black',
  },
  cardContainer: {
    flexDirection: 'column',
    spaceBetween: 16,
    marginBottom: 45,
  },
  card: {
    backgroundColor: '#FFFFFF',
    // backgroundColor: ('light' ? 'black'  : '#FFFFFF') ,
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 2,
    bottom: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#666',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  beaker: {
    position: 'relative',
    width: 80,
    height: 110,
    borderWidth: 2,
    borderColor: 'green',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'transparent',
  },
  beaker2: {
    width: 80,
    height: 100,
    borderWidth: 2,
    borderColor: 'black',
    borderTopWidth: 0,
    position: 'relative',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  rim: {
    position: 'absolute',
    top: -5,
    left: 20,
    right: 20,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  rim2: {
    position: 'absolute',
    top: -5,
    left: -2,
    right: -2,
    height: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  water: {
    // position: 'absolute',
    // bottom: 0,
    // width: '100%',
    // backgroundColor: '#e3342f',
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
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 20,
    width: 20,
  },
  percentage: {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'white',
    fontWeight: 'bold',
    marginTop: 35,
    alignSelf: 'center',
  },
  cardText: {
    marginLeft: 16,
  },
  cardDetail: {
    color: '#666',
    marginLeft: 30,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardUpdate: {
    color: '#666',
  },
  circleImage: {
    width: 50,
    height: 50,
    borderRadius: 22,
    alignSelf: 'center',
    marginTop: 20,
    marginLeft: -50,
  },
  label: {
    position: 'absolute',
    color: 'black',
    lineHeight: 30,
    width: 30,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: -30,
    // backgroundColor: 'lightblue',
    right: 20,
    bottom: '76%',
    fontWeight: 'bold',
    fontSize: 15,
  },
  indicator: {
    position: 'absolute',
    backgroundColor: 'black',
    height: 2,
    width: 9,
    right: 0,
  },
  waterLevelIndicator: {
    marginLeft: 76,
    width: 10,
    height: 120,
    marginTop: -10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  water2: {
    position: 'absolute',
    height: 85,
    width: 80,
    borderRadius: 42.5,
    // bottom: 0,
    // left: 0,
    // right: 0,
    backgroundColor: 'transparent',
    marginLeft: 10,
  },
});

export default App;
const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedPath = Animated.createAnimatedComponent(Path);
