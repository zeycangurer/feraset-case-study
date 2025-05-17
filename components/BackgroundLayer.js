import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function BackgroundLayer({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.darkOverlay} />

      <Image
        source={require('../assets/images/Vector3.jpg')}
        style={styles.vectorImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#09090B',
    zIndex: 0,
  },
  vectorImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
    // borderRadius: 80,
    zIndex: 0,
  },
  content: {
    flex: 1,
    zIndex: 1,
    paddingLeft: 24,
    paddingTop: 80,
  },
});
