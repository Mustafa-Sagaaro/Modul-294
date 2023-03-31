# Markdown Merkblatt für JavaScript Grundlagen

## Variablen und Datentypen

### Variablen

Eine Variable ist ein Container, der einen Wert speichern kann. Variablen werden in JavaScript mit dem Schlüsselwort `let` oder `const` deklariert. Der Unterschied zwischen `let` und `const` besteht darin, dass `let`-Variablen neu zugewiesen werden können, während `const`-Variablen einmalig zugewiesen werden.

Beispiel:

```javascript
let x = 5; // Eine Variable mit dem Namen "x" wird erstellt und mit dem Wert 5 initialisiert.
const y = 10; // Eine konstante Variable mit dem Namen "y" wird erstellt und mit dem Wert 10 initialisiert.
```
## Datentypen (nur bis und mit "undefined")
Die Datentypen in JavaScript sind:

```javascript
`number`: Zahlen
`string`: Zeichenketten
`boolean`: Wahrheitswerte (true oder false)
`null`: kein Wert
`undefined`: eine Variable, die nicht definiert ist

Beispiel:
`
let numberVariable = 123;
let stringVariable = "Hallo Welt!";
let booleanVariable = true;
let nullVariable = null;
let undefinedVariable;
`
```
## Typumwandlung
In JavaScript kann ein Datentyp in einen anderen umgewandelt werden. Dies wird als Typumwandlung bezeichnet.

Beispiel:
```javascript
let x = "5"; // Ein String
let y = +x; // Konvertierung des Strings in eine Zahl
console.log(typeof y); // Ausgabe: "number"
```

#Vergleiche und Verzweigungen
##Vergleiche

Vergleiche können in JavaScript mit den Operatoren ==, ===, <, >, <= und >= durchgeführt werden.

Beispiel:

### Schlaufen (Fortsetzung)

```javascript

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

for (let j = 0; j < 5; j++) {
  console.log(j);
}

```

### Funktionen

Funktionen werden in JavaScript mit dem Schlüsselwort `function` definiert. Funktionen können Argumente entgegennehmen und Rückgabewerte liefern.

```javascript
function addiere(x, y) {
  return x + y;
}

let summe = addiere(2, 3);
console.log(summe); // Ausgabe: 5

```

## Spezielle Funktionen
Es gibt einige spezielle Funktionen in JavaScript, die häufig verwendet werden.

#### parseInt
Die parseInt-Funktion wird verwendet, um eine Zeichenkette in eine Ganzzahl umzuwandeln.

Beispiel:
```javascript
let zahlAlsString = "3.14";
let zahlAlsZahl = parseFloat(zahlAlsString);
console.log(zahlAlsZahl); // Ausgabe: 3.14
```

#### parseFloat
Die parseFloat-Funktion wird verwendet, um eine Zeichenkette in eine Gleitkommazahl umzuwandeln.

Beispiel:

```javascript
let zahlAlsString = "3.14";
let zahlAlsZahl = parseFloat(zahlAlsString);
console.log(zahlAlsZahl); // Ausgabe: 3.14
```

##### isNaN
Die isNaN-Funktion wird verwendet, um zu überprüfen, ob ein Wert keine gültige Zahl ist.

Beispiel:

```javascript

let x = "hallo";
console.log(isNaN(x)); // Ausgabe: true

```

### Aufgaben

Um sich auf die Prüfung vorzubereiten, sollten Sie die folgenden Aufgaben lösen:

Schreiben Sie eine Funktion, die die Summe von zwei Zahlen berechnet.

Beispiel:

```Javascript
function addiere(x, y) {
  return x + y;
}

let summe = addiere(2, 3);
console.log(summe); // Ausgabe: 5

Schreiben Sie eine Funktion, die prüft, ob eine Zahl gerade oder ungerade ist.

Beispiel:


function istGerade(zahl) {
  if (zahl % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(istGerade(4)); // Ausgabe: true
console.log(istGerade(3)); // Ausgabe: false


Schreiben Sie eine Funktion, die das größte Element in einem Array von Zahlen zurückgibt.

Beispiel:


function groesstesElement(zahlenArray) {
  let groessteZahl = zahlenArray[0];
  for (let i = 1; i < zahlenArray.length; i++) {
    if (zahlenArray[i] > groessteZahl) {
      groessteZahl = zahlenArray[i];
    }
  }
  return groessteZahl;
}

let zahlen = [3, 7, 2, 10, 5];
console.log(groesstesElement(zahlen)); // Ausgabe: 10

Schreiben Sie eine Funktion, die prüft, ob ein String ein Palindrom ist.

Beispiel:  

function istPalindrom(text) {
  let umgedrehterText = text.split("").reverse().join("");
  if (text === umgedrehterText) {
    return true;
  } else {
    return false;
  }
}

console.log(istPalindrom("anna")); // Ausgabe: true
console.log(istPalindrom("hallo")); // Ausgabe: false
