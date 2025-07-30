import { TextInput } from "react-native"

export default function Display({ value }: { value: string }) {
  return (
    <TextInput
      style={{
        textAlign: "right",
        backgroundColor: "#e6e6e6",
        width: "90%",
        fontSize: 35,
        borderWidth: 1,
        borderColor: "grey"
      }}
      value={value === "" ? "0" : value}
      editable={false}
    />
  )
}
