import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import ExpandableView from './ExpandableView';

function ExpendableBar(props) {
    const { title } = props;
    const [expanded, setExpanded] = useState(true);
    
    const expandArrow = expanded ?
        require('../assets/expandArrow-icon/expandArrow-darkGrey-icon.png') :
        require('../assets/collapseArrow-icon/collapseArrow-darkGrey-icon.png');
    
    const extraMargin = title.toLowerCase() == 'personal info' ?
        { marginTop: 20 } : {};
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setExpanded(!expanded);
                }}
                style={[styles.toggleBtn, extraMargin]}
                activeOpacity={0.5}
            >
                <Text style={styles.toggleText}>{title}</Text>
                <Image
                    style={styles.expandArrowIcon}
                    source={expandArrow}
                />
            </TouchableOpacity>
            <ExpandableView expanded={expanded} type={title} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        backgroundColor: colors.basic2,//'#086E4B',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    toggleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.basic3,//'#FCBE4A'
        marginLeft: 20
    },
})
export default ExpendableBar;