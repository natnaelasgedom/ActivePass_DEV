import React, { useEffect, useState } from "react";
import {
  Animated,
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";
import SliderBar from "./SliderBar";
import SortButton from "./SortButton";

function ExpandableFilter({
  expanded = false,
  sortFunction,
  markedSortType,
  distanceList,
  filterFunction,
}) {
  const [height] = useState(new Animated.Value(0));
  const [range, setRange] = useState(null);

  useEffect(() => {
    Animated.timing(height, {
      toValue: !expanded ? Dimensions.get("screen").height * 0.63 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [expanded, height]);

  return (
    <Animated.View style={[{ height }, styles.container]}>
      <View style={styles.labelArea}>
        <Text style={styles.label}>Sort by</Text>
      </View>
      <View style={styles.optionsArea}>
        <SortButton
          type="Name"
          sortFunction={sortFunction}
          markedSortType={markedSortType}
        />
        <SortButton
          type="Price"
          sortFunction={sortFunction}
          markedSortType={markedSortType}
        />
      </View>
      <View style={styles.labelArea}>
        <Text style={styles.label}>Filter by</Text>
      </View>
      <View style={styles.optionsArea}>
        {!expanded && (
          <SliderBar
            type="Distance"
            distanceList={distanceList}
            setRange={setRange}
            range={range}
            filterFunction={filterFunction}
          />
        )}
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  labelArea: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsArea: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    backgroundColor: colors.background3,
    //flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: colors.basic1,
    fontSize: 14,
    fontWeight: "bold",
  },
  option: {
    backgroundColor: colors.basic2,
    color: colors.basic3,
    fontSize: 20,
    fontWeight: "500",
    //alignSelf: "stretch",

    textAlign: "left",
    paddingLeft: 5,
  },
  pressable: {
    width: "100%",
  },
});
export default ExpandableFilter;
