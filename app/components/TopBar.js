import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function TopBar(props) {
  const { goBack } = props;
  return (
    <View style={styles.container}>
      <Pressable onPress={() => goBack()}>
        <Image
          source={require("../assets/goBack-icon/goBack-white-icon.png")}
          style={styles.icon}
        />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    position: "relative",
    top: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    backgroundColor: colors.basic3,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginBottom: 10,
  },
});
export default TopBar;
