import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavLayout from "./components/NavLayout";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import CreatePostScreen from "./screens/CreatePost";
import FetchDataScreen from "./screens/FetchData";

export type RootStackParamList = {
  Home: { post: string } | undefined;
  Details: { itemId: number; otherParam: string };
  CreatePost: undefined;
  FetchData: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          initialParams={{ itemId: 42 }}
        />
        <Stack.Screen name="FetchData" component={FetchDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
