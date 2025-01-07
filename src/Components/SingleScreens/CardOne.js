import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import {
  Canvas,
  Circle,
  Group,
  Path,
  Skia,
  useClockValue,
  useComputedValue,
  useValue,
  rrect,
  rect,
} from '@shopify/react-native-skia';
import { curveBasis, line } from 'd3';
import { ScreenWidth } from 'react-native-screens';
import ProfileScreen from '../ProfileScreens/ProfileScreen'; // Make sure this path is correct

const Card1 = React.memo(({ data }) => {
  const { waterStorageName, capacity, unit, devices } = data;
  const device = devices && devices.length > 0 ? devices[0] : {};
  const navigation = useNavigation();

  const [percentage, setPercentage] = useState(device.percentage || 0);
  const [flipped, setFlipped] = useState(false); // State for flip

  useEffect(() => {
    setPercentage(device.percentage || 0);
  }, [device]);

  // Calculate size based on screen width
  const { width: screenWidth } = Dimensions.get('window');
  const size = useMemo(() => {
    const calculatedSize = screenWidth * 0.3;
    // console.log('Calculated size:', calculatedSize); // Debugging log
    return !isNaN(calculatedSize) ? calculatedSize : 200; // Fallback value if NaN
  }, [screenWidth]);

  const r = size / 2;
  const padding = size / 25;
  const strokeSpace = 5;
  const outerCircleRadius = r - padding / 2;
  const innerCircleSize = size - strokeSpace * 2 - padding;

  const frequency = 3;
  const amplitude = 10;
  const verticalOffset = useValue(100);
  const clock = useClockValue();

  // Update vertical offset when percentage changes
  useEffect(() => {
    verticalOffset.current = (1 - percentage / 100) * innerCircleSize;
  }, [percentage]);

  // Memoize the path to avoid recalculating unnecessarily
  const createAnimatedPath = useCallback(
    (phase = 20) => {
      const d3Points = Array.from({ length: size }).map((_, i) => {
        const angle = (i / size) * (Math.PI * frequency) + phase;
        const y = (Math.sin(angle) * amplitude) / 4 + verticalOffset.current;
        return [i, y];
      });

      let pathString = `M${d3Points[0][0]} ${d3Points[0][1]}`;
      for (let i = 1; i < d3Points.length; i++) {
        pathString += ` L${d3Points[i][0]} ${d3Points[i][1]}`;
      }
      pathString += ` L${size} ${size} L0 ${size} Z`;
      return pathString;
    },
    [verticalOffset, size, frequency, amplitude]
  );

  const animatedPath = useComputedValue(() => {
    const phase = (clock.current / 250) % (Math.PI * 2); // Smoother, continuous animation
    const pathString = createAnimatedPath(phase);
    return Skia.Path.MakeFromSVGString(pathString);
  }, [clock, createAnimatedPath]);

  const roundedRectangle = rrect(
    rect(
      padding - 2.5 + strokeSpace,
      padding - 2.5 + strokeSpace,
      innerCircleSize,
      innerCircleSize
    ),
    r,
    r
  );

  const strokeColor = useMemo(() => {
    if (percentage < 25) return '#FFF380'; // Yellow
    if (percentage > 80) return '#e82c47'; // Red
    return '#279418'; // Green
  }, [percentage]);

  const flipAnimation = useMemo(() => new Animated.Value(0), []);

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const flipCard = () => {
    Animated.spring(flipAnimation, {
      toValue: flipped ? 0 : 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
    setFlipped((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Flip Card View */}
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View
            style={{
              transform: [{ rotateY: frontInterpolate }],
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Front Side of the Card */}
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>{waterStorageName}</Text>
                <Text style={styles.cardSubtitle}>
                  Capacity: {capacity} {unit}
                </Text>
                <View style={styles.borderLine}></View>
              </View>
              <Icon
                name="map-marker-alt"
                size={20}
                color="black"
                style={{ left: 0 }}
              />
            </View>
            <View style={styles.cardContent}>
              <View>
                {device.levelStatus === 'Online' ? (
                  <View>
                    <Canvas style={{ width: size, height: size }}>
                      <Circle
                        cx={r}
                        cy={r}
                        r={outerCircleRadius}
                        style="stroke"
                        strokeWidth={padding}
                        color={strokeColor}
                      />
                      <Group clip={roundedRectangle}>
                        <Path path={animatedPath} color={strokeColor} />
                      </Group>
                    </Canvas>
                    <Text
                      style={{
                        position: 'absolute',
                        bottom: r - 15,
                        left: r - 20,
                        fontSize: percentage >= 100 ? 20 : 24,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        color: percentage >= 40 ? 'white' : 'black',
                      }}
                    >
                      {percentage}%
                    </Text>
                  </View>
                ) : (
                  <View style={styles.circleContainer}>
                    <View style={[styles.circle, styles.warningCircle]}>
                      <Image
                        source={require('../../assets/warning.png')}
                        style={styles.circleImage}
                      />
                    </View>
                  </View>
                )}
              </View>
              <View style={styles.cardText}>
                <Text style={[styles.cardDetail, { marginBottom: -3 }]}>
                  {device.elevationInMeter
                    ? `${device.elevationInMeter} Meters`
                    : `${device.elevation} Meters`}
                </Text>
                <View style={styles.cardborderLine}></View>
                <Text style={[styles.cardDetail, { marginTop: 5 }]}>
                  {device.elevation
                    ? `${device.elevation} Liters`
                    : `${capacity} ${unit}`}
                </Text>
              </View>
            </View>
            <View style={styles.borderLine}></View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>
                Updated At:{' '}
                {device.currentTime
                  ? device.currentTime.split(' ')[1]
                  : 'Not Available'}
              </Text>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
        {/* Back Side of the Card */}
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View
            style={{
              transform: [{ rotateY: backInterpolate }],
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backfaceVisibility: 'hidden',
            }}
          >
            <ProfileScreen
              route={{
                params: {
                  waterStorageId: data.waterStorageId,
                  percentage: percentage,
                },
              }}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate('Graph1', { waterStorageId: data.waterStorageId })
        }
      >
        <Icon
          name="arrow-right"
          size={20}
          color="black"
          style={{ alignSelf: 'flex-end', top: -35, right: 20 }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
    marginBottom: -20,
  },
  card: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 20,
    marginBottom: 6,
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
    color: '#000',
  },
  cardSubtitle: {
    color: '#000',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
  warningCircle: {
    borderColor: 'black',
  },
  circleImage: {
    width: 55,
    height: 55,
    borderRadius: 22,
    alignSelf: 'center',
    marginBottom: 5,
  },
  borderLine: {
    height: 1,
    width: '180%',
    backgroundColor: '#dcdcdc',
    marginVertical: 2,
    marginBottom: 2,
    right: 10,
  },
  cardborderLine: {
    borderTopWidth: 1.2,
    borderTopColor: 'lightgrey',
    width: '90%',
    marginLeft: 25,
    marginTop: 5,
    marginBottom: -2,
  },
});

export default Card1;







