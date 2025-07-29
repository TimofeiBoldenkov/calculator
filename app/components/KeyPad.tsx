import { View } from "react-native";
import CalculatorButton from "./CalculatorButton";
import Row from "./Row";

export default function KeyPad() {
  const buttons = [
    ["1", "2", "3",    "+"],
    ["4", "5", "6",    "-"],
    ["7", "8", "9",    "×"],
    ["0", ".", "x10a", "÷"],
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
              <CalculatorButton text={button} key={`${rowIndex}-${columnIndex}`}/>)}
          </Row>
        )
      })}
    </View>
  )
}
