import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function BackgroundLayer({ children }) {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#C26CFF', '#1C55FF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={StyleSheet.absoluteFill}
    >
      <BlurView intensity={210} tint="default" style={StyleSheet.absoluteFill} />
    </LinearGradient>
    <View style={styles.content}>
        {children}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  content: {
    flex: 1,
    zIndex: 1,
    paddingLeft: 24,
    paddingTop: 80,
  },

});