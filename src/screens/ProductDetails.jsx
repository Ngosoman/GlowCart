import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        
        <Text style={styles.sectionTitle}>Highlights</Text>
        <View style={styles.highlightItem}>
          <Text style={styles.highlightText}>• Dimensions: 5 x 5 x 10 cm</Text>
        </View>
        <View style={styles.highlightItem}>
          <Text style={styles.highlightText}>• 1 Year Warranty</Text>
        </View>
        <View style={styles.highlightItem}>
          <Text style={styles.highlightText}>• Free Shipping on orders above $50</Text>
        </View>
        
        <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>4.5 ★ (120 reviews)</Text>
        </View>
        
        <TouchableOpacity style={styles.addToBagButton}>
          <Text style={styles.addToBagText}>Add to Bag</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#f8f8f8',
  },
  detailsContainer: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6b6b',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  highlightItem: {
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 16,
    color: '#555',
  },
  ratingContainer: {
    marginBottom: 30,
  },
  ratingText: {
    fontSize: 16,
    color: '#ffb400',
  },
  addToBagButton: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addToBagText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ProductDetails;