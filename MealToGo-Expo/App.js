import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text>Content</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "green",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
