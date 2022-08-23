import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

function HomeScreen(props) {
    return (
        <View style={styles.background}>

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.primary,
        flex: 1,
        width: "100%",
        height: "50%"
    }
})

export default HomeScreen;