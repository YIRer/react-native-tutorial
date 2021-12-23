import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButtons';

import { fontSize, spacing } from '../../utils/size';
import { colors } from '../../utils/colors';

export const Focus = ({ addFocus }) => {
  const [tempValue, setTempValue] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>집중하고 싶은 것은 무엇입니까?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onSubmitEditing={({ nativeEvent }) => {
              setTempValue(nativeEvent.text);
            }}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => {
              addFocus(tempValue);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },

  titleContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
  },

  title: {
    color: colors.white,
    fontSize: fontSize.lg,
    fontWeight: 'bold',
  },

  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    marginRight: spacing.md,
  },
});
