function informe(){
    document.getElementById.city = alert("cargando informe meteorologico")
}

function erase(){
    var eliminar = document.getElementById("delete-cookie")
    eliminar.remove()
}

// calcular grados
function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}


//calculating the temperature using two callback functions
function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#transformar" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal)+"°C";
        } else {
            tempSpan.innerText = c2f(tempVal)+"°F";
        }
    }
}


