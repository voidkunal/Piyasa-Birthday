

let icon = document.querySelector(".icon");
let ul = document.querySelector("nav ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");
    if (ul.classList.contains("showData")) {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
});



