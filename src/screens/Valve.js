
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Valve = () => {
  return (
    <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome Users</Text>
      <View style={styles.headerRight}>
        <View style={styles.dateTime}>
          <Text style={styles.dateTimeText}>Date: 28-09-2024</Text>
          <Text style={styles.dateTimeText}>Time: 12:19:03</Text>
        </View>
      </View>
    </View>

    {/* Main Content */}
    <ScrollView contentContainerStyle={styles.content}>
      {/* Card 1 */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Tukum MBR 700mm ch...</Text>
          <Icon name="map-marker" size={24} color="rgba(0, 0, 0, 0.87)" />
        </View>
        <Text style={styles.cardSubtitle}>Diameter 700 mm</Text>
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyText}>Pressure</Text>
          <Text style={styles.cardBodyValue}>0 bar</Text>
          <Image
                  source={require('../assets/warning.png')}
                style={styles.warningIcon}
          />
          <View style={styles.progressBar}>
            <View style={styles.progressBarFill} />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Status</Text>
        </TouchableOpacity>
        <View style={styles.cardFooter}>
          <Text style={styles.cardFooterText}>Update At 2024-08-13 11:39 AM</Text>
          <Icon name="arrow-right" size={16} color="rgba(0, 0, 0, 0.87)" />
        </View>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Tukum MBR 500mm ch...</Text>
          <Icon name="map-marker" size={24} color="rgba(0, 0, 0, 0.87)" />
        </View>
        <Text style={styles.cardSubtitle}>Diameter 500 mm</Text>
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyText}>Pressure</Text>
          <Text style={styles.cardBodyValue}>0 bar</Text>
          <Image
            source={require('../assets/warning.png')}
            style={styles.warningIcon}
          />
          <View style={styles.progressBar}>
            <View style={styles.progressBarFill} />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Status</Text>
        </TouchableOpacity>
        <View style={styles.cardFooter}>
          <Text style={styles.cardFooterText}>Update At 2024-08-13 11:39 AM</Text>
          <Icon name="arrow-right" size={16} color="rgba(0, 0, 0, 0.87)" />
        </View>
      </View>
    </ScrollView>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#E5E7EB',
  marginBottom:45
},
header: {
  backgroundColor: '#1E40AF',
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
  flexDirection: 'row',
  alignItems: 'center',
},
dateTime: {
  marginRight: 8,
},
dateTimeText: {
  color: 'white',
  fontSize: 12,
},
content: {
  padding: 16,
},
card: {
  backgroundColor: 'white',
  borderRadius: 8,
  padding: 16,
  marginBottom: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 2,
},
cardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
cardTitle: {
  fontSize: 16,
  fontWeight: 'bold',
},
cardSubtitle: {
  color: '#6B7280',
  marginTop: 4,
},
cardBody: {
  alignItems: 'center',
  marginTop: 16,
},
cardBodyText: {
  color: '#6B7280',
},
cardBodyValue: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 4,
},
warningIcon: {
  width: 50,
  height: 50,
  marginVertical: 8,
},
progressBar: {
  width: '100%',
  height: 10,
  backgroundColor: '#FECACA',
  borderRadius: 5,
  overflow: 'hidden',
  marginTop: 8,
},
progressBarFill: {
  width: '0%',
  height: '100%',
  backgroundColor: '#EF4444',
},
button: {
  backgroundColor: '#FECACA',
  paddingVertical: 12,
  borderRadius: 4,
  marginTop: 16,
  alignItems: 'center',
},
buttonText: {
  color: '#EF4444',
  fontWeight: 'bold',
},
cardFooter: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 16,
},
cardFooterText: {
  color: '#6B7280',
  fontSize: 12,
},
});

export default Valve;
