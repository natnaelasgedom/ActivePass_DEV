import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import endpoints from '../config/endpoints';
import ResultItem from './ResultItem';

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
        
        getDataList(endpoints.pokemon.baseUrl)
        .then(dataList => {
            setData(dataList.results);
        })
    }, []);

    return (
        <View style={styles.container}>
            <View>
                <Text>Top choices</Text>
            </View>
            {data && (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <ResultItem value1={item.name} value2={item.url } />
                    )}
                    keyExtractor={item => item.name}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
export default ResultArea;