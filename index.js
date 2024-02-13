const displayElement = document.getElementById("display");

function appendOnDisplay(parametre) {
    if (displayElement.value === "Error" ||
        displayElement.value === "function Error() { [native code] }" ){
        displayElement.value = "";

    } 
    displayElement.value += parametre;

}

function clearDisplay() {
    displayElement.value = "";
}

function calculate() {
    if (displayElement.value) {
        try {
            let result = eval(displayElement.value);
            if (result === Infinity || isNaN(result)) {
                displayElement.value = "Error";
            } else {
                displayElement.value = result;
            }
            
        } catch (error) {
            displayElement.value = "Error";
        }
    }
}