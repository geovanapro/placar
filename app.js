import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const plusCount1 = () => {
    setCount1(count1 + 1);
  };

  const minusCount1 = () => {
    setCount1(count1 - 1);
  };

  const plusCount2 = () => {
    setCount2(count2 + 1);
  };

  const minusCount2 = () => {
    setCount2(count2 - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador em React Native</Text>
      <View style={styles.placaresContainer}>
        <View style={styles.placarContainer}>
          <Text style={styles.placarTitle}>Time 1:</Text>
          <Text style={styles.count}>{count1}</Text>
          <View style={styles.buttonsContainer}>
            <Button title=" + " onPress={plusCount1} />
            <Button title=" - " onPress={minusCount1} />
          </View>
        </View>

        <View style={styles.placarContainer}>
          <Text style={styles.placarTitle}>Time 2:</Text>
          <Text style={styles.count}>{count2}</Text>
          <View style={styles.buttonsContainer}>
            <Button title=" + " onPress={plusCount2} />
            <Button title=" - " onPress={minusCount2} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placaresContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  placarContainer: {
    marginRight: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  placarTitle: {
    fontSize: 30,
    marginBottom: 20,
  },
  count: {
    fontSize: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Button: {
    fontSize: 20, // aumenta o tamanho do texto do botão
    paddingHorizontal: 20, // aumenta o espaçamento horizontal do botão
    paddingVertical: 10, // aumenta o espaçamento vertical do botão
  }
});
