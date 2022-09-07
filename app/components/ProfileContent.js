import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import ExpandableView from './ExpandableView';
import ProfileContentCard from './ProfileContentCard';

function ProfileContent(props) {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>    
                <ProfileContentCard title='Personal Info' />
                <ProfileContentCard title='Favorite Activities' />
                <ProfileContentCard title='Favorite Activespots' />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
    },
    
    scrollContainer: {
        width: '100%'
    }
})
export default ProfileContent;