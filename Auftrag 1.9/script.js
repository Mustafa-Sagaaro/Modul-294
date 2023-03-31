let num = prompt("Geben Sie bitte eine Zahl ein:");
num = parseInt(num);
if (isNaN(num)) {
  console.error("Das ist keine gültige Zahl!");
} else {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}