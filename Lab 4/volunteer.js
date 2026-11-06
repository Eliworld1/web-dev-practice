// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");


const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");


const form = document.querySelector("#volunteerForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const fullName = nameInput.value;
    const email = emailInput.value;
    const interest = interestSelect.value;
    const result = document.querySelector("#result");


    if (fullName === "" || email === "") {
        result.textContent = "Please enter your full name and email address.";
    } else {
        result.textContent = "Thank you, " + fullName + "! Your interest in " + interest + " has been received.";
    }
});

