import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import TopSearchBar from '../components/TopSearchBar';
import colors from '../config/colors';

function HomeScreen(props) {
    return (
        <View style={styles.background}>
            <TopSearchBar />
            <BottomNavBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.background3,
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterBtnIcons: {
        width: 40,
        height: 40
    }
})

export default HomeScreen;