import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Button, Pressable } from "react-native";
import colors from "../config/colors";
import { getDistance } from "geolib";

function ResultItem(props) {
  const { item, navigateToActiveSpot, userLocation, addDistanceToList } = props;
  const [source, setSource] = useState(undefined);
  const [distance, setDistance] = useState(null);

  const pictures = [
    {
      src: require("../assets/illustrations-pics/basketball.png"),
    },
    {
      src: require("../assets/illustrations-pics/football.png"),
    },
  ];

  useEffect(() => {
    setSource(pictures[Math.floor(Math.random() * pictures.length)].src);
    const location = {
      latitude: Number(item.location?.latitude),
      longitude: Number(item.location?.longitude),
    };
    if (location.latitude && location.longitude && userLocation) {
      let distanceNumber = getDistance(
        userLocation,
        {
          latitude: Number(item.location.latitude),
          longitude: Number(item.location.longitude),
        },
        1
      );

      let fixedDistance = (distanceNumber / 1000).toFixed(1);

      setDistance(fixedDistance);
      addDistanceToList(item.id, fixedDistance);
      // console.log("added distance to list from resultItem " + item.id);
    }
  }, [userLocation]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.container}
        onPress={() => navigateToActiveSpot(item)}
      >
        <View style={styles.imgContainer}>
          <Image source={source} style={styles.img} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Text>
          {/* <Text style={styles.textRating}>9,5 Excellent (3568 visits)</Text> */}
          <Text style={styles.textRating}>
            {item.location?.address ? item.location.address : ""}
          </Text>
          <View style={styles.distanceContainer}>
            <Image
              style={styles.distanceIcon}
              source={require("../assets/mapMarker-icon/mapMarker-black-icon.png")}
            />
            <Text style={styles.distanceText}>{distance} km</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Price</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 2,
    backgroundColor: colors.basic2,
  },
  distanceContainer: {
    flexDirection: "row",
    width: "40%",
  },
  distanceIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  distanceText: {
    fontSize: 14,
  },
  imgContainer: {
    width: "30%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: "90%",
  },
  priceContainer: {
    width: 75,
    height: 23,
    backgroundColor: colors.primary2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 6,
    right: 8,
  },
  priceText: {},
  textContainer: {
    width: "70%",
    alignItems: "flex-start",
    paddingLeft: 15,
  },
  textRating: {
    fontSize: 14,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResultItem;
