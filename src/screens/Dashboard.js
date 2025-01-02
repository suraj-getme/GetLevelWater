

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome Users</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTimeText}>Date: 01-10-2024</Text>
          <Text style={styles.dateTimeText}>Time: 17:28:33</Text>
        </View>
      </View>
      <Text style={styles.dashboardText}>Dashboard</Text>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <View style={[styles.card, styles.cardGreen]}>
        <Icon name="th" size={48} color="white" />
          <Text style={styles.cardTitle}>Screen</Text>
          <Text style={styles.cardSubtitle}>-</Text>
          <Text style={styles.cardSubtitle}>Show Details</Text>
        </View>
        <View style={[styles.card, styles.cardPurple]}>
        <Icon name="database" size={48} color="white" />
          <Text style={styles.cardTitle}>Water Storage</Text>
          <Text style={styles.cardSubtitle}>-</Text>
          <Text style={styles.cardSubtitle}>Show Details</Text>
        </View>
        <View style={[styles.card, styles.cardRed]}>
        <Icon name="university" size={48} color="white" />
          <Text style={styles.cardTitle}>Institution</Text>
          <Text style={styles.cardSubtitle}>-</Text>
          <Text style={styles.cardSubtitle}>Show Details</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
  },
  header: {
    backgroundColor: '#3B82F6',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
  },
  dateTimeContainer: {
    alignItems: 'flex-end',
  },
  dateTimeText: {
    color: 'white',
  },
  dashboardText: {
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#000'
  },
  cardsContainer: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#10B981',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
    width: 256,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowRadius: 3,
    elevation: 5,
  },
  cardGreen: {
    backgroundColor: '#10B981',
  },
  cardPurple: {
    backgroundColor: '#8B5CF6',
  },
  cardRed: {
    backgroundColor: '#EF4444',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    marginTop: 8,
  },
  cardSubtitle: {
    color: 'white',
  },
});

export default Dashboard


