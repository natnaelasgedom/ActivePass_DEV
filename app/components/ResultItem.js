import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import colors from '../config/colors';



function ResultItem(props) {
    const { value1, value2 } = props;

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={require('../assets/illustrations-pics/basketball.png')}
                    style={styles.img}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>CardHeader</Text>
                <Text style={styles.textDescription}>CardDescription: {value1}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>Price</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 8,
        backgroundColor: colors.basic2
    },
    imgContainer: {
        width: '30%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '95%',
        height: 90
    },
    priceContainer: {
        width: 75,
        height: 23,
        backgroundColor: colors.primary2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 6,
        right: 8
    },
    priceText: {},
    textContainer: {
        width: '70%',
        alignItems: 'flex-start',
        paddingLeft: 15
    },
    textDescription: {},
    textHeader: {}
})


export default ResultItem;