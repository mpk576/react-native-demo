import { TextInput, Text, Pressable, View } from "react-native";
import { useState } from "react";
import libStyles from "../styles/lib";

export default function FetchDataScreen() {
  const [requestUrl, setRequestUrl] = useState<string>(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [requestResponse, setRequestResponse] = useState<any>();

  async function sendRequest() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRequestResponse(data))
      .catch((error) => console.log(error));
  }

  return (
    <View style={libStyles.container}>
      <Text>Fetching Data</Text>
      <View>
        <TextInput value={requestUrl} onChangeText={setRequestUrl} />
        <Pressable onPress={() => sendRequest()}>
          <Text>Send</Text>
        </Pressable>
      </View>
      <View>
        <Text>{requestResponse}</Text>
      </View>
    </View>
  );
}
