import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from "react";

export default function App() {
  const [text, onChangeText] = React.useState("Enter UserName Here");
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <TextInput 
        style = {styles.container}
        onChangeText = {onChangeText}
        value = {text}
      />
=======
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <Text>Enter your League of Legends Username (NA)</Text> 
>>>>>>> 9bf68ec26555f5dc09768796fe7629695b5e46ca
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
