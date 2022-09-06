import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import ExpandableView from './ExpandableView';

function ProfileContent(props) {
    const [personalInfo_isExpanded, setPersonalInfo_IsExpanded] = useState(true);
    const [favActivities_isExpanded, setFavActivities_IsExpanded] = useState(true);
    const [favActivspots_isExpanded, setFavActivspots_IsExpanded] = useState(true);

    const expandArrow = [
        personalInfo_isExpanded ?
            require('../assets/expandArrow-icon/expandArrow-darkGrey-icon.png') :
            require('../assets/collapseArrow-icon/collapseArrow-darkGrey-icon.png'),
        favActivities_isExpanded ?
            require('../assets/expandArrow-icon/expandArrow-darkGrey-icon.png') :
            require('../assets/collapseArrow-icon/collapseArrow-darkGrey-icon.png'),
        favActivspots_isExpanded ?
            require('../assets/expandArrow-icon/expandArrow-darkGrey-icon.png') :
            require('../assets/collapseArrow-icon/collapseArrow-darkGrey-icon.png'),
        
    ];
    
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setPersonalInfo_IsExpanded(!personalInfo_isExpanded);
                }}
                style={[styles.toggleBtn,{marginTop: 20}]}
            >
                <Text style={styles.toggleText}>Personal Info</Text>
                <Image
                    style={styles.expandArrowIcon}
                    source={expandArrow[0]}
                />
            </TouchableOpacity>
            <ExpandableView expanded={personalInfo_isExpanded}/>
            <TouchableOpacity
                onPress={() => {
                    setFavActivities_IsExpanded(!favActivities_isExpanded);
                }}
                style={[styles.toggleBtn]}
            >
                <Text style={styles.toggleText}>Favorite Activities</Text>
                <Image
                    style={styles.expandArrowIcon}
                    source={expandArrow[1]}
                />
            </TouchableOpacity>
            <ExpandableView expanded={favActivities_isExpanded}/>
            <TouchableOpacity
                onPress={() => {
                    setFavActivspots_IsExpanded(!favActivspots_isExpanded);
                }}
                style={[styles.toggleBtn]}
            >
                <Text style={styles.toggleText}>Favorite Activespots</Text>
                <Image
                    style={styles.expandArrowIcon}
                    source={expandArrow[2]}
                />
            </TouchableOpacity>
                <ExpandableView expanded={favActivspots_isExpanded} />
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
    expandArrowIcon: {
        height: 33,
        width: 33,
        position: 'absolute',
        right: 10
    },
    toggleBtn: {
        width: '100%',
        height: 40,
        backgroundColor: colors.basic2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    toggleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.basic3,
        marginLeft: 20
    },
    scrollContainer: {
        width: '100%'
    }
})
export default ProfileContent;