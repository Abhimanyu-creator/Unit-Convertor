let inputValue = 0;
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn")
const lengthOutputEl = document.getElementById("lengthOutput-el")
const volumeOutputEl = document.getElementById("volumeOutput-el")
const massOutputEl = document.getElementById("massOutput-el")

convertBtn.addEventListener("click", function () {
    inputValue = inputEl.value;
    console.log(inputValue);
    converter(lengthOutputEl, 3.28084, 0.3048, "meters", "feet");
    converter(volumeOutputEl, 0.264172, 3.78541, "leter", "gallon");
    converter(massOutputEl, 2.20462, 0.453592, "kilos", "pounds");
})

function converter(arg, num1, num2, metric1, metric2) {
    arg.textContent = `${inputValue} ${metric1} = ${(inputValue * num1).toFixed(3)} ${metric2} | ${inputValue} ${metric2} = ${(inputValue * num2).toFixed(3)} ${metric1}`
}