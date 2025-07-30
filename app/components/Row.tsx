import { ReactNode } from "react";
import { View } from "react-native";

export default function Row({ children }: { children?: ReactNode | undefined }) {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        flex: 1
      }}
    >
      {children}
    </View>
  )
}
