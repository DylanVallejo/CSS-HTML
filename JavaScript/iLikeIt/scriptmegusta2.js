var likes = [3, 15, 19];
var p = [
    document.querySelector("#aumentar-1"),
    document.querySelector("#aumentar-2"),
    document.querySelector("#aumentar-3")
];

function liked(id) {
    likes[id]++;
    p[id].innerHTML = likes[id] +" "+ "like(s)";
}