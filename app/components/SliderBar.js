import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function SliderBar(props) {
  const { type, minRange, maxRange } = props;
  const [range, setRange] = useState("50%");

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{type}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0} //Dette må justeres til minste avstand fra testdata
        maximumValue={100} //Samme her
        minimumTrackTintColor={colors.primary1}
        maximumTrackTintColor={colors.basic3}
        thumbTintColor={colors.primary1}
      />
      <Text style={styles.rangeText}>{range}</Text>
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
    color: colors.basic2,
    fontWeight: "bold",
  },
  rangeText: {
    fontSize: 20,
    color: colors.basic2,
    fontWeight: "400",
  },
  slider: {
    width: "80%",
    height: "10%",
    marginVertical: 20,
  },
});
export default SliderBar;
