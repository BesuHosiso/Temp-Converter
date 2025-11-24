// 1. Get the HTML elements (BUT DO NOT ADD .value HERE)
const convertBtn = document.getElementById("convert-btn");
const inputBoxElement = document.getElementById("input-temp"); // Just the box, not the value inside
const resultElement = document.getElementById("result-text");
const selectOptionElement = document.getElementById("select-temp");

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    operation();
});

function operation() {
    // 2. NOW we ask "What is inside the box right now?"
    // We use Number() to turn the string "28" into the number 28
    const K = Number(inputBoxElement.value); 
    const selectOption = selectOptionElement.value;
    
    // Check if the user actually entered a number
    if (isNaN(K)) {
        resultElement.innerText = "Please enter a valid number";
        return; // Stop the function here
    }

    let result; // We will store the math answer here

    if (selectOption === "C") {
        // Kelvin to Celsius
        result = K - 273.15;
        // FIX 3: Display the dynamic result
        resultElement.innerText = K + "K is equal to " + result.toFixed(2) + "C°";
        
    } else {
        // Kelvin to Fahrenheit
        result = (K - 273.15) * 1.8 + 32;
        // FIX 3: Display the dynamic result
        resultElement.innerText = K + "K is equal to " + result.toFixed(2) + "F°";
    }
}