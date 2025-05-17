import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

const InputForm = ({ value, onChange, maxLength = 500, placeholder = '' }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.wrapper, isFocused && styles.focused]}>
      <LinearGradient
        colors={['#943DFF', '#2938DC']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
      <BlurView intensity={15} tint="dark" style={StyleSheet.absoluteFill}>
        <View style={styles.overlay} />
      </BlurView>

      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#71717A"
        multiline
        maxLength={maxLength}
        textAlignVertical="top"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <Text style={styles.charCount}>{value.length}/{maxLength}</Text>
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  wrapper: {
    width: 342,
    height: 175,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'transparent',
    marginBottom: 20,
  },
  focused: {
    borderColor: '#FAFAFA',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#27272A',
    opacity: 0.7,
    zIndex: -1,
  },
  input: {
    flex: 1,
    color: '#FAFAFA',
    fontSize: 16,
    fontFamily: 'Manrope_400Regular',
  },
  charCount: {
    fontSize: 11,
    color: '#71717A',
    fontFamily: 'Manrope_400Regular',
  },
});
