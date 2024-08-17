// const defaultResult = 0;
let currentResult = 0;
userInput.value = 0;
let logEntries = [];
function getInputandWriteOutput(operator, initialResult, EnteredNumber) {
  const Caldescription = `${initialResult} ${operator} ${EnteredNumber}`;
  outputResult(currentResult, Caldescription);
}

function writetoLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  operationResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: operationResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function add() {
  let EnteredNumber = parseInt(userInput.value);
  let initialResult = currentResult;
  currentResult = currentResult + parseInt(EnteredNumber);
  getInputandWriteOutput("+", initialResult, EnteredNumber);
  writetoLog("ADD", initialResult, EnteredNumber, currentResult);
}
function subtract() {
  let EnteredNumber = parseInt(userInput.value);
  let initialResult = currentResult;
  currentResult = currentResult - parseInt(EnteredNumber);
  getInputandWriteOutput("-", initialResult, EnteredNumber);
  writetoLog("SUBTRACT", initialResult, EnteredNumber, currentResult);
}
function multiply() {
  let EnteredNumber = parseInt(userInput.value);
  let initialResult = currentResult;
  currentResult = currentResult * parseInt(EnteredNumber);
  getInputandWriteOutput("*", initialResult, EnteredNumber);
  writetoLog("MULTIPLY", initialResult, EnteredNumber, currentResult);
}
function divide() {
  let EnteredNumber = parseInt(userInput.value);
  let initialResult = currentResult;
  currentResult = currentResult / parseInt(EnteredNumber);
  getInputandWriteOutput("/", initialResult, EnteredNumber);
  writetoLog("DIVIDE", initialResult, EnteredNumber, currentResult);
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
// currentResult = ((currentResult + 10) * 3) / 2 + 1;
// let calculationDescription = `( ${defaultResult} + 10)* 3 / 2 + 1`;
