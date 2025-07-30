import { View } from "react-native";
import CalculatorButton from "./CalculatorButton";
import Row from "./Row";

interface KeyPadProps {
  handlePress: (buttonTitle: string) => void
}

const KeyPad: React.FC<KeyPadProps> = ({ handlePress }) => {
  const buttons = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "×"],
    ["0", ".", "=", "÷"],
  ]

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "60%"
      }}
    >
      {buttons.map((row, rowIndex) => {
        return (
          <Row key={rowIndex}>
            {row.map((button, columnIndex) => 
              <CalculatorButton 
                buttonTitle={button} 
                key={`${rowIndex}-${columnIndex}`}
                handlePress={handlePress}
              />)}
          </Row>
        )
      })}
    </View>
  )
}

export default KeyPad
