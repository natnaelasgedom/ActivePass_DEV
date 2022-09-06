import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

function ProfileTopCard(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.editIcon}
                source={require('../assets/search-icon/search-black-icon.png')}
            />
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={require('../assets/illustrations-pics/profilePic.jpg')}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.contactCardHeader}>John Smith</Text>
                <View style={styles.contactCardInfo}>
                    <Image
                        style={styles.contactIcon}
                        source={require('../assets/home-icon/home-black-icon.png')}
                    />
                    <Text>+47 998 87 766</Text>
                </View>
                <View style={styles.contactCardInfo}>
                    <Image
                        style={styles.contactIcon}
                        source={require('../assets/user-icon/user-black-icon.png')}
                    />
                    <Text>john.smith@example.com</Text>
                </View>
                
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    contactCardHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    contactCardInfo: {
        flexDirection: 'row',
        marginVertical: 5
    },
    contactIcon: {
        width: 15,
        height: 15,
        marginRight: 10
    },
    container: {
        width: '100%',
        height: 250,
        backgroundColor: colors.basic2,
        position: 'relative',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    editIcon: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 50,
        right: 25
    },
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 50
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    textContainer: {
        flex: 3,
        marginTop: 50,
        paddingLeft: 20,
    }

})
export default ProfileTopCard;