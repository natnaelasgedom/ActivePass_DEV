import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import endpoints from '../config/endpoints';

const getDataList = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}: `, error);
    }
    const data = await response.json();
    return data;
}


function ResultArea(props) {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        
        getDataList(endpoints.jsonPlaceholder.users)
        .then(dataList => {
            setData(dataList);
        })
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text>Top choices</Text>
            </View>
            {data && (<ScrollView>
                <Text style={{fontSize: 40, fontWeight: 'bold'}}>RESULTS</Text>
                {data.map(e => {
                return(
                    
                        <View>
                            <Text>Value 1: {e.name}</Text>
                            <Text>Value 2: {e.username}</Text>
                            <Text>Value 3: {e.username}</Text>
                            <Text>Value 4: {e.username}</Text>
                            {/* <Text>Value 5: {e.username}</Text>
                            <Text>Value 6: {e.username}</Text>
                            <Text>Value 7: {e.username}</Text>
                            <Text>Value 8: {e.username}</Text>
                            <Text>Value 9: {e.username}</Text>
                            <Text>Value 10: {e.username}</Text> */}
                        </View>
                        
                    
                )
            })}</ScrollView>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
export default ResultArea;