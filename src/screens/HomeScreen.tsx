// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native';

const vehicles = [
  { id: '1', name: 'Camaro ZL1 2023', image: require('../assets/camaro_zl1_2023.jpg') },
  { id: '2', name: 'Camaro SS 2017', image: require('../assets/camaro_ss_2017.jpg') },
  { id: '3', name: 'Camaro SS 2010', image: require('../assets/camaro_ss_2010.jpg') },
  { id: '4', name: 'Mustang GT 2016', image: require('../assets/mustang_gt_2016.jpg') },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros</Text>
      <TextInput style={styles.searchInput} placeholder="Buscar" />
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  searchInput: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, paddingLeft: 8 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  image: { width: 100, height: 100, marginRight: 16 },
  itemText: { fontSize: 18 },
});

export default HomeScreen;
