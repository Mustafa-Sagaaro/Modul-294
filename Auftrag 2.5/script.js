document.querySelector("#Album1name").innerHTML = "Neuer Album - Name";

document.querySelector("#tracks1 li:first-child").innerHTML = "1. Neuer Song Name (3:11)";

document.querySelector("#tracks1 > :nth-child(2)").remove();

document.querySelector("#album1").remove();

document.getElementsByTagNameAll("h1")[0].style.color = "red"