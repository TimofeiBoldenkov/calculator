import { useState } from "react";
import { View } from "react-native";
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";
import calculateStrings from "./utils/calculateStrings";
import roundToPrecision from "./utils/roundToPrecision";

export default function Index() {
  const [displayText, setDisplayText] = useState("")
  const [currentOperation, setCurrentOperation] = useState<"+" | "-" | "×" | "÷" | null>(null)
  const [firstOperand, setFirstOperand] = useState<string>("")
  const [secondOperand, setSecondOperand] = useState<string>("")
  const [currentOperand, setCurrentOperand] = useState<"first" | "second">("first")
  const [invalid, setInvalid] = useState(false)

  function invalidate() {
    setDisplayText("ERROR")
    setInvalid(true)
  }

  function handlePress(buttonTitle: string) {
    if (invalid) {
      return
    }

    if (buttonTitle == "+" || buttonTitle == "-" ||
      buttonTitle == "×" || buttonTitle == "÷" || buttonTitle == "=") {
      if (currentOperand === "first") {
        if (buttonTitle === "=") {
          invalidate()
          return
        }
        setCurrentOperation(buttonTitle)
        setCurrentOperand("second")
        setDisplayText(displayText + buttonTitle)
      } else if (currentOperand === "second") {
        if (!secondOperand || currentOperation === null) {
          invalidate()
          return
        }

        const res = calculateStrings(firstOperand, secondOperand, currentOperation)
        if (res === null) {
          invalidate()
          return
        }

        setFirstOperand(String(res))
        setSecondOperand("")
        if (buttonTitle !== "=") {
          setCurrentOperation(buttonTitle)
          setDisplayText(roundToPrecision(res, 5) + buttonTitle)
          setCurrentOperand("second")
        } else {
          setDisplayText(String(roundToPrecision(res, 5)))
          setCurrentOperation(null)
          setCurrentOperand("first")
        }
      }
    }
    // If a digit
    else {
      setDisplayText(displayText + buttonTitle)
      if (currentOperand === "first") {
        setFirstOperand(firstOperand + buttonTitle)
      } else if (currentOperand === "second") {
        setSecondOperand(secondOperand + buttonTitle)
      }
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Display value={displayText} />
      <KeyPad handlePress={handlePress} />
    </View>
  );
}
