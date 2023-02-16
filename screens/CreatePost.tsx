import { useState } from "react";
import { Button, TextInput } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type CreatePostNavigationProps = {
  navigation: NavigationProp<RootStackParamList, "CreatePost">;
};

export default function CreatePostScreen({
  navigation,
}: CreatePostNavigationProps) {
  const [postText, setPostText] = useState("");

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: "Home",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
