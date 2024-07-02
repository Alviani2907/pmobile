import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const friends = [
  { id: '1', name: 'Alviani', description: 'Alviani is a software engineer.' },
  { id: '2', name: 'Alby', description: 'Alby is a product manager.' },
  { id: '3', name: 'Dimas', description: 'Dimas is a product manager.' },
  { id: '4', name: 'Yuki', description: 'Yuki is a product manager.' },
  { id: '5', name: 'Dika', description: 'Dika is a product manager.' },

  
];

const FriendsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text style={styles.friendName}>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('FriendDetail', { friend: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  friendName: {
    fontSize: 18,
  },
});

export default FriendsList;