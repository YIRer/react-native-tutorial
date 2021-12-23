import React from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { fontSize, spacing } from '../../utils/size';
import { RoundedButton } from '../../components/RoundedButtons';

const FocusHistoryItem = ({ item, index }) => {
  const styles = itemStyles(item.status);
  return <Text style={styles.historyItem}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  console.log(focusHistory);
  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>집중했던 작업 리스트</Text>
            <FlatList
              style={styles.listWrapper}
              contentContainerStyle={styles.contentContainer}
              data={focusHistory}
              renderItem={FocusHistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => {
                  onClear();
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listWrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: fontSize.lg,
  },
  clearContainer: {
    alignItems: 'center',
    fontSize: fontSize.md,
  },
});

const itemStyles = (status) =>
  StyleSheet.create({
    historyItem: {
      color: status > 1 ? 'red' : 'green',
      fontSize: fontSize.md,
    },
  });
