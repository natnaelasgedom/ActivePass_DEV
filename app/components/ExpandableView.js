import React, { useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const contentFiller = (type) => {
    let results;
    switch (type?.toLowerCase()) {
        case 'personal info':
            results = (
                <View>
                    <Text style={styles.text}>
                        Personal Info here...
                    </Text>
                </View>
            )
            break;
    
        default:
            results = (
                <View>
                    <Text style={styles.text}>
                        Nothing to show...
                    </Text>
                </View>
            )
            break;
    }
    return results;
};


function ExpandableView({ expanded = false , content, type}) {
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
            <Image
                style={styles.editIcon}
                source={require('../assets/edit-icon/edit-black-icon.png')}
            />
            {contentFiller(type)}
        </Animated.View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.basic2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editIcon: {
        width: 25,
        height: '14%',
        position: 'absolute',
        right: 10,
        top: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.basic1
    }
})
export default ExpandableView;