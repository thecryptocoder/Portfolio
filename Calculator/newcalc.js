let displayArray = [];


function mainDisplay(numInput) {
  if (calcform.minireadout.value.includes("=")) {
    calcform.display.value = null;
    calcform.minireadout.value = null;
    calcform.display.value += numInput;
    console.log(calcform.display.value);
  } else {
    calcform.display.value += numInput;
    console.log(calcform.display.value);
  }
}

function onCe() {
  calcform.display.value = null;
}

function onC() {
  calcform.display.value = null;
  calcform.minireadout.value = null;
  displayArray = [];
  console.log(displayArray);
}

function backSpace() {
  calcform.display.value = calcform.display.value.slice(0, -1);
}

function onOperator(operator) {
  calcform.minireadout.value = `${calcform.display.value} ${operator}`;
  displayArray.push(calcform.display.value);
  displayArray.push(operator);
  console.log(displayArray);
  calcform.display.value = null;
}

function equalButton(displayValue) {
  displayArray.push(calcform.display.value);
  calcform.display.value = eval(`${displayArray[0]} ${displayArray[1]} ${displayArray[2]}`);
  calcform.minireadout.value = `${displayArray[0]} ${displayArray[1]} ${displayArray[2]} = ${calcform.display.value}`;
  console.log(displayArray);
  displayArray = [];
  console.log(displayArray);
}