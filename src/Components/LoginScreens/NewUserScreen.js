import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const NewUserScreen = ({route, navigation}) => {
  const {email} = route.params; // Receiving email from LoginScreen
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle the registration process
  const handleRegister = async () => {
    if (!username || !phone || !otp) {
      setError('All fields are required.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // POST data to the server to create the user
      const response = await axios.post(
        `http://103.137.36.215:4500/api/users/createuser/${otp}`,
        {
          email: email,
          username: username,
          phone: phone,
        },
      );

      if (response.status === 200) {
        console.log('Registration Successful:', response.data);

        // Check if the registration was successful
        if (response.data.success === 1) {
          // Navigate to the main dashboard after successful registration
          navigation.replace('MainScreen'); // Use replace to remove the registration screen from the stack
        } else {
          setError(
            response.data.message || 'Registration failed. Please try again.',
          );
        }
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      {/* <Text>Enter Your Username</Text> */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        // editable={false} // Email field is not editable since it's already provided
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={isLoading}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Registering...' : 'Register'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#6C6C6C',
    borderRadius: 25,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 10,
  },
});

export default NewUserScreen;
