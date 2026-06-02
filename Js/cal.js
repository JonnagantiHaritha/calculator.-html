let displayValue = document.getElementById("textField");
let total = "";

// Display numbers and operators
function display(num){
    displayValue.value += num;
    total += num;
}

// Clear all values
function clearvalues(){
    displayValue.value = "";
    total = "";
}

// Remove one character
function backspace(){
    displayValue.value = displayValue.value.slice(0, -1);
    total = total.slice(0, -1);
}

// Calculate result
function equal(){
    try{
        let result = eval(total);
        displayValue.value = result;
        total = result.toString();
    }
    catch{
        displayValue.value = "Error";
    }
}