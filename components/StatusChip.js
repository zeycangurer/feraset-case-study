import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LoadingSpinner from '../assets/images/loading.png'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'
import AlertStatusChip from './AlertStatusChip'

const StatusChip = ({ status = 'idle', onPress, show = false, resultImage }) => {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const isError = status === 'error'

    useEffect(() => {
        if (status === 'processing') {
            Animated.loop(
                Animated.timing(rotateAnim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            ).start();
        } else {
            rotateAnim.stopAnimation();
        }
    }, [status]);

    const spin = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    if (!show || status === 'idle') return null;

    const isDone = status === 'done';

    const Content = (
        <View style={styles.statusContainer}>
            <View style={styles.spinnerBox}>
                {isDone ? (
                    <Image source={resultImage} style={styles.mockImage} />
                ) : isError ? (
                    <AlertStatusChip image={resultImage} />
                ) : (
                    <Animated.Image
                        source={LoadingSpinner}
                        style={[styles.spinnerImage, { transform: [{ rotate: spin }] }]}
                    />
                )}

            </View>

            {isDone ? (
                <LinearGradient
                    colors={['#943DFF', '#2938DC']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.gradientWrapper}
                >
                    <View style={styles.blurContainer}>
                        <View style={styles.statusBox}>
                            <Text style={styles.statusText}>Your Design is Ready!</Text>
                            <Text style={[styles.statusSubText, { color: "#D4D4D8" }]}>Tap to see it.</Text>
                        </View>
                    </View>
                </LinearGradient>

            ) : isError ? (
                <View style={[styles.blurContainer, { backgroundColor: '#EF4444' }]}>
                    <View style={styles.statusBox}>
                        <Text style={styles.statusText}>Oops, something went wrong!</Text>
                        <Text style={[styles.statusSubText, { color: "#D4D4D8" }]}>Click to try again.</Text>
                    </View>
                </View>
            ) : (
                <BlurView intensity={10} tint="dark" style={styles.blurContainer}>
                    <View style={styles.overlay} />
                    <View style={styles.statusBox}>
                        <Text style={styles.statusText}>Creating Your Design</Text>
                        <Text style={styles.statusSubText}>Ready in 2 minutes</Text>
                    </View>
                </BlurView>
            )}
        </View>
    )
    return isDone ? (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            {Content}
        </TouchableOpacity>
    ) : (
        Content
    )
}

export default StatusChip

const styles = StyleSheet.create({
    statusContainer: {
        flexDirection: 'row',
        paddingBottom: 12
    },
    spinnerBox: {
        backgroundColor: "rgba(24, 24, 27, 1)",
        width: 70,
        height: 70,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spinnerImage: {
        width: 37.69,
        height: 37.69,
        resizeMode: 'contain',
    },
    mockImage: {
        width: 70,
        height: 70,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        resizeMode: 'cover'
    },
    statusBox: {
        zIndex: 1,
        gap: 2,
    },
    statusText: {
        fontSize: 16,
        fontFamily: 'Manrope_800ExtraBold',
        color: '#FAFAFA'
    },
    statusSubText: {
        fontSize: 13,
        fontFamily: 'Manrope_500Medium',
        color: '#71717A'
    },
    gradientWrapper: {
        height: 70,
        width: 272,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    blurContainer: {
        height: 70,
        width: 272,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
        padding: 12,
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#27272A',
        opacity: 0.75,
        zIndex: 0,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        width: 272,

    },
});