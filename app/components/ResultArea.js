import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import endpoints from "../config/endpoints";
import ExpandableFilter from "./ExpandableFilter";
import ResultItem from "./ResultItem";
import * as Location from "expo-location";

function ResultArea(props) {
  const [location, setLocation] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState(null);
  const {
    masterData,
    filteredData,
    navigateToActiveSpot,
    searchString,
    filterExpanded,
    sortFunction,
    markedSortType,
  } = props;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied...");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: Number(loc.coords.latitude),
        longitude: Number(loc.coords.longitude),
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <ExpandableFilter
        expanded={filterExpanded}
        sortFunction={sortFunction}
        markedSortType={markedSortType}
      />
      <View>
        <Text>Top choices</Text>
      </View>
      <FlatList
        data={
          filteredData.length > 0 || searchString != ""
            ? filteredData
            : masterData
        }
        renderItem={({ item }) => (
          <ResultItem
            item={item}
            navigateToActiveSpot={navigateToActiveSpot}
            userLocation={location}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ResultArea;
