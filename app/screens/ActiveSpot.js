import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import ActiveSpotPictureCard from "../components/ActiveSpotPictureCard";
import ExpendableBar from "../components/ExpendableBar";
import TopBar from "../components/TopBar";
import colors from "../config/colors";

function ActiveSpot(props) {
  const content = props.route.params;

  const goBack = () => props.navigation.goBack();

  return (
    <ScrollView style={styles.container}>
      <TopBar goBack={goBack} />
      <ActiveSpotPictureCard content={content} />
      <View style={styles.activitiesContainer}>
        <Text style={styles.textHeader}>Activities</Text>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../assets/activity-illustrations/artisticGymnastics.png")}
          />
          <Image
            style={styles.img}
            source={require("../assets/activity-illustrations/pullups.png")}
          />
          <Image
            style={styles.img}
            source={require("../assets/activity-illustrations/running.png")}
          />
        </View>
      </View>
      <ExpendableBar title="Equipments" />
      <ExpendableBar title="Workouts" />
      <ExpendableBar title="Reviews" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  activitiesContainer: {
    height: 100,
    backgroundColor: colors.basic2,
    marginTop: 10,
    paddingLeft: 20,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.background3,
  },
  img: {
    width: 65,
    height: 65,
    marginRight: 20,
  },
  imgContainer: {
    flexDirection: "row",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default ActiveSpot;
