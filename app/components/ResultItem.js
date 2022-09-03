import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import colors from '../config/colors';


function ResultItem(props) {
    const { value1, value2 } = props;
    const [source, setSource] = useState(undefined);
    
    const pictures = [
        {
        src: require('../assets/illustrations-pics/basketball.png')
        },
        {
            src: require('../assets/illustrations-pics/football.png')
        }
    ]

    useEffect(() => {
        setSource(pictures[Math.floor(Math.random() * pictures.length)].src);
    }, [])

    return (
        <View
            style={styles.container}
            onStartShouldSetResponder={() => {
                console.log('We may have to change this to a button!')
            }}
        >
            <View style={styles.imgContainer}>
                <Image
                    source={source}
                    style={styles.img}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{value1.charAt(0).toUpperCase() + value1.slice(1)}</Text>
                <Text style={styles.textRating}>9,5 Excellent (3568 visits)</Text>
                <View style={styles.distanceContainer}>
                    <Image
                        style={styles.distanceIcon}
                        source={require('../assets/mapMarker-icon/mapMarker-black-icon.png')}
                    />
                    <Text style={styles.distanceText}>500 m</Text>
                </View>
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
        marginVertical: 2,
        backgroundColor: colors.basic2
    },
    distanceContainer: {
        flexDirection: 'row',
        width: '40%'
    },
    distanceIcon: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    distanceText: {
        fontSize: 14
    },
    imgContainer: {
        width: '30%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '90%',
        height: '90%'
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
    textRating: {
        fontSize: 14
    },
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})


export default ResultItem;