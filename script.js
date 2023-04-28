let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let converter = document.getElementById('converter');

function calculateConvertedValue(num, converter, reverse) {
    switch(converter) {
        case "cm-to-foot":
            return reverse == true
            ? (num * 30.48).toFixed(2)
            : (num / 30.48).toFixed(1);

        case "cm-to-inch":
            return reverse == true
            ? (num * 2.54).toFixed(2)
            : (num / 2.54).toFixed(2);

        case "celsius-to-fahrenheit":
            return reverse == true
            ? ((num - 32) * (5/9)).toFixed(1)
            : ((9/5) * num + 32).toFixed(1);

        case "km-to-mile":
            return reverse == true
            ? (num * 1.609).toFixed(2)
            : (num / 1.609).toFixed(2);

        case "kg-to-pound":
            return reverse == true
            ? (num / 2.205).toFixed(2)
            : (num * 2.205).toFixed(2);
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
        case "cm-to-foot":
            label1.innerHTML = "Centimeter";
            label2.innerHTML = "Foot";
            break;

        case "cm-to-inch":
            label1.innerHTML = "Centimeter";
            label2.innerHTML = "Inch";
            break;

        case "celsius-to-fahrenheit":
            label1.innerHTML = "&#176;Celsius";
            label2.innerHTML = "&#176;Fahrenheit";
            break;

        case "km-to-mile":
            label1.innerHTML = "Kilometer";
            label2.innerHTML = "Mile";
            break;

        case "kg-to-pound":
            label1.innerHTML = "Kilogram";
            label2.innerHTML = "Pound";
            break;
    }

    input1.value = "";
    input2.value = "";
});