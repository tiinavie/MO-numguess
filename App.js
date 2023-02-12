import React from "react";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App(props) {
  const [number, setNumber] = useState();
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');

  const setRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
    console.log({randomNumber});
    setGuess('');
    setResult('');
  };

  const checkRandomNumber = () => {
    if (guess === number) {
      setResult("Oikein!\n" + "Numero oli " + number + "!");
    } else if (guess < number) {
      setResult("Arvauksesi oli liian pieni!");
    } else if (guess > number) {
      setResult("Arvauksesi oli liian suuri!");
    }
    setGuess('');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Guess the number{"\n"}
          between 1 - 100
        </Text>
        <Button title="new game" onPress={setRandomNumber}></Button>
      </View>

      <View style={{ margin: 15 }}>
        <TextInput
          style={styles.input}
          placeholder="enter your guess here"
          value={guess}
          type="number"
          keyboardType="numeric"
          onChangeText={(e) => {
            setGuess(Number.parseInt(e));
          }}
        />
        <Button title="Make a guess" onPress={checkRandomNumber}></Button>
      </View>

      <View>
        <Text style={{ fontSize: 20, textAlign: "center" }}>{result}</Text>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },

  header: {
    fontSize: 22,
    color: "#3e85c1",
    textAlign: "center",
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 3,
    marginBottom: 5,
    textAlign: "center",
  },
});
