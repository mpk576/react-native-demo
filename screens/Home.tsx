import { Pressable, View, Text, StyleSheet, Dimensions } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { useEffect } from "react";
import calcPercentageAsPixels from "../util/calcPecentageAsPixels";

type HomeNavigationProps = {
  navigation: NavigationProp<RootStackParamList, "Home">;
  route: RouteProp<RootStackParamList, "Home">;
};

const windowWidth = Dimensions.get("window").width;
export default function HomeScreen({ navigation, route }: HomeNavigationProps) {
  useEffect(() => {
    if (route.params?.post) {
      alert("Post created!");
    }
  }, [route.params?.post]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.buttonList}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Details", {
              itemId: 86,
              otherParam: "anything you want here",
            })
          }
        >
          <Text>Details</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("CreatePost")}
        >
          <Text>Post</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("FetchData")}
        >
          <Text>Fetch Data</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("FetchData")}
        >
          <Text>Local storage</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("CreatePost")}
        >
          <Text>Carousels</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("CreatePost")}
        >
          <Text>Animations</Text>
        </Pressable>
      </View>
      {route.params?.post && (
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#0d1b2a",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    paddingTop: "10%",
  },
  buttonList: {
    flexDirection: "row",
    // justifyContent: "space-around",
    flexWrap: "wrap",
    height: "100%",
  },
  button: {
    display: "flex",
    backgroundColor: "#415a77",
    // width: calcPercentageAsPixels(50) - 10,
    height: calcPercentageAsPixels(50) - 10,
    margin: 5,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5%",
  },
});
