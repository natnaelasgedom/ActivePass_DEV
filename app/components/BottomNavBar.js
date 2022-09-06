import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors.js';

function BottomNavBar(props) {
    const { focus } = props;

    const homeIcon = focus.toLowerCase() == 'home'
        ? require('../assets/home-icon/home-brightOrange-icon.png')
        : require('../assets/home-icon/home-black-icon.png');
    
    const profileIcon = focus.toLowerCase() == 'profile'
        ? require('../assets/user-icon/user-brightOrange-icon.png')
        : require('../assets/user-icon/user-black-icon.png');
    return (
        <View style={styles.container}>
            <Image
                source={homeIcon}
                style={styles.icons}
            />
            <Image
                source={profileIcon}
                style={styles.icons}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.basic2,
        width: '100%',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: colors.background2,
        position: 'relative',
        bottom: 0,
    },
    icons: {
        height: 25,
        width: 25
    }
})

export default BottomNavBar;