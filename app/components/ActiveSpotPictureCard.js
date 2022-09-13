import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function ActiveSpotPictureCard(props) {

    const data = [
        {
            id: 1,
            src: require('../assets/illustrations-pics/basketball.png')
        },
        {
            id: 2,
            src: require('../assets/illustrations-pics/football.png')
        },
        {
            id: 3,
            src: require('../assets/illustrations-pics/profilePic.jpg')
        },
        {
            id: 4,
            src: require('../assets/illustrations-pics/basketball.png')
        },
        {
            id: 5,
            src: require('../assets/illustrations-pics/football.png')
        },
        {
            id: 6,
            src: require('../assets/illustrations-pics/profilePic.jpg')
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.carousel}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Image
                            source={item.src}
                            resizeMode='cover'
                            style={styles.carouselImg}
                        />
                    )}
                    horizontal={true}
                    snapToAlignment={'start'}
                    decelerationRate={'fast'}
                    snapToInterval={Dimensions.get('screen').width}
                    pagingEnabled={true}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={[styles.textHeader, styles.text]}>Lambertseter aktivitetspark</Text>
                <Text style={[styles.textInfo, styles.text]}>8,9 Excellent (3245 visits)</Text>
                <Text style={[styles.textInfo, styles.text]}>500m from selected location</Text>
                <View style={styles.priceContainer}>
                    <Text>Price</Text>
                </View>
                
            </View>
        </View>
    );
}
const test = Dimensions.get('screen').width;
const test2 = test - 50;
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        justifyContent: 'flex-start',
        backgroundColor: colors.basic2,
        marginTop: 6,

    },
    carousel: {
        
    },
    carouselImg: {
        width: test,
        height: 200
    },
    infoContainer: {
        flex: 1
    },
    text: {
        marginLeft: 5
    },
    textHeader: {
        fontWeight: 'bold',
        fontSize: 20
    },
    textInfo: {
        fontWeight: '400',
        fontSize: 16
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
    }

})
export default ActiveSpotPictureCard;