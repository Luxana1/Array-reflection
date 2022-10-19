// buttons variables
var getBtn = document.getElementById("get-btn");
var submitBtn = document.getElementById("submit-btn");
// email validate variables
var emailError = document.getElementById("email-error");
var imageError = document.getElementById("image-error");
var submitError = document.getElementById("result");
var input = document.querySelector('input');
var validEmail = false;
var picsumURL = "https://picsum.photos/v2/list?page="
var users = {};
var user = [];

var getData =() => {
    var randomImage = Math.floor(Math.random() * (10) + 1)
    axios.get(`${picsumURL}${randomImage}&limit=100`)
    .then(response => {
        let pic = response.data[`${randomImage}`]["download_url"];
        document.getElementById("random-image").innerHTML = `<img id="main" src="${pic}" alt="random image">`;
    });
};

window.onload = getData();

var getemail = (e) => {
    e.preventDefault();
    var randomImage = Math.floor(Math.random() * (10) + 1)
    axios.get(`${picsumURL}${randomImage}&limit=100`)
        .then(response => {
            let email = document.getElementById("contact-email").value;
            let pic = response.data[`${randomImage}`]["download_url"];
            if (validateEmail() === false) {
                return false;
            } else {
                if (email in users) {
                    users[email].push(pic);
                } else {
                    users = { ...users, [email]: [pic] };
                }

                console.log(users);
                for (var i = 0; i < users[email].length; i++) {
                    document.getElementById("submissions").innerHTML = `<h3 id=hide> ${JSON.stringify(email)} </h3>`;
                    document.getElementById("random-image").innerHTML = `<img id="main" src=${pic}/>`;
                    for (var j = 0; j < users[email].length; j++) {
                        
                        let userCollection = "";

                        for (email in users) {
                            let emailToAdd = `<h3 id=new> ${JSON.stringify(email)} </h3>`;
                            let imgsToAdd = "";

                            for (var j = 0; j < users[email].length; j++) {
                                let imageToAdd = `<img id="card" src=${users[email][j]} />`;
                                imgsToAdd += imageToAdd;
                            }
                            userCollection += `${emailToAdd} ${imgsToAdd}`;
                    }
                    document.getElementById("submissions").innerHTML += userCollection;
                }
            };
        }
    });
};

function changePic(div) {
    document.getElementById(div).src = "https://picsum.photos/200/300";
}

getBtn.addEventListener("click", getData);
submitBtn.addEventListener("click", getemail);


// validate email function
function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        emailError.innerHTML = "*Email is required";
        return validEmail = false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = "*Email must be valid";
        return validEmail = false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return validEmail = true;
}

// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "https://picsum.photos/200/300");
//   req.send();
