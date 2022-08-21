
// CAMBIAR NOMBRE
let nameUser = "Jane Doe";
let nameUser2 ="Try Again";

function functionnickname(innerHTML){
    if(innerHTML === nameUser){
        document.querySelector("#cambio").innerHTML = nameUser2;
    }else if(innerHTML === nameUser2){
        document.querySelector("#cambio").innerHTML = nameUser;
    }
}

//  REMOVER REQUEST LIST     request-1 request-2


let numberConnections = 2;
let totalConnections = 500; 
console.log(numberConnections);
console.log(totalConnections);



function sumTotalConnections1(){
    numberConnections--;
    totalConnections++;
    document.querySelector("#numberofconnection").innerHTML = numberConnections;
    document.querySelector("#totalconnections").innerHTML = totalConnections ;
    document.querySelector("#request-1").innerHTML = "";
    
}

function substractTotalConnections1( ){
    numberConnections--;
    document.querySelector("#numberofconnection").innerHTML = numberConnections;
    document.querySelector(" #request-1").innerHTML = "";

}

function sumTotalConnections2(){
    numberConnections--;
    totalConnections++;
    document.querySelector("#numberofconnection").innerHTML = numberConnections;
    document.querySelector("#totalconnections").innerHTML = totalConnections ;
    document.querySelector("#request-2").innerHTML = "";
}

function substractTotalConnections2( ){
    numberConnections--;
    document.querySelector("#numberofconnection").innerHTML = numberConnections;
    document.querySelector(" #request-2").innerHTML = "";

}
