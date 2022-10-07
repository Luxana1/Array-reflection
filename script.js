
// email validate function
var emailError = document.getElementById("email-error");
var imageError = document.getElementById("image-error");

function validateEmail( ) {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "*Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = "*Email must be valid";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}