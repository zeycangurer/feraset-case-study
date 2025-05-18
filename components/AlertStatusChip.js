import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import AlertIcon from '../assets/images/alert.png'

const AlertStatusChip = ({ image }) => {
  return (
    <View style={styles.alertContainer}>
      <Image source={image} style={styles.mockImage} />
      <View style={styles.overlay} />
      <View style={styles.iconContainer}>
        <Image source={AlertIcon} style={styles.alertIcon} />
      </View>
    </View>
  )
}

export default AlertStatusChip

const styles = StyleSheet.create({
  alertContainer: {
    position: 'relative',
    width: 70,
    height: 70,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    overflow: 'hidden',
  },
  mockImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(239, 68, 68, 0.7)',
    opacity: 0.7,
  },
  iconContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
})
