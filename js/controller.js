window.addEventListener("load", init);

function init() {
    bindEvents();
}

function bindEvents() {
    var buttons = document.querySelectorAll('.operationButtons button');
    for (button of buttons) {
        button.addEventListener('click', compute)
    }
    document.querySelector('#clearAll').addEventListener('click', clearAll);
}

function compute(event) {
    var operation = event.srcElement.id;
    // console.log(operation)
    var firstNumber = parseInt(document.querySelector('#firstNumber').value);
    var secondNumber = parseInt(document.querySelector('#secondNumber').value);
    calcOperations.takeNumbers(firstNumber, secondNumber);
    calcOperations.result = calcOperations[operation]();
    //console.log(result);
    printResult();
}

function printResult() {

    if (calcOperations.result == 'Infinity') {
        document.querySelector('#result').innerText = 'Divide By Zero Exception';

    } else if (calcOperations.result)
        document.querySelector('#result').innerText = calcOperations.result;
}

function clearAll() {
    document.querySelector('#firstNumber').value = "";
    document.querySelector('#secondNumber').value = "";
    document.querySelector('#result').innerText = "";
}