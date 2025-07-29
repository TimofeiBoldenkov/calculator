import { View } from "react-native";
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Display value={0}/>
      <KeyPad/>
    </View>
  );
}
