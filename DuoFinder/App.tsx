import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from "react";

export default function App() {
  const [text, onChangeText] = React.useState("Enter UserName Here");
  return (
    <View style={styles.container}>
      <TextInput 
        style = {styles.container}
        onChangeText = {onChangeText}
        value = {text}
      />
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
