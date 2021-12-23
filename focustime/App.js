import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistroy';
import { Timer } from './src/features/timer/Timer';

import { colors } from './src/utils/colors';
import { spacing } from './src/utils/size';

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }]);
  };

  const onTimerEnd = () => {
    addFocusHistorySubjectWithState(focusSubject, STATUSES.COMPLETE);
    setFocusSubject(null);
  };

  const clearSubject = () => {
    addFocusHistorySubjectWithState(focusSubject, STATUSES.CANCELLED);
    setFocusSubject(null);
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  const saveFocusHistory = () => {
    try {
      AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');
      console.log(history);
      if (history) {
        const parsedHistory = JSON.parse(history);

        if (parsedHistory.length) {
          setFocusHistory(parsedHistory);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={onTimerEnd}
          clearSubject={clearSubject}
        />
      ) : (
        <View style={styles.focusContainer}>
          <Focus addFocus={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ? spacing.md : spacing.lg,
    backgroundColor: colors.darkBlue,
  },
  focusContainer: {
    flex: 1,
  },
});
