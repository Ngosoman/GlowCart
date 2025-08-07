import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyson.com/products');
      // Filter for cosmetic products
      const cosmeticProducts = response.data.filter(product => 
        product.category === 'cosmetics' || 
        product.title.toLowerCase().includes('mascara') ||
        product.title.toLowerCase().includes('lipstick') ||
        product.title.toLowerCase().includes('eyeliner')
      );
      setProducts(cosmeticProducts);
      setFilteredProducts(cosmeticProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
  },
  productList: {
    padding: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  productTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6b6b',
  },
});

export default Home;