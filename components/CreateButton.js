import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import CreateIcon from '../assets/images/elements.png'

const CreateButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={['#2938DC', '#943DFF']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.6, y: 0 }}
                style={styles.gradientButton}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.gradientButtonText}>Create</Text>
                    <Image source={CreateIcon} style={styles.buttonIcon} />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default CreateButton

const styles = StyleSheet.create({

    gradientButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width:342,
        height:56,
    },
    gradientButtonText: {
        color: '#FAFAFA',
        fontSize: 17,
        fontFamily: 'Manrope_800ExtraBold'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    buttonIcon: {
        width: 17.92,
        height: 17.92,
        resizeMode: 'contain'
    }
});
