import React, { useEffect, useState } from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const contentFiller = (type) => {
    let results;
    switch (type?.toLowerCase()) {
        case 'personal info':
            results = (
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLabel}>Age:</Text><Text style={styles.text}>36</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.textLabel, styles.fontSizeAndWeight]}>Weight:</Text><Text style={[styles.text, styles.fontSizeAndWeight]}>75 kg</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.textLabel}>Address:</Text><Text style={styles.text}>Bogstadveien 1, 0355 Oslo</Text>
                    </View>
                </View>
            )
            break;
        case 'favorite activities':
            results = (
                <View style={styles.activityContainer}>
                    <Image
                        style={styles.activityIcon}
                        source={require('../assets/activity-illustrations/artisticGymnastics.png')}
                    />
                    <Image
                        style={styles.activityIcon}
                        source={require('../assets/activity-illustrations/pullups.png')}
                    />
                    <Image
                        style={styles.activityIcon}
                        source={require('../assets/activity-illustrations/running.png')}
                    />
                </View>
            );
            break;
        case 'equipments':
            results = (
                <View style={styles.equipmentsContainer}>
                    <Text style={styles.text}>High Pullup Bar</Text>
                    <Text style={styles.text}>Low Pullup Bar</Text>
                    <Text style={styles.text}>Paralettes</Text>
                    <Text style={styles.text}>Monkey Bar</Text>
                </View>
            )
            break;
        case 'workouts':
            results = (
                <View style={styles.equipmentsContainer}>
                    <Text style={styles.text}>High Pullup Bar</Text>
                    <Text style={styles.text}>Low Pullup Bar</Text>
                    <Text style={styles.text}>Paralettes</Text>
                    <Text style={styles.text}>Monkey Bar</Text>
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
    activityContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    activityIcon: {
        height: '42%',
        width: 75,
        marginHorizontal: 10,
    },
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
    equipmentsContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingBottom: 60,
        flex: 1,
        width: '100%',
    },
    text: {
        color: colors.basic1,
        marginLeft: 20,
        textAlign: 'left'
    },
    fontSizeAndWeight: {
        fontSize: 16,
        fontWeight: '400',
    },
    textLabel: {
        marginVertical: 10,
        width: 80,
        textAlign: 'right',
        color: colors.primary1
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

})
export default ExpandableView;