import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoadingSpinner from '../assets/images/loading.png'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'

const StatusChip = () => {
    return (
        <View style={styles.statusContainer}>
            <View style={styles.spinnerBox}>
                <Image source={LoadingSpinner} style={styles.spinnerImage} />
            </View>
            <LinearGradient
                colors={['#943DFF', '#2938DC']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.gradientWrapper}
            >
                <BlurView intensity={10} tint="dark" style={styles.blurContainer}>
                    <View style={styles.overlay} />
                    <View style={styles.statusBox}>
                        <Text style={styles.statusText}>Creating Your Design</Text>
                        <Text style={styles.statusSubText}>Ready in 2 minutes</Text>
                    </View>
                </BlurView>
            </LinearGradient>
        </View>
    )
}

export default StatusChip

const styles = StyleSheet.create({
    statusContainer: {
        // flex:1,
        flexDirection: 'row',
        paddingBottom:12
    },
    spinnerBox: {
        backgroundColor: "#18181B",
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
    statusBox: {
        zIndex: 1,
        gap:2,
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