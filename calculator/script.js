
const display = document.getElementById("display");

function appendTodisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = (eval(display.value)).toFixed(4);
    } catch(error) {
        display.value = "Invalid";
    }
}


