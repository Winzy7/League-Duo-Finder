import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name = "Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  console.log({text});
  return (
    <View style={styles.container}>
      <TextInput 
        style = {styles.box}
        onChangeText = {onChangeText}
        value = {text}
        placeholder = "Enter Username Here"
        selectionColor = "#08B3F3"
        autoCapitalize= 'none'
        textAlign= "center"
      />
      <StatusBar style="auto" />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 50,
    width: 250,
    top: 60,
    position: "relative",
    borderWidth: 2,
    borderColor: "#08B3F3",
    color: "#000000",
    borderRadius: 10,
    fontSize: 17,
  },
});
