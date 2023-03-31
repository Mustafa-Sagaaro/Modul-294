const name = prompt("Wie ist dein Name?");

const currentTime = new Date();
const currentHour = currentTime.getHours();

let greeting;

if (currentHour < 5 || currentHour >= 22) {
  greeting = "Gute Nacht";
} else if (currentHour < 12) {
  greeting = "Guten Morgen";
} else if (currentHour < 18) {
  greeting = "Guten Tag";
} else {
  greeting = "Guten Abend";
}

alert(`${greeting}, ${name}!`);



let element = document.querySelector("#text");

element.innerHTML = `willkommen ${name}`;