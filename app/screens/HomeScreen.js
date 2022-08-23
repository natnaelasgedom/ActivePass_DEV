import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../config/colors';

function HomeScreen(props) {
    return (
        <View style={styles.background}>
            <Text>Hello, ActivePass!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background3,
        flex: 1,
        width: "100%",
        height: "50%",
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default HomeScreen;