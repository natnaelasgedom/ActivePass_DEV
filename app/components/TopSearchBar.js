import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import colors from '../config/colors';

function TopSearchBar(props) {
    return (
        <View style={styles.container}>
            <View style={styles.searchAndLogo}>
                <View>
                    <Text>Activespots</Text>
                </View>
                <View style = {styles.textInputContainer}>
                    <TextInput
                        style={styles.textInputStyle}
                    />
                </View>
            </View>
            <View style={styles.filterBtnArea}>
                <View style={[styles.leftFilterBtnArea]}>
                    <Text style={styles.filterText}>Location</Text>
                    <Image
                        source={require("../assets/filter-icon/filter-black-icon.png")}
                        style={styles.filterBtnIcons}
                    />
                </View>
                <View style={[styles.rigthFilterBtnArea]}>
                    <Text style={styles.filterText}>Map</Text>
                    <Image
                        source={require("../assets/mapMarker-icon/mapMarker-black-icon.png")}
                        style={styles.filterBtnIcons}
                        />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary1,
        height: '25%',
        width: '100%',
        position: 'absolute',
        top: 0,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    filterBtnArea: {
        backgroundColor: colors.primary1,
        width: '100%',
        height: '25%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    filterBtnIcons: {
        width: 30,
        height: 30
    },
    filterText: {

    },
    leftFilterBtnArea: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: "yellow",
        marginLeft: 20
    },
    rigthFilterBtnArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //backgroundColor: "green",
        marginRight: 25
    },
    textInputStyle: {
        height: 39,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: colors.basic1,
        backgroundColor: colors.basic2,
        borderRadius: 50
        
    },
    searchAndLogo: {
        width: '90%',
        alignItems: 'center'
    },
    textInputContainer: {
        width: '100%'
    }

})
export default TopSearchBar;