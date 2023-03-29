let mybtn = document.getElementById("btn");
mybtn.onclick = function () {
    document.body.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
}