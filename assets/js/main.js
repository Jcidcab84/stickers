var foto = document.getElementById("foto");

foto.onclick = function() {
if (foto.style.border === "2px solid red") {
foto.style.border = "none";
} else {
foto.style.border = "2px solid red";
}
};

