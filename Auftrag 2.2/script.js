

const namen = ["Franz", "Jenny", "Karen", "Joseph", "Richard", "Florenze"];


console.log(namen.join(", ").replace(/,(?=[^,]*$)/, " und"));


const sortierteNamen = namen.sort();


const grossgeschriebeneNamen = namen.map(name => name.toUpperCase());


const verschluesselteNamen = namen.map(name =>
  [...name].map(char => {
    const code = char.charCodeAt(0);
    const verschluesselterCode = code >= 65 && code <= 90 ? ((code - 65 + 13) % 26) + 65 : code >= 97 && code <= 122 ? ((code - 97 + 13) % 26) + 97 : code;
    return String.fromCharCode(verschluesselterCode);
  }).join("")
);


const anfangsbuchstaben = namen.reduce((result, name) => {
  const anfangsbuchstabe = name[0].toUpperCase();
  result[anfangsbuchstabe] = (result[anfangsbuchstabe] || 0) + 1;
  return result;
}, {});

console.log(sortierteNamen);
console.log(grossgeschriebeneNamen);
console.log(verschluesselteNamen);
console.log(anfangsbuchstaben);
