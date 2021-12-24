import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text>Search</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>Content</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    backgroundColor: 'green',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  },
});
