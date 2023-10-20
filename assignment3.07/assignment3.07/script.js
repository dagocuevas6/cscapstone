var p = document.querySelector("#button");

p.innerHTML = "Submit";
p.style.background = "blue";
p.style.color = "red";
p.style.textAlign = "center";

function changeBackground()
{
    this.style.background = "green";
    if (p.style.background = "green"){
        p.innerHTML = "Congrats"
        p.style.color = "white"
    }
}

p.onclick = changeBackground;