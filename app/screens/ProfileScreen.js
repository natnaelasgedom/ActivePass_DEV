import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import ProfileContent from '../components/ProfileContent';
import ProfileTopCard from '../components/ProfileTopCard';
import colors from '../config/colors';

function ProfileScreen(props) {
    return (
        <View style={styles.background}>
            <ProfileTopCard />
            <ProfileContent/>
            <BottomNavBar focus='profile' />
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
    }
})
export default ProfileScreen;