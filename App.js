import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Pressable
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const initialChats = [
  {
    name: 'Aron',
    message: 'Lorem ipsum dolor sit',
    time: '5:27 am',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww'
  },
  {
    name: 'Abelson',
    message: 'Curabitur finibus dictum nisl, ac sagitt...',
    time: 'Yesterday',
    avatar: 'https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww'
  },
  {
    name: 'Cathor',
    message: '📷 Photo',
    time: '',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Steven',
    message: '📄 Document.pdf (1 page)',
    time: '23/05/2022',
    avatar: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Franklin',
    message: 'Morbi viverra urna sit amet nunc',
    time: '22/05/2022',
    avatar: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Henry Ward',
    message: 'Morbi rhoncus nunc sit amet felis blandit co...',
    time: '20/05/2022',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Jacob Jones',
    message: '👍👍',
    time: '19/05/2022',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Lilly',
    message: '💜',
    time: '18/05/2022',
    avatar: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
  }
];

export default function WhatsApp() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [chats, setChats] = useState(initialChats);

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleLongPress = (index) => {
    Alert.alert(
      'Delete Chat',
      'Are you sure you want to delete this chat?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updated = [...chats];
            updated.splice(index, 1);
            setChats(updated);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingTop: 10 }}>
        <Text style={{ color: 'white', fontSize: 12 }}>9:41</Text>
        <View style={{ flexDirection: 'row', gap: 6 }}>
          <FontAwesome name="signal" size={15} color="white" />
          <FontAwesome name="wifi" size={15} color="white" />
          <FontAwesome name="battery-4" size={15} color="white" />
        </View>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.headerText}>WhatsApp</Text>
        <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
          <EvilIcons name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {searchVisible && (
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#ccc"
          onChangeText={setSearchText}
          value={searchText}
        />
      )}

      <View style={styles.tabs}>
        <Text style={styles.tabText}>CHATS</Text>
        <Text style={styles.tabText}>STATUS</Text>
        <Text style={styles.tabText}>CALLS</Text>
      </View>

      <ScrollView style={styles.chatList}>
        {filteredChats.map((chat, index) => (
          <Pressable key={index} onLongPress={() => handleLongPress(index)}>
            <View style={styles.chatItem}>
              <Image source={{ uri: chat.avatar }} style={styles.avatar} />
              <View style={styles.chatContent}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{chat.name}</Text>
                  <Text style={styles.chatTime}>{chat.time}</Text>
                </View>
                <Text numberOfLines={1} style={styles.chatMessage}>{chat.message}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="message" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008069',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndtRadius: 20,
  },
  headerRow: {
    padding: 16,
    paddingTop: 50,
    backgroundColor: '#008069',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  searchInput: {
    backgroundColor: '#008069',
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginHorizontal: 12,
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 6,
    marginTop: 4,
    borderColor: '#fff'
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#008069',
    paddingVertical: 8
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  chatList: {
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12
  },
  chatContent: {
    flex: 1
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  chatTime: {
    fontSize: 12,
    color: '#128C7E'
  },
  chatMessage: {
    color: '#555',
    fontSize: 14
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#008069',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2
  },
  fabText: {
    fontSize: 24,
    color: '#fff'
  }
});
