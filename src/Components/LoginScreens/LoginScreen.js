import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const BASE_URL = 'http://103.137.36.215:4500';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Function to request OTP from the server
  const handleGetOTP = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Send request to the server to get OTP
      const response = await axios.get(
        `${BASE_URL}/api/users/getOtp/email/${email}`,
      );

      if (response.status === 200) {
        // Check if email exists and is a registered user
        if (response.data.email) {
          // User is registered, navigate to EmailVerify
          console.log('OTP sent to registered user');
          navigation.navigate('EmailVerify', {email});
        } else if (response.data.message === 'new user otp') {
          // New user, navigate to Registration screen
          console.log('New user, redirecting to Registration');
          setError('Email not found. Redirecting to Registration...');
          setTimeout(() => {
            navigation.navigate('Registration', {email});
          }, 1000); // Redirect after a 1-second delay
        } else {
          setError('Enter the valid email adress');
        }
      } else {
        setError('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while sending OTP.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Level Monitoring App</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'http://getleveltank.greeniot.in/static/media/Green_IOT.afb124e9.png',
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.emailContainer}>
        <Icon name="email" size={20} color="#6C6C6C" style={styles.lockIcon} />
        <TextInput
          style={styles.emailInput}
          placeholder="Enter your Email"
          placeholderTextColor={'#C6C6C6'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleGetOTP}
        disabled={isLoading}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Sending OTP...' : 'Get OTP'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 10,
  },
  logoImage: {
    width: 130,
    height: 110,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#6C6C6C',
  },
  emailInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderColor: '#6C6C6C',
    borderWidth: 1,
  },
  lockIcon: {
    marginRight: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 10,
  },
});

export default LoginScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';

// // Base URL for your API
// const BASE_URL = 'http://103.137.36.215:4500';

// const LoginScreen = ({ navigation }) => {
//   const [loginMethod, setLoginMethod] = useState('phone');  // Default login method
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Handle login method change (email or phone)
//   const handleLoginMethodChange = (method) => {
//     setLoginMethod(method);
//   };

//   // Function to request OTP based on the selected method (email or phone)
//   const handleGetOTP = async () => {
//     setError('');
//     setIsLoading(true);

//     if (loginMethod === 'email') {
//       // Handle OTP for email verification
//       if (!email) {
//         setError('Please enter your email');
//         setIsLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(
//           `${BASE_URL}/api/users/getOtp/email/${email}`
//         );

//         if (response.status === 200) {
//           if (response.data.email) {
//             // User is registered
//             navigation.navigate('EmailVerify', { email });
//           } else if (response.data.message === 'new user otp') {
//             // New user, redirect to Registration screen
//             setError('Email not found. Redirecting to Registration...');
//             setTimeout(() => {
//               navigation.navigate('Registration', { email });
//             }, 1000);
//           } else {
//             setError('Invalid email address');
//           }
//         } else {
//           setError('Failed to send OTP. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         setError('An error occurred while sending OTP.');
//       }
//     } else if (loginMethod === 'phone') {
//       // Handle phone verification (you can add the logic for phone verification here)
//       console.log('Phone verification is not yet implemented.');
//     }

//     setIsLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/logo.png')}  // Adjust path to your logo
//         style={styles.logo}
//       />
//       <Text style={styles.subtitle}>Water Level Monitoring App</Text>

//       <View style={styles.card}>
//         {/* Tab selection for login method */}
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[styles.tab, loginMethod === 'phone' ? styles.activeTab : null]}
//             onPress={() => handleLoginMethodChange('phone')}
//           >
//             <Text style={loginMethod === 'phone' ? styles.activeTabText : styles.tabText}>LOGIN BY PHONE</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, loginMethod === 'email' ? styles.activeTab : null]}
//             onPress={() => handleLoginMethodChange('email')}
//           >
//             <Text style={loginMethod === 'email' ? styles.activeTabText : styles.tabText}>LOGIN BY EMAIL</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Input fields for phone or email */}
//         <View style={styles.inputContainer}>
//           {loginMethod === 'phone' ? (
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Your Phone"
//               value={phoneNumber}
//               onChangeText={setPhoneNumber}
//               keyboardType="phone-pad"
//             />
//           ) : (
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Your Email"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//             />
//           )}
//         </View>

//         {/* Display error messages */}
//         {error ? <Text style={styles.errorText}>{error}</Text> : null}

//         {/* Login button */}
//         <TouchableOpacity
//           style={styles.button}
//           onPress={handleGetOTP}
//           disabled={isLoading}
//         >
//           <Text style={styles.buttonText}>
//             {isLoading ? 'Sending OTP...' : 'GET OTP'}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {/* Footer text with link */}
//       <Text style={styles.footerText}>
//         Powered by{' '}
//         <Text
//           style={styles.footerLink}
//           onPress={() => Linking.openURL('https://dolphindls.in/web/')}
//         >
//           Dolphin Logic Systems Private Limited
//         </Text>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#E3F2FD',
//     padding: 20,
//   },
//   logo: {
//     width: 130,
//     height: 110,
//     resizeMode: 'contain',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#1E40AF',
//     marginTop: 20,
//   },
//   card: {
//     marginTop: 32,
//     backgroundColor: 'white',
//     borderRadius: 8,
//     width: 320,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E7EB',
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#1E40AF',
//   },
//   tabText: {
//     color: '#6B7280',
//   },
//   activeTabText: {
//     color: '#1E40AF',
//   },
//   inputContainer: {
//     padding: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#E5E7EB',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#1E40AF',
//     paddingVertical: 12,
//     borderRadius: 8,
//     textAlign: "center",
//     alignItems: 'center',
//     margin: 16,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   errorText: {
//     color: '#D32F2F',
//     marginBottom: 10,
//     fontSize: 14,
//   },
//   footerText: {
//     marginTop: 32,
//     fontSize: 12,
//     color: '#6B7280',
//   },
//   footerLink: {
//     color: '#1E40AF',
//     textDecorationLine: 'underline',
//   },
// });

// export default LoginScreen;

