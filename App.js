import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home.js"
import Malaysia from "./components/Malaysia.js"
import USA from "./components/USA.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Malaysia"
          component={Malaysia}
        />
        <Stack.Screen
          name="USA"
          component={USA}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}