import { TextInput } from "react-native"

export default function Display({value}: {value: number}) {
  return (
    <TextInput
      style={{
        textAlign: "right",
        backgroundColor: "#e6e6e6",
        width: "90%",
        fontSize: 50,
        borderWidth: 1,
        borderColor: "grey"
      }}
      value={String(value)}
      editable={false}
    />
  )
}
