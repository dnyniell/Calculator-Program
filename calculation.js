const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input; //+= is a string concatenation
                            //input akan ditambah utk calculation
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value); // eval is a built in calculator
    }
    catch(error){
        display.value = "ERROR";

    }
}