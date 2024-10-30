import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DonutDetail = ({ route, navigation }) => {
  const { bicycle } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(Number(bicycle.price));

  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
      back
      </TouchableOpacity>

      <Image source={{ uri: `${bicycle.image}.jpg` }} style={styles.image} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyBetween: 'center',
          gap: 100,
          marginBottom:20
        }}>
        <View>
          <Text style={styles.name}>{bicycle.name}</Text>
          <Text style={styles.description}>{bicycle.description}</Text>
        </View>
        <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 180,
        }}>
        
      
      </View>

      <View >
        <Text style={{
        fontWeight:'bold',
        fontSize:20
      }}>Description</Text>
        <Text style={{
          fontSize:17,
          textAlign:'justify',
          color:'gray'
        }}>
          It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {navigation.goBack('DonutList')}}>
        <Text style={styles.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
    color: 'gray',
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  delivery: {
    fontSize: 16,
    color: 'gray',
    textAlign:'left'
  },
  addButton: {
    backgroundColor: '#E94141',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DonutDetail;
