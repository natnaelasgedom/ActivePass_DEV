import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import endpoints from "../config/endpoints";
import ResultItem from "./ResultItem";

function ResultArea(props) {
  //const [data, setData] = useState(undefined);
  const { masterData, filteredData, navigateToActiveSpot, searchString } =
    props;
  return (
    <View style={styles.container}>
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
            value1={item.name}
            value2={item}
            navigateToActiveSpot={navigateToActiveSpot}
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
