import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function SortButton(props) {
  const { sortFunction, type, markedSortType } = props;
  const [index, setIndex] = useState(0);

  const nextIndex = () => {
    index == 2 ? setIndex(0) : setIndex(index + 1);
  };

  const markedStyle = {
    backgroundColor: colors.primary2,
    color: colors.basic3,
  };
  const sortTypes = [type + " asc", type + " desc", "reset"];

  useEffect(() => {
    if (markedSortType != type) {
      setIndex(0);
    }
  }, [markedSortType]);
  return (
    <Pressable
      onPress={() => {
        sortFunction(sortTypes[index]);
        nextIndex();
      }}
      style={styles.pressable}
    >
      <Text
        style={[
          styles.option,
          markedSortType == type && index > 0 ? markedStyle : {},
        ]}
      >
        {type}
        {markedSortType != type || index == 0
          ? ""
          : index == 1
          ? "  ⬆︎"
          : "  ⬇︎"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "40%",
  },
  option: {
    backgroundColor: colors.basic2,
    color: colors.basic3,
    fontSize: 20,
    fontWeight: "500",
    //alignSelf: "stretch",
    textAlign: "left",
    paddingLeft: 5,
    marginHorizontal: 20,
  },
});
export default SortButton;
