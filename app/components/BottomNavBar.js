import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors.js';

function BottomNavBar(props) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/home-icon/home-brightOrange-icon.png')}
                style={styles.icons}
            />
            <Image
                source={require('../assets/user-icon/user-black-icon.png')}
                style={styles.icons}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.basic2,
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.background2
    },
    icons: {
        height: 30,
        width: 30
    }
})

export default BottomNavBar;