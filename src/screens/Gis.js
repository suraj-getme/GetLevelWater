import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const API_URL = 'http://103.137.36.215:4500/api/userWaterStorage/user_dashboard'

const Cards = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome Suraj</Text>
        <View style={styles.headerRight}>
          <Text style={styles.headerDate}>Date: 02-10-2024</Text>
          <Text style={styles.headerTime}>Time: 10:52:38</Text>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Monitor</Text>
        <View style={styles.cardContainer}>
          {/* Card 1 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Ramchandra Dombivli(E) KDMC</Text>
                <Text style={styles.cardSubtitle}>Capacity 1700000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="blue" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={styles.water}></View>
                <Text style={styles.percentage}>76%</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>3.71 Meters tank filled</Text>
                <Text style={styles.cardDetail}>12.92 Lakh liters</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <Icon name="long-arrow-right" size={24} color="black" />
            </View>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Birla Supriya Kalyan</Text>
                <Text style={styles.cardSubtitle}>Capacity 1500000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="#1E90FF" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={[styles.water, { height: '0%', backgroundColor: '#ccc' }]}></View>
                <Text style={[styles.percentage, { color: '#e3342f' }]}>EXPIRED</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Expired On 14/09/2024</Text>
              <Icon name="arrow-right" size={24} color="#1E90FF" />
            </View>
          </View>

          {/* Card 3 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Old Chikanghar Kalyan</Text>
                <Text style={styles.cardSubtitle}>Capacity 1500000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="#1E90FF" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={[styles.water, { height: '0%', backgroundColor: '#ffa500' }]}></View>
                <Text style={[styles.percentage, { color: '#ffa500' }]}>0%</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>0 Meters tank filled</Text>
                <Text style={styles.cardDetail}>0 Lakh liters</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <Icon name="long-arrow-right" size={24} color="#1E90FF" />
            </View>
          </View>

          {/* Card 4 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Ram Nagar MBR Chandrapur</Text>
                <Text style={styles.cardSubtitle}>Capacity 1800000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="#1E90FF" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={[styles.water, { height: '10%', backgroundColor: '#ffa500' }]}></View>
                <Text style={[styles.percentage, { color: '#ffa500' }]}>10%</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>1 Meters tank filled</Text>
                <Text style={styles.cardDetail}>1.80 Lakh liters</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <Icon name="long-arrow-right" size={24} color="#1E90FF" />
            </View>
          </View>

          {/* Card 5 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Tukum Sumpwell Chandrapur</Text>
                <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="#1E90FF" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={[styles.water, { height: '0%', backgroundColor: '#ffcc00' }]}></View>
                <Text style={[styles.percentage, { color: '#ffcc00' }]}><Icon name="exclamation-triangle" size={24} /></Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>0 Meters tank filled</Text>
                <Text style={styles.cardDetail}>0 Lakh liters</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 2024-06-27 17:29 PM</Text>
              <Icon name="arrow-right" size={24} color="#1E90FF" />
            </View>
          </View>

          {/* Card 6 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Tukum MBR Chandrapur</Text>
                <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="#1E90FF" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={[styles.water, { height: '56%', backgroundColor: '#28a745' }]}></View>
                <Text style={[styles.percentage, { color: '#28a745' }]}>56%</Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>3.3 m</Text>
                <Text style={styles.cardDetail}>11.20 Lac Liter</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Valve On - Valve Off - 2</Text>
              <Text style={styles.cardUpdate}>Total Valve - 2</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 10:52 AM</Text>
              <Icon name="arrow-right" size={24} color="#1E90FF" />
            </View>
          </View>

          {/* Card 7 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Intake Kalyan Corporation</Text>
                <Text style={styles.cardSubtitle}>Capacity 2000000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="#1E90FF" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={[styles.water, { height: '0%', backgroundColor: '#ffcc00' }]}></View>
                <Text style={[styles.percentage, { color: '#ffcc00' }]}><Icon name="exclamation-triangle" size={24} /></Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 2024-08-26 12:03 PM</Text>
              <Icon name="arrow-right" size={24} color="#1E90FF" />
            </View>
          </View>

          {/* Card 8 */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>Samta Nagar Thane Tank1</Text>
                <Text style={styles.cardSubtitle}>Capacity 2750000 L</Text>
              </View>
              <Icon name="map-marker" size={24} color="blue" />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.beaker}>
                <View style={[styles.water, { height: '0%', backgroundColor: '#ffcc00' }]}></View>
                <Text style={[styles.percentage, { color: '#ffcc00' }]}>
                  <Icon name="exclamation-triangle" size={40} 
                    style={styles.icon}
                /></Text>
              </View>
              <View style={styles.cardText}>
                <Text style={styles.cardDetail}>0 Meters tank filled</Text>
                <Text style={styles.cardDetail}>0 Lakh liters</Text>
              </View>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.cardUpdate}>Update At 2024-09-20 13:31 PM</Text>
              <Icon name="long-arrow-right" size={24} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#1E90FF',
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
    marginBottom: 12,
    alignSelf:'center'
  },
  cardContainer: {
    flexDirection: 'column',
    spaceBetween: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
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
    width: 70,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 9,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  water: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '76%',
    backgroundColor: '#e3342f',
  },
  percentage: {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:40
  },
  cardText: {
    marginLeft: 40,
  },
  cardDetail: {
    color: '#666',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardUpdate: {
    color: '#666',
  },
  icon:{
    alignSelf:"center",
    marginTop:100,
    marginLeft:-50
  }
});

export default Cards;