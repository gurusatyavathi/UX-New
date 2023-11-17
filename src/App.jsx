import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  useWindowDimensions,
} from 'react-native';

export default function App() {
  const {height} = useWindowDimensions();
  const [number, setAnswer] = useState("");

  function handlePress() {
    const answers = ["Yes","No","Maybe"];
    const randomIndex = Math.floor(Math.random() * answers.length);
    setAnswer(answers[randomIndex]);
  }

  return (
    <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>
      <Text>The Magic 8 Ball</Text>
      <TextInput
        style={styles.input}
        placeholder="Ask me any number"
        keyboardType="text"
      />
     
      <View style={styles.br} />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.btn,
        ]}
        onPress={handlePress}>
        <Text style={styles.btnText}>Answer</Text>
      </Pressable>
      <Text>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  br: {
    height: 12,
  },
  
  btn: {
    backgroundColor: '#222',
    padding: 10,
  },

  btnText: {
    color: '#fff',
  },
});