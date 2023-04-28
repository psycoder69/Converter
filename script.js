let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let converter = document.getElementById('converter');

function calculateConvertedValue(num, converter, reverse) {
    switch(converter) {
        case "cm-to-inch":
            return reverse == false
            ? (num / 2.54).toFixed(2)
            : (num * 2.54).toFixed(2);

        case "celsius-to-fahrenheit":
            return reverse == false
            ? ((9/5) * num + 32).toFixed(1)
            : ((num - 32) * (5/9)).toFixed(1);
    }
}

window.onload = function convertValue() {
    input1.addEventListener("input", () => {
        let val1 = Math.abs(input1.value);

        let val2 = calculateConvertedValue(val1, converter.value, false);

        if (input1.value == "") input2.value = ""; else input2.value = val2;
    });

    input2.addEventListener("input", () => {
        let val1 = Math.abs(input2.value);

        let val2 = calculateConvertedValue(val1, converter.value, true);

        if (input2.value == "") input1.value = ""; else input1.value = val2;
    });
};

converter.addEventListener("change", () => {
    let label1 = document.getElementById('label1');
    let label2 = document.getElementById('label2');

    switch(converter.value) {
        case "cm-to-inch":
            label1.innerHTML = "Centimeter";
            label2.innerHTML = "Inch";
            break;

        case "celsius-to-fahrenheit":
            label1.innerHTML = "&#176;Celsius";
            label2.innerHTML = "&#176;Fahrenheit";
            break;
    }

    input1.value = "";
    input2.value = "";
});