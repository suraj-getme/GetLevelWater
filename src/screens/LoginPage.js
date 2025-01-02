
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import Homescreen from './HomeScreen';

const phonenumber = 123
const email = '123@gmail.com'

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
  };

  const handleLogin = () => {
    if (loginMethod === 'phone') {
      console.log('Login with phone number:', phoneNumber);
    } else if (loginMethod === 'email') {
      console.log('Login with email:', email);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.subtitle}>GET LEVEL USER</Text>
      <View style={styles.card}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              loginMethod === 'phone' ? styles.activeTab : null,
            ]}
            onPress={() => handleLoginMethodChange('phone')}
          >
            <Text style={loginMethod === 'phone' ? styles.activeTabText : styles.tabText}>LOGIN BY PHONE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              loginMethod === 'email' ? styles.activeTab : null,
            ]}
            onPress={() => handleLoginMethodChange('email')}
          >
            <Text style={loginMethod === 'email' ? styles.activeTabText : styles.tabText}>LOGIN BY MAIL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          {loginMethod === 'phone' ? (
            <TextInput
              style={styles.input}
              placeholder="Enter Your Phone"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="phone-pad"
            /> 
          )             
          : (
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            /> 
          )} 
          
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>NEXT</Text> 
        <Icon name="long-arrow-right" size={20} color="white" style={styles.arrowCard}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerText}>
        Powered by{' '}
        <Text style={styles.footerLink} onPress={() => Linking.openURL('https://dolphindls.in/web/')}>Dolphin Logic Systems Private Limited</Text>
      </Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#1E40AF',
  },
  card: {
    marginTop: 32,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1E40AF',
  },
  tabText: {
    color: '#6B7280',
  },
  activeTabText: {
    color: '#1E40AF',
  },
  inputContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E40AF',
    paddingVertical: 12,
    borderRadius: 8,
    textAlign: "center",
    alignItems: 'center',
    margin: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footerText: {
    marginTop: 32,
 fontSize: 12,
    color: '#6B7280',
  },
  footerLink: {
    color: '#1E40AF',
    textDecorationLine: 'underline',
  },
  arrowCard: {
    marginTop:-17,
    marginRight:-170
    // marginBottom: 8,
    
  }
});

export default LoginPage;

