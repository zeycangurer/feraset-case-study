import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import BackgroundLayer from '../components/BackgroundLayer';
import StyleCard from '../components/StyleCard';
import CreateButton from '../components/CreateButton';
import { createGenerationRequest, updateGenerationStatus } from '../utils/firestoreHelpers';
import SurpriseIcon from '../assets/surprise.png'
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import InputForm from '@/components/InputForm';

const logoStyles = [
  { id: 'no-style', label: 'No Style', icon: require('../assets/icons/no-style.png') },
  { id: 'monogram', label: 'Monogram', icon: require('../assets/icons/monogram.png') },
  { id: 'abstract', label: 'Abstract', icon: require('../assets/icons/abstract.png') },
  { id: 'mascot', label: 'Mascot', icon: require('../assets/icons/mascot.png') },
];

const samplePrompts = [
  'A futuristic owl logo for a tech startup',
  'A green leaf shaped abstract logo',
  'A golden monogram logo for a jewelry brand',
  'A blue lion mascot for an esports team'
]

export default function InputScreen() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('No Style');
  const [status, setStatus] = useState('idle');
  const [docId, setDocId] = useState(null);
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSurpriseMe = () => {
    const random = samplePrompts[Math.floor(Math.random() * samplePrompts.length)];
    setPrompt(random);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      Alert.alert('Prompt required', 'Please enter a description.');
      return;
    }

    setStatus('processing');

    const id = await createGenerationRequest(prompt, selectedStyle);
    setDocId(id);

    const delay = Math.floor(Math.random() * 30 + 30) * 1000;

    setTimeout(async () => {
      const mockImageUrl = 'https://via.placeholder.com/300x200.png?text=Mock+AI+Image';
      await updateGenerationStatus(id, 'done', mockImageUrl);
      setStatus('done');
    }, delay);
  };

  const goToOutput = () => {
    if (docId) {
      router.push({
        pathname: '/output',
        params: { id: docId },
      });
    }
  };

  return (
    <BackgroundLayer>
      <View style={styles.screen}>
        <View>
          <Text style={styles.headerTitle}>AI Logo</Text>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Enter Your Prompt</Text>
            <TouchableOpacity onPress={handleSurpriseMe} style={styles.surpriseButton}>
              <Image source={SurpriseIcon} styles={styles.surpriseIcon} />
              <Text style={styles.surprise}>Surprise me</Text>
            </TouchableOpacity>
          </View>
          <InputForm value={prompt}
            onChange={setPrompt}
            placeholder="A blue lion logo reading 'HEXA' in bold letters" />
          <StyleCard logoStyles={logoStyles} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} setSelectedStyle={setSelectedStyle} />
        </View>
        <View style={styles.fixedButton}>
          <CreateButton onPress={handleGenerate} />
        </View>
      </View>
    </BackgroundLayer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  fixedButton: {
    position: 'absolute',
    bottom: 38,
  },
  headerTitle: {
    fontSize: 17,
    color: '#FAFAFA',
    textAlign: 'center',
    fontFamily: 'Manrope_800ExtraBold',
    marginBottom: 38
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: 342,
    height: 25
  },
  title: {
    fontSize: 20,
    color: '#FAFAFA',
    fontFamily: 'Manrope_800ExtraBold'
  },
  promptWrapper: {
    width: 342,
    height: 175,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: 12,
    position: 'relative',
  },
  baseBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#27272A',
    zIndex: -1,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Manrope_400Regular',
    textAlignVertical: 'top',
  },
  charCountInside: {
    color: '#CFCFCF',
    fontSize: 12,
    fontFamily: 'Manrope_400Regular',
  },

  subheading: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
  },
  statusChip: {
    backgroundColor: '#fff3',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 32,
  },
  doneChip: {
    backgroundColor: '#C26CFF',
    padding: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 32,
  },
  statusText: {
    color: '#fff',
    fontWeight: '600',
  },
  surprise: {
    color: '#FAFAFA',
    fontFamily: 'Manrope_400Regular',
    fontSize: 13
  },
  surpriseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  surpriseIcon: {
    width: 13,
    height: 18,
    resizeMode: 'contain',
  },
});
