import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios'; // Ensure axios is installed

const EmailVerificationScreen = ({navigation, route}) => {
  const {email} = route.params;
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(120);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Function to verify the OTP entered by the user
  const handleVerify = async () => {
    if (!otp) {
      setError('Please enter the OTP');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Send the OTP to the server for verification
      const response = await axios.post(
        'http://103.137.36.215:4500/api/users/login/email',
        {
          email,
          OTP: otp, // OTP entered by user
        },
      );

      if (response.status === 200 && response.data.success === 1) {
        // If the OTP is correct, navigate to MainDashboard
        navigation.navigate('WhoAmI');
      } else {
        // If the OTP is incorrect, show an error message
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while verifying OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP function (This can also trigger an API call to resend OTP)
  const handleResendOTP = async () => {
    setTimer(120); // Reset the timer

    // Resend OTP API logic
    try {
      // Call the API to resend the OTP
      const response = await axios.get(
        `http://103.137.36.215:4500/api/users/getOtp/email/${email}`,
      );
      if (response.status === 200 && response.data.success) {
        setError('OTP sent successfully. Please check your email.');
      } else {
        setError('Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while resending OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Verification</Text>

      {/* Display Email in Read-only */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        editable={false}
      />

      {/* OTP Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#6C6C6C"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
      />

      {/* Display Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Timer & Resend OTP */}
      <View style={styles.timerContainer}>
        <TouchableOpacity onPress={handleResendOTP} disabled={timer > 0}>
          <Text style={[styles.resendText, timer > 0 && styles.disabledText]}>
            Resend OTP
          </Text>
        </TouchableOpacity>
        <Text style={styles.timerText}>{timer}s</Text>
      </View>

      {/* Verify Button */}
      <TouchableOpacity
        style={styles.verifyButton}
        onPress={handleVerify}
        disabled={isLoading}>
        <Text style={styles.buttonText}>
          {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
        </Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4CAF50',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#6C6C6C',
    color: 'black',
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 10,
    fontSize: 14,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  resendText: {
    color: '#2196F3',
    fontSize: 16,
  },
  disabledText: {
    color: '#9E9E9E',
  },
  timerText: {
    color: '#333333',
    fontSize: 16,
  },
  verifyButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#757575',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default EmailVerificationScreen;
