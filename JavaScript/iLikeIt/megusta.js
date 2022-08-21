
var likes = [3];
var p = [document.querySelector("#aumentar")];


function liked(id) {
    likes[id]++;
    p[id].innerHTML = likes[id] +" "+ "like(s)";
}
