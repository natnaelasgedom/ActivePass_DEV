import React, { useEffect, useState } from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function SliderBar(props) {
  const { type, distanceList, range, setRange, filterFunction } = props;
  const [minRange, setMinRange] = useState(0.0);
  const [maxRange, setMaxRange] = useState(0.0);

  var deltaRange = maxRange * 100 - minRange * 100;
  var startingValue = 100 * minRange + deltaRange * 0.8;
  useEffect(() => {
    if (distanceList.length > 0) {
      distanceList.sort((a, b) => a.distance - b.distance);
      var min = distanceList[0].distance;
      var max = distanceList[distanceList.length - 1].distance;
      setMinRange(min);
      setMaxRange(max);
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{type}</Text>
      <Slider
        style={styles.slider}
        minimumValue={minRange * 100}
        maximumValue={maxRange * 100}
        minimumTrackTintColor={colors.primary1}
        maximumTrackTintColor={colors.basic3}
        thumbTintColor={colors.primary1}
        value={range > 0 ? range * 100 : maxRange * 100}
        onValueChange={(value) => {
          setRange((value / 100).toFixed(1));
        }}
        onSlidingComplete={() => filterFunction("distance", range)}
      />
      <Text style={styles.rangeText}>{range ? range + " km" : ""}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    fontSize: 15,
    color: colors.basic3,
    fontWeight: "bold",
  },
  rangeText: {
    fontSize: 15,
    color: colors.basic3,
    fontWeight: "400",
  },
  slider: {
    width: "80%",
    height: "10%",
    marginVertical: 20,
  },
});
export default SliderBar;
