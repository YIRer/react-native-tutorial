import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';

import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { RoundedButton } from '../../components/RoundedButtons';
import { CountDown } from '../../components/CountDown';
import { Timing } from './Timing';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/size';

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStated] = useState(false);
  const [progess, setProgress] = useState(1);

  const vibrate = () => {
    if (Platform.OS === 'IOS') {
      const interval = setInterval(() => {
        Vibration.vibrate();
      }, 1000);

      setTimeout(() => {
        clearInterval(interval);
      }, 3000);
    } else {
      Vibration.vibrate(3000);
    }
  };

  const onProgress = (prg) => {
    setProgress(prg);
  };

  const changeTime = (time) => {
    setMinutes(time);
    onProgress(1);
    setIsStated(false);
  };

  const onEnd = () => {
    vibrate();
    setMinutes(0.1);
    onProgress(1);
    setIsStated(false);
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <CountDown
        minutes={minutes}
        isPaused={!isStarted}
        onProgress={onProgress}
        onEnd={onEnd}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>타이머 : </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View>
        <ProgressBar
          color="#5E84E2"
          style={styles.progressBar}
          progress={progess}
        />
      </View>
      <View style={styles.buttonsWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonsWrapper}>
        {isStarted ? (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStated(false);
            }}
          />
        ) : (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStated(true);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
          title="-"
          size={50}
          onPress={() => {
            clearSubject();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
    paddingTop: spacing.xxl,
  },

  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonsWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: 10,
    marginTop: spacing.sm,
  },

  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25,
  },
});
