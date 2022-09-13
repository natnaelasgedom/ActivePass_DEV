import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AccessibilityInfo } from "react-native-web";
import BottomNavBar from "../components/BottomNavBar";
import ResultArea from "../components/ResultArea";
import TopSearchBar from "../components/TopSearchBar";
import colors from "../config/colors";
import endpoints from "../config/endpoints";

const getDataList = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: `, error);
  }
  const data = await response.json();
  return data;
};

function HomeScreen(props) {
  const [masterData, setMasterData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  const searchFunction = (searchString) => {
    if (searchString) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toLowerCase() : "".toLowerCase();
        return itemData.indexOf(searchString.toLowerCase()) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(masterData);
    }
    setSearch(searchString);
  };

  const navigateToActiveSpot = (content) => {
    props.navigation.navigate("ActiveSpot", content);
    //console.log('Hello from HomeScreen')
  };

  useEffect(() => {
    getDataList(endpoints.pokemon.baseUrl).then((dataList) => {
      setMasterData(dataList.results);
      //setFilteredData(dataList.results);
    });
  }, [masterData]);

  return (
    <View style={styles.background}>
      <TopSearchBar search={search} searchFunction={searchFunction} />
      <ResultArea
        masterData={masterData}
        filteredData={filteredData}
        navigateToActiveSpot={navigateToActiveSpot}
        searchString={search}
      />
      <BottomNavBar focus="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.background3,
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  filterBtnIcons: {
    width: 40,
    height: 40,
  },
});

export default HomeScreen;
