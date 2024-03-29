import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  Button,
} from "react-native";
import colors from "../config/colors";
import ExpandableFilter from "./ExpandableFilter";

function TopSearchBar(props) {
  const { searchFunction, toggleExpandedFilter } = props;
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchAndLogo}>
        <View>
          <Text style={styles.logoText}>Activespots</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Search here"
            onChangeText={(text) => setInput(text)}
            onSubmitEditing={() => searchFunction(input)}
            value={input}
            underlineColorAndroid="transparent"
            clearButtonMode="while-editing"
          />
          <Image
            source={require("../assets/search-icon/search-darkGrey-icon.png")}
            style={styles.searchIcon}
          />
        </View>
      </View>
      <View style={styles.filterBtnArea}>
        <View style={[styles.leftFilterBtnArea]}>
          <Pressable
            onPress={() => toggleExpandedFilter()}
            style={styles.leftFilterBtnArea}
          >
            <Text style={styles.filterText}>Filter</Text>
            <Image
              source={require("../assets/filter-icon/filter-white-icon.png")}
              style={styles.filterBtnIcons}
            />
          </Pressable>
        </View>
        <View style={[styles.rigthFilterBtnArea]}>
          <Text style={styles.filterText}>Map</Text>
          <Image
            source={require("../assets/mapMarker-icon/mapMarker-white-icon.png")}
            style={styles.filterBtnIcons}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.basic3,
    height: "30%",
    width: "100%",
    position: "relative",
    top: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  filterBtnArea: {
    backgroundColor: colors.basic3,
    width: "100%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  filterBtnIcons: {
    width: 16,
    height: 16,
  },
  filterText: {
    color: colors.basic2,
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 5,
  },
  leftFilterBtnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    fontSize: 16,
    color: colors.basic2,
    fontWeight: "500",
  },
  rigthFilterBtnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchAndLogo: {
    width: "95%",
    alignItems: "center",
  },
  searchIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    right: 20,
    top: 15,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 44,
    margin: 5,
    borderColor: colors.basic1,
    backgroundColor: colors.basic2,
    borderRadius: 50,
    color: colors.basic1,
    fontSize: 14,
    //textShadow
    /* textShadowColor: colors.background1  ,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2 */
  },
  textInputContainer: {
    width: "100%",
  },
});
export default TopSearchBar;
