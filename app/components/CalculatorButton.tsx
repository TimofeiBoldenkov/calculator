import React from "react"
import { Text, TouchableOpacity } from "react-native"

interface CalculatorButtonProps {
  text: string
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "#e6e6e6",
        margin: 0,
        borderWidth: 1,
        borderColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CalculatorButton
