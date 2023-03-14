import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AccessibilityInfo } from "react-native-web";
import BottomNavBar from "../components/BottomNavBar";
import ResultArea from "../components/ResultArea";
import TopSearchBar from "../components/TopSearchBar";
import colors from "../config/colors";
import data from "../config/data";
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
  const [filterExpanded, setFilterExpanded] = useState(true);
  const [markedSortType, setMarkedSortType] = useState("");

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

  const sortFunction = (sortType) => {
    const listCopy =
      filteredData.length > 0 ? [...filteredData] : [...masterData];

    switch (sortType.toLowerCase()) {
      case "name asc":
        listCopy.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name desc":
        listCopy.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price asc":
        //listCopy.sort((a, b) => a.username.localeCompare(b.username)); //Må endres til riktig path når testData er på plass
        break;
      case "price desc":
        //listCopy.sort((a, b) => b.username.localeCompare(a.username)); //Må endres til riktig path når testData er på plass
        break;
      case "reset":
        setMarkedSortType("");
        searchFunction(search);
        return;
      default:
        break;
    }
    setMarkedSortType(sortType.split(" ")[0]);
    setFilteredData(listCopy);
  };

  const navigateToActiveSpot = (content) => {
    props.navigation.navigate("ActiveSpot", content);
  };

  useEffect(() => {
    // getDataList(endpoints.activePassAPI.beeceptor + "activespots").then(
    //   (dataList) => {
    //     setMasterData(dataList);
    //     //setFilteredData(dataList.results);
    //   }
    // );
    setMasterData(data);
  }, []);

  const toggleExpandedFilter = () => setFilterExpanded(!filterExpanded);

  return (
    <View style={styles.background}>
      <TopSearchBar
        search={search}
        searchFunction={searchFunction}
        toggleExpandedFilter={toggleExpandedFilter}
      />
      <ResultArea
        masterData={masterData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        navigateToActiveSpot={navigateToActiveSpot}
        searchString={search}
        filterExpanded={filterExpanded}
        sortFunction={sortFunction}
        markedSortType={markedSortType}
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
