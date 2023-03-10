import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import endpoints from "../config/endpoints";
import ExpandableFilter from "./ExpandableFilter";
import ResultItem from "./ResultItem";
import * as Location from "expo-location";

function ResultArea(props) {
  const [location, setLocation] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState(null);
  const [distanceList, setDistanceList] = useState([]);
  const {
    masterData,
    filteredData,
    setFilteredData,
    navigateToActiveSpot,
    searchString,
    filterExpanded,
    sortFunction,
    markedSortType,
  } = props;

  const addDistanceToList = (inputId, inputDistance) => {
    let newDistance = {
      id: inputId,
      distance: inputDistance,
    };
    if (!distanceList.some((obj) => obj.id === inputId)) {
      setDistanceList((distanceList) => [...distanceList, newDistance]);
    }
  };

  const filterFunction = (filterType, value) => {
    const dataCopy = [...masterData];
    const distanceCopy = [...distanceList];

    switch (filterType.toLowerCase()) {
      case "distance":
        var filteredDistances = distanceCopy.filter((a) => {
          return Number(a.distance) <= Number(value);
        });
        var filteredResults = dataCopy.filter((b) =>
          filteredDistances.some((a) => a.id === b.id)
        );
        break;
      default:
        break;
    }
    setFilteredData(filteredResults);
  };

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
        distanceList={distanceList}
        filterFunction={filterFunction}
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
            addDistanceToList={addDistanceToList}
          />
        )}
        keyExtractor={(item) => item.id}
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
