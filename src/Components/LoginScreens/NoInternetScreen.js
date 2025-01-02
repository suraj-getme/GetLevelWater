import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'react-native-linear-gradient';
import { WifiOffIcon } from '../../MiniComponent/WifiOffIcon';
import { RetryButton } from '../../MiniComponent/RetryButton';


const { width, height } = Dimensions.get('window');

export const NoInternetScreen = () => {
  const [isRetrying, setIsRetrying] = useState(false);

  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  const handleRetry = () => {
    setIsRetrying(true);
    // Simulate a network check
    setTimeout(() => {
      setIsRetrying(false);
    }, 3000);
  };

  return (
    <LinearGradient
      colors={['#1a237e', '#000000']}
      style={styles.container}
    >
      <Animated.View style={[styles.iconContainer, animatedStyles]}>
        <WifiOffIcon width={120} height={120} color="#ffffff" />
      </Animated.View>
      <Text style={styles.title}>No Internet Connection</Text>
      <Text style={styles.subtitle}>
        Please check your network settings and try again.
      </Text>
      <RetryButton onPress={handleRetry} isLoading={isRetrying} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#b0bec5',
    marginBottom: 30,
    textAlign: 'center',
  },
});

