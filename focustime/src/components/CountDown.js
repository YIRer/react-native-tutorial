import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { fontSize, spacing } from '../utils/size';
import { colors } from '../utils/colors';

const minToMils = (min) => min * 60 * 1000;
const formattedTime = (time) => `${time >= 10 ? '' : '0'}${time}`;

export const CountDown = ({
  minutes = 1,
  isPaused = false,
  onProgress,
  onEnd,
}) => {
  const [mils, setMils] = useState(minToMils(minutes));

  const minute = Math.floor(mils / 1000 / 60) % 60;
  const sec = Math.floor(mils / 1000) % 60;
  const countInterval = useRef(null);

  const countDown = () => {
    setMils((time) => {
      if (time === 0) {
        return time;
      } else {
        const timeLeft = time - 1000;

        return timeLeft;
      }
    });
  };

  useEffect(() => {
    setMils(minToMils(minutes));
  }, [minutes]);

  useEffect(() => {
    const progress = mils / minToMils(minutes);

    onProgress(progress);

    if (mils === 0) {
      if (countInterval.current) {
        clearInterval(countInterval.current);
      }

      onEnd();
    }
  }, [mils]);

  useEffect(() => {
    if (isPaused) {
      if (countInterval.current) {
        clearInterval(countInterval.current);
      }
      return;
    }

    countInterval.current = setInterval(countDown, 1000);
    return () => {
      if (countInterval.current) {
        clearInterval(countInterval.current);
      }
    };
  }, [isPaused]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formattedTime(minute)}
        {':'}
        {formattedTime(sec)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: fontSize.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132,226, 0.3)',
  },
});
