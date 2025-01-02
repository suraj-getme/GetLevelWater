// import React, { useEffect, useRef } from 'react';
// import { View, Animated, Easing, StyleSheet } from 'react-native';
// import Svg, { Defs, ClipPath, Circle, Rect, Path, G } from 'react-native-svg';

// export default function WaterCircle() {
//   const waterRiseAnim = useRef(new Animated.Value(100)).current;
//   const waveAnim1 = useRef(new Animated.Value(0)).current;
//   const waveAnim2 = useRef(new Animated.Value(0)).current;
//   const waveAnim3 = useRef(new Animated.Value(0)).current

//   useEffect(() => {
//     // Animate water rising
//     Animated.timing(waterRiseAnim, {
//       toValue: 40,
//       duration: 3000,
//       useNativeDriver: true,
//     }).start();

//     // Animate waves
//     Animated.loop(
//       Animated.timing(waveAnim1, {
//         toValue: 1,
//         duration: 4000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();

//     Animated.loop(
//       Animated.timing(waveAnim2, {
//         toValue: 1,
//         duration: 3000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       })
//     ).start();

//     Animated.loop(
//       Animated.timing(waveAnim3,{
//         toValue: 1,
//         duration: 2000,
//         easing: Easing.linear,
//         useNativeDriver:true,
//       })
//     ).start();
//   }, []);

//   const waterTranslateY = waterRiseAnim.interpolate({
//     inputRange: [0, 100],
//     outputRange: ['0%', '100%'],
//   });

//   const waveTransform1 = waveAnim1.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0', '-100'],
//   });

//   const waveTransform2 = waveAnim2.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0', '-100'],
//   });
//   const waveTransform3 = waveAnim3.interpolate({
//     inputRange :[0,1],
//     outputRange: ['0', '-100']

//   });

//   return (
//     <View style={styles.container}>
//       <Svg width="200" height="200" viewBox="0 0 100 100">
//         <Defs>
//           <ClipPath id="circleClip">
//             <Circle cx="50" cy="50" r="45" />
//           </ClipPath>
//         </Defs>

//         {/* Circle container */}
//         <Circle cx="50" cy="50" r="45" fill="none" stroke="black" strokeWidth="1" />

//         {/* Water */}
//         <G clipPath="url(#circleClip)">
//           <AnimatedRect
//             x="0"
//             y="0"
//             width="100"
//             height="100"
//             fill="#f3f4f6"
//             style={{ transform: [{ translateY: waterTranslateY }] }}
//           />
//           <AnimatedPath
//             d="M0 55 Q 25 45, 50 55 T 100 55 T 150 55 T 200 55 V 100 H 0 Z"
//             fill="#60a5fa"
//             style={{ transform: [{ translateX: waveTransform1 }] }}
//           />
//           <AnimatedPath
//             d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
//             fill="#93c5fd"
//             style={{ transform: [{ translateX: waveTransform2 }] }}
//           />
//           <AnimatedPath
//             d="M0 50 Q 25 60, 50 50 T 100 50 T 150 50 T 200 50 V 100 H 0 Z"
//             fill="#93c5fd"
//             style={{ transform: [{ translateX: waveTransform2 }] }}
//           />
//         </G>
//       </Svg>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f3f4f6',
//   },
// });

// const AnimatedRect = Animated.createAnimatedComponent(Rect);
// const AnimatedPath = Animated.createAnimatedComponent(Path);

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

const conversations = [
  {id: '1', name: 'Alice', lastMessage: 'Hey, how are you?', time: '10:30 AM'},
  {
    id: '2',
    name: 'Bob',
    lastMessage: 'Can we meet tomorrow?',
    time: 'Yesterday',
  },
  {
    id: '3',
    name: 'Charlie',
    lastMessage: 'Thanks for your help!',
    time: 'Tuesday',
  },
];

const messages = [
  {id: '1', sender: 'Alice', content: 'Hi there!', time: '10:30 AM'},
  {id: '2', sender: 'You', content: 'Hello! How are you?', time: '10:31 AM'},
  {
    id: '3',
    sender: 'Alice',
    content: "I'm good, thanks! How about you?",
    time: '10:32 AM',
  },
  {
    id: '4',
    sender: 'You',
    content: "I'm doing well too. Any plans for the weekend?",
    time: '10:33 AM',
  },
];

export default function App() {
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState('');

  const renderConversationItem = ({item}) => (
    <TouchableOpacity
      style={styles.conversationItem}
      onPress={() => setCurrentChat(item.name)}>
      <Image
        style={styles.avatar}
        source={{uri: 'https://via.placeholder.com/40'}}
      />
      <View style={styles.conversationInfo}>
        <View style={styles.conversationHeader}>
          <Text style={styles.conversationName}>{item.name}</Text>
          <Text style={styles.conversationTime}>{item.time}</Text>
        </View>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderMessageItem = ({item}) => (
    <View
      style={[
        styles.messageItem,
        item.sender === 'You' ? styles.sentMessage : styles.receivedMessage,
      ]}>
      <Text style={styles.messageContent}>{item.content}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {!currentChat ? (
        <View style={styles.conversationList}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>WhatsApp</Text>
          </View>
          <FlatList
            data={conversations}
            renderItem={renderConversationItem}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={styles.chatScreen}>
          <View style={styles.chatHeader}>
            <TouchableOpacity onPress={() => setCurrentChat(null)}>
              <Text style={styles.backButton}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.chatHeaderTitle}>{currentChat}</Text>
          </View>
          <FlatList
            data={messages}
            renderItem={renderMessageItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.messageList}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Type a message"
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conversationList: {
    flex: 1,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  conversationInfo: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  conversationName: {
    fontWeight: 'bold',
  },
  conversationTime: {
    fontSize: 12,
    color: '#888',
  },
  lastMessage: {
    color: '#555',
    marginTop: 5,
  },
  chatScreen: {
    flex: 1,
  },
  chatHeader: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  chatHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageList: {
    paddingVertical: 10,
  },
  messageItem: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  messageContent: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#128C7E',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
