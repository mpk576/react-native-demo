import { StyleSheet, Text, View } from "react-native";

export default function NavLayout() {
  return (
    <View style={styles.layout}>
      <Text>Nav layout</Text>
      <View style={styles.boxList}>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
        <View style={styles.box}>
          <Text>Box</Text>
        </View>
      </View>
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
  boxList: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    height: "100%",
  },
  box: {
    backgroundColor: "#415a77",
    width: "40%",
    height: 80,
    marginTop: 15,
  },
});
