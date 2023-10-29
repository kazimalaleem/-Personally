document.getElementById("btn").addEventListener("click", click);
// Infor Input First Name

document.getElementById("btn").addEventListener("click", close);

// Infor Input Number

document.getElementById("btn").addEventListener("click", decodeURI);

// Infor Input Emali Name

document.getElementById("btn").addEventListener("click", onabort);

// Infor Input Email

document.getElementById("btn").addEventListener("click", onafterprint);

function click() {
    let inputtext = document.getElementById("text");
    if (!text.value == "") {
        document.getElementById("error-msg").innerHTML = "";
        text.style.outline = "1px solid #98a2b3"

    } else {
        document.getElementById("error-msg").innerHTML = "User Name cannot be empty"
        text.style.outline = "1px solid red"
    }
}
function decodeURI() {
    let inputtext = document.getElementById("number");
    if (!number.value == "") {
        document.getElementById("number-error").innerHTML = "";
        number.style.outline = "1px solid #98a2b3"

    } else {
        document.getElementById("number-error").innerHTML = "User Name cannot be empty"
        number.style.outline = "1px solid red"
    }
}

function close() {
    let inputEmail = document.getElementById("email");
    if (!email.value == "") {
        document.getElementById("error-message").innerHTML = "";
        email.style.outline = "1px solid #98a2b3"

    } else {
        document.getElementById("error-message").innerHTML = " Emali cannot be empty"
        email.style.outline = "1px solid red"
    }
}

function onabort() {
    let inputNumber = document.getElementById("password");
    if (!password.value == "") {
        document.getElementById("massage-error").innerHTML = "";
        password.style.outline = "1px solid #98a2b3"

    } else {
        document.getElementById("massage-error").innerHTML = " Password cannot be empty"
        password.style.outline = "1px solid red"
    }
}

function onafterprint() {
    let inputDate = document.getElementById("date");
    if (!date.value == "") {
        document.getElementById("find-msg").innerHTML = "";
        date.style.outline = "1px solid #98a2b3"

    } else {
        document.getElementById("find-msg").innerHTML = " Date cannot be empty"
        date.style.outline = "1px solid red"
    }
}