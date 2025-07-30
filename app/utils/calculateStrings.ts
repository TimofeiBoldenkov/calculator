export default function calculateStrings(firstOperand: string, secondOperand: string, operation: "+" | "-" | "×" | "÷"): number | null {
  const firstOperandNumber = parseFloat(firstOperand)
  const secondOperandNumber = parseFloat(secondOperand)
  if (isNaN(firstOperandNumber) || isNaN(secondOperandNumber)) {
    return null
  }

  switch (operation) {
    case "+":
      return firstOperandNumber + secondOperandNumber
    case "-":
      return firstOperandNumber - secondOperandNumber
    case "×":
      return firstOperandNumber * secondOperandNumber
    case "÷":
      if (secondOperandNumber === 0)
        return null
      else
        return firstOperandNumber / secondOperandNumber
  }
}