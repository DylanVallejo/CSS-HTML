
function login(login) {
    if(login.innerText == "Login") {
        login.innerText = "Logout";
    } else {
        login.innerText = "Login";
    }
}

function hide(element) {
    element.remove();
}