"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken



// Funktionsrumpf (bosy); callee
// Funktionsdeklaration

// function test()
// {
//    console.log("Hallo Ingo");
// }

// Funktionsaufruf (call)
// test();

/***** Funktionen 02a  *****/
// 2a Parametrisierung + Datenübergabe von INNEN

ausgabeNamen();

function ausgabeNamen() {
    
    let firstName = "Corinna";
console.log("Hallo " + firstName + "!");
}

// console.log(firstName);     // Fehler --> SCOPE! ausserhalb der function ist die variable nicht zugängig
