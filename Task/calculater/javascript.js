// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {

    document.getElementById("result").value += value;
}

 
 
// This function evaluates the expression and returns result


function calculateSquareRoot() {
    const currentValue = parseFloat(document.getElementById('result').value);
    if (!isNaN(currentValue)) {
        document.getElementById('result').value = Math.sqrt(currentValue);
    } else {
        document.getElementById('result').value = 'Error';
    }
}

function calculate() {
    const p = document.getElementById('result').value;  
    var q = eval(p);
    document.getElementById("result").value = q;
}

function backspace() {
    const currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0 , -1);
}

function copyResult() {
    const resultField = document.getElementById('result');
    resultField.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

}


function convertIntToString() {
    const resultField = document.getElementById('result').value;
    const currentValue = parseFloat(resultField);
    if (!isNaN(currentValue)) {
        currentResult = currentValue.toString();
        const x = document.getElementById('result').value = `"`+ currentResult+`"`;
        document.getElementById('demo').innerHTML = `"`+resultField+`"`+ " is: " + typeof x;
    }
}
function convertIntToFlote() {
    const resultField = document.getElementById('result').value;
    const currentValue = parseFloat(resultField);
    if (!isNaN(currentValue)) {
        currentResult = parseFloat(currentValue).toFixed(1);
        const x = document.getElementById('result').value = currentResult;
        document.getElementById('demo').innerHTML = currentResult+ " is: " + typeof x;
    }
}
function convertFloteToInt() {
    const resultField = document.getElementById('result').value;
    const currentValue = parseInt(resultField);
    if (!isNaN(currentValue)) {
        const x = document.getElementById('result').value = currentValue;
        document.getElementById('demo').innerHTML = currentValue+ " is: " + typeof x;
    }
}
function convertIntToDouble() {
    const resultField = document.getElementById('result').value;
    const currentValue = parseInt(resultField);
    if (!isNaN(currentValue)) {
        currentResult = parseFloat(currentValue).toFixed(2);
        const x =  document.getElementById('result').value = currentResult;
        document.getElementById('demo').innerHTML = currentResult+ " is: " + typeof x;
    }
}