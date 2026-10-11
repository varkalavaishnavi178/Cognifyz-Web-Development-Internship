const button = document.getElementById("colorButton");

button.addEventListener("click", function () {
    button.style.backgroundColor = "green";
});
const currentHour = new Date().getHours();

if (currentHour < 12) {
    alert("Good Morning!");
} else if (currentHour < 18) {
    alert("Good Afternoon!");
} else {
    alert("Good Evening!");
}
const addButton = document.getElementById("addButton");
const result = document.getElementById("result");

addButton.addEventListener("click", function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const sum = num1 + num2;

    result.textContent = "Result: " + sum;
});
