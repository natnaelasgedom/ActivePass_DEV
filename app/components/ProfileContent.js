import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import ExpandableView from './ExpandableView';

function ProfileContent(props) {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setIsExpanded(!isExpanded);
                }}
                style={[styles.toggleBtn,{marginTop: 20}]}
            >
                <Text style={styles.toggleText}>Hello</Text>
            </TouchableOpacity>
            <ExpandableView expanded={isExpanded}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        borderWidth: 2,
        borderColor: 'blue'
    },
    toggleBtn: {
        width: '100%',
        backgroundColor: colors.basic1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    toggleText: {
        fontSize: 18,
        color: colors.basic2
    }
})
export default ProfileContent;