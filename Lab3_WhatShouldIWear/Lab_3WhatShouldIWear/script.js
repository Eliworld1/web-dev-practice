
const temperatureInput = document.querySelector("#temperature");
const recommendButton = document.querySelector("#recommendButton");
const output = document.querySelector("#output");

recommendButton.addEventListener("click", function () {
    const inputValue = temperatureInput.value.trim();
    const temperature = Number(inputValue);

    if (inputValue === "" || !Number.isFinite(temperature)) {
        output.textContent = "Please enter a valid temperature.";
    } else if (temperature < 50) {
        output.textContent = "Wear a coat or heavy jacket.";
    } else if (temperature <= 69) {
        output.textContent = "Wear a light jacket or sweater.";
    } else if (temperature <= 84) {
        output.textContent = "Wear a T-shirt or light clothing.";
    } else {
        output.textContent = "Wear lightweight clothing and stay hydrated!";
    }
});
