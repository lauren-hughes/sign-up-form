const passwordDiv = document.querySelector(".error");
const passwordInputs = passwordDiv.querySelectorAll("input");

passwordInputs.forEach(input => input.addEventListener("input", () => {
    if (passwordInputs[0].value === passwordInputs[1].value && passwordInputs[0].value !== "") {
        passwordDiv.classList.remove("error");
    }
    // This adds the error class back if the user makes the passwords mismatch again or if they delete the passwords completely
    else  {
        passwordDiv.classList.add("error");
    }
}));