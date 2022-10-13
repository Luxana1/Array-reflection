
// email validate function
var emailError = document.getElementById("email-error");
var imageError = document.getElementById("image-error");
var submitError = document.getElementById("result");

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

function validateSubmit() {
    if (validateEmail()) {
        return true;
    }
    return false;
}

// display random image function
const randomImage = new Array();
randomImage[0] = "https://picsum.photos/200/300";
randomImage[1] = "https://picsum.photos/200";
randomImage[2] = "https://picsum.photos/seed/picsum/200/300";
randomImage[3] = "https://picsum.photos/200/300?grayscale";

for (var i = 0; i < randomImage.length; i++) {
    var random = Math.floor(Math.random() * randomImage.length);
    document.getElementById("random-image").src = randomImage[random];
}

// function that change image when click on the button 
function changeRandomImage() {
    var random = Math.floor(Math.random() * randomImage.length);
    document.getElementById("random-image").src = randomImage[random];
}
