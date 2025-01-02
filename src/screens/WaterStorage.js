// Card1.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card1 = ({ data }) => {
  const {
    waterStorageName,
    capacity,
    unit,
    latitude,
    longitude,
    higherLevel,
    lowerLevel,
    registeredOn,
    licenseStatus,
    devices,
  } = data;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{waterStorageName}</Text>
      <Text style={styles.info}>Capacity: {capacity} {unit}</Text>
      <Text style={styles.info}>Higher Level: {higherLevel}</Text>
      <Text style={styles.info}>Lower Level: {lowerLevel}</Text>
      <Text style={styles.info}>License Status: {licenseStatus === 'true' ? 'Active' : 'Inactive'}</Text>
      <Text style={styles.info}>Registered On: {registeredOn}</Text>
      <Text style={styles.info}>Latitude: {latitude}</Text>
      <Text style={styles.info}>Longitude: {longitude}</Text>
      <Text style={styles.info}>Devices Online: {devices.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default Card1;
