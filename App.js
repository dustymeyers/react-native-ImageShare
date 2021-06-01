import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import logo from './assets/logo.png'; 
// ^ needed if you want to source your images locally ^

export default function App() {
  return (
    <View style={styles.container}>
      {/* You can import your image source directly into the assets directory for your project or by using an image URL */}
      {/* <Image source={logo} style={{ width:305, height: 159}} /> */}

      <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.logo} />

      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}
      >
        <Text style={{ fontSize: 20, color: '#fff'}}>Pick a Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }
});
