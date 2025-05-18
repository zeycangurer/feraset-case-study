import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CopyImage from '../assets/images/copy.png'
import * as Clipboard from 'expo-clipboard';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const OutputPrompt = ({ data }) => {
  if (!data) return null

  const handleCopy = async () => {
    await Clipboard.setStringAsync(data.prompt);
  }
  return (
    <View style={styles.promptContainer}>
      {/* <LinearGradient
        colors={["#943DFF", "#2938DC"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.gradientWrapper}
      > */}
      <BlurView intensity={15} tint="dark" style={styles.blurContainer}>
        <View style={styles.overlay} />
        <View style={styles.promptHeader}>
          <Text style={styles.promptTitle}>Prompt</Text>
          <TouchableOpacity style={styles.copyContainer} onPress={handleCopy}>
            <Image source={CopyImage} />
            <Text style={styles.copyStyle}>Copy</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.promptText}>{data.prompt}</Text>
        <View style={styles.styleContainer}>
          <Text style={styles.styleText}>{data.selectedStyle}</Text>
        </View>
      </BlurView>
      {/* </LinearGradient> */}
    </View>
  )
}

export default OutputPrompt

const styles = StyleSheet.create({
  promptContainer: {
    width: 342,
    height: 134,
    borderRadius: 12,
    gap: 12,
    backgroundColor: "#27272A",
    position: 'relative'
  },
  // gradientWrapper: {
  //   ...StyleSheet.absoluteFillObject,
  //   borderRadius: 12,
  //   overflow: 'hidden',
  // },
  blurContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    padding: 12,
    overflow: 'hidden',
    // justifyContent: 'space-between',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#27272A',
    opacity: 0.75,
    borderRadius: 12,
    zIndex: 0,
  },
  promptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 318,
    height: 20,
    marginBottom: 5
  },
  promptTitle: {
    fontSize: 15,
    color: "#FAFAFA",
    fontFamily: 'Manrope_700Bold'
  },
  copyContainer: {
    flexDirection: 'row',
    gap: 6
  },
  copyStyle: {
    color: "#A1A1AA",
    fontSize: 11,
    fontFamily: 'Manrope_400Regular'
  },
  promptText: {
    color: "#FAFAFA",
    fontSize: 16,
    fontFamily: 'Manrope_400Regular',
  },
  styleText: {
    color: "#FAFAFA",
    fontSize: 12,
    fontFamily: 'Manrope_400Regular',
    alignItems: 'center',
  },
  styleContainer: {
    width: 76,
    height: 24,
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 10,
    backgroundColor: "rgba(250, 250, 250, 0.1)",
    alignItems: 'center',
    position: 'absolute',
    left: 12,
    bottom: 12,
  }
})