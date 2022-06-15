import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        /** Uncomment this to hide names of every screen */
          //screenOptions={{headerShown: false}}
        >
          <Stack.Screen
          name = "Home"
          component={HomeScreen}
          />
          <Stack.Screen
          name = "Preferences"
          component = {Blank}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Blank = ({ navigation }) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.font}> 
        Playstyle? 
      </Text>
      <View style = {styles.row}>
          <Pressable
            onPress= {() => navigation.navigate("Home")}
            style = {({ pressed }) => [
              {
                backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
              }
            ]}
            >
            {({ pressed }) => (
              <Text style = {styles.font}>
                {pressed ? 'Pressed!' : 'Press Me'}
              </Text>
              )}
          </Pressable>
          <Button 
            onPress={() => navigation.navigate("Home")}
            title = "Aggressive"
            color = "#08B3F3"
          />
      </View>
      <Text style = {styles.font}> 
        Voice? 
      </Text>
      <View style = {styles.row}>
          <Button
            onPress={() => navigation.navigate("Home")}
            title = "Yes"
            color= "#08B3F3"
          />
          <Button 
            onPress={() => navigation.navigate("Home")}
            title = "No"
            color = "#08B3F3"
          />
      </View>
    </View>
  )
}
const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  console.log({text});
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style = {styles.enterUsername}
          onChangeText = {onChangeText}
          value = {text}
          placeholder = "Enter Username Here"
          selectionColor = "#08B3F3"
          autoCapitalize= 'none'
          textAlign= "center"
        />
      </View>
      <View style = {styles.button1}>
        <Button
          onPress = {() => navigation.navigate('Preferences')}
          title = "Confirm"
          color = "#08B3F3"
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterUsername: {
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
  button1: {
    top: 80,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  font: {
    fontSize: 20,
    color: "#000000",
  },
  press: {
    fontSize: 20, 
    color: "#08B3F3"
  }
});
