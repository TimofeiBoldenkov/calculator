import React from "react"
import { Text, TouchableOpacity } from "react-native"

interface CalculatorButtonProps {
  buttonTitle: string,
  handlePress: (buttonTitle: string) => void
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ buttonTitle, handlePress }) => {
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
      onPress={() => handlePress(buttonTitle)}
      testID={buttonTitle}
    >
      <Text style={{ fontSize: 25 }}>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

export default CalculatorButton
