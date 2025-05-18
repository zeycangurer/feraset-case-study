import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackgroundLayer from '@/components/BackgroundLayer'
import OutputPrompt from '@/components/OutputPrompt'
import CancelImage from '../assets/images/cancel.png'
import MockImage from '../assets/images/mockImage.jpg'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { getGenerationResult } from '@/utils/firestoreHelpers'

const OutputScreen = () => {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const result = await getGenerationResult(id);
        // console.log("Fetched result:", result);
        setData(result);
      } catch (error) {
        console.error("Failed to load result:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [id]);

  const goBack = () => {
    router.back()
  }
  return (
    <BackgroundLayer>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Your Design</Text>
        <TouchableOpacity onPress={goBack}>
          <Image source={CancelImage} style={styles.cancelImage} />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 24 }}>
        <View style={styles.imageContainer}>
          <Image source={MockImage} style={styles.imageStyle} />
        </View>
        <OutputPrompt data={data} />
      </View>
    </BackgroundLayer>

  )
}

export default OutputScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    width: 342,
    height: 60,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  title: {
    color: '#FAFAFA',
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 22
  },
  cancelImage: {
    width: 20,
    height: 20,
  },
  imageContainer: {},
  imageStyle: {
    width: 342,
    height: 342,
    borderRadius: 16,
    backgroundColor: "E1E1E1"
  }
})