import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import colors from '../config/colors';

function HomeScreen(props) {
    return (
        <View style={styles.background}>
            <BottomNavBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background3,
        flex: 1,
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default HomeScreen;