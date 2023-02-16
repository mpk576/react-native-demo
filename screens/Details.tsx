import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Button, View, Text } from "react-native";
import { RootStackParamList } from "../App";

type DetailsNavigationProps = {
  navigation: NavigationProp<RootStackParamList, "Details">;
  route: RouteProp<RootStackParamList, "Details">;
};

export default function DetailsScreen({
  navigation,
  route,
}: DetailsNavigationProps) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 87,
            otherParam: "anything you want here",
          })
        }
      />
    </View>
  );
}
