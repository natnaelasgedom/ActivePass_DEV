import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ActiveSpot from './app/screens/ActiveSpot';
import HomeScreen from './app/screens/HomeScreen';
import ProfileScreen from './app/screens/ProfileScreen';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <ProfileScreen/> */}
      <ActiveSpot/>
    </View>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
