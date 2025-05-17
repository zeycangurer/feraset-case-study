import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View, ScrollView } from 'react-native';

const StyleCard = ({ logoStyles, selectedIndex, setSelectedIndex, setSelectedStyle }) => {
    return (
        <View>
            <Text style={styles.subheading}>Logo Styles</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cardList}
            >
                {logoStyles.map((style, index) => {
                    const isLast = index === logoStyles.length - 1;
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => {
                                setSelectedStyle(style.label);
                                setSelectedIndex(index);
                            }}
                            style={[
                                styles.styleItem,
                                !isLast && { marginRight: 12 }
                            ]}
                        >
                            <Image
                                source={style.icon}
                                style={[
                                    styles.styleImage,
                                    selectedIndex === index && {
                                        borderWidth: 2,
                                        borderColor: '#fafafa',
                                    },
                                ]}
                            />
                            <Text style={[
                                styles.styleLabel,
                                selectedIndex === index && {
                                    color: '#fafafa',
                                    fontFamily: 'Manrope_700Bold'
                                },
                            ]}>{style.label}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    );
}
export default StyleCard;
const styles = StyleSheet.create({
    subheading: {
        color: '#fafafa',
        fontSize: 20,
        marginBottom: 12,
        fontFamily: 'Manrope_800ExtraBold' 
    },
    cardList: {
        paddingRight: 0
    },
    styleItem: {
        alignItems: 'center',
        marginRight: 12,
    },
    styleImage: {
        width: 90,
        height: 90,
        borderRadius: 16,
    },
    styleLabel: {
        color: '#71717a',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 6,
        fontFamily: 'Manrope_400Regular'

    },
});
