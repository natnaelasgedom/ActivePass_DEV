import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function ExpandableView({ expanded = false }) {
    const [height] = useState(new Animated.Value(0));
    
    useEffect(() => {
        Animated.timing(height, {
            toValue: !expanded ? 175 : 0,
            duration: 150,
            useNativeDriver: false
        }).start();
     }, [expanded, height]);

    return (
        <Animated.View style={[{ height }, styles.container]}>
            <Text style={styles.text}>Hello, mf</Text>
        </Animated.View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.basic2
    }
})
export default ExpandableView;