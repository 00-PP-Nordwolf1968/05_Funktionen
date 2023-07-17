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

// ausgabeNamen();

// function ausgabeNamen() {
    
//     let firstName = "Corinna";
// console.log("Hallo " + firstName + "!");
// }

// console.log(firstName);     // Fehler --> SCOPE! ausserhalb der function ist die variable nicht zugängig

// 2b Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter

// ausgabeNamen2("Micha");       // call + Argument(e)
// ausgabeNamen2("Dennis");
// ausgabeNamen2("Andrea");

// Funktion mit Parameter(n)
function ausgabeNamen2(firstName) {
    console.log("Hallo " + firstName + "!");    // diese Funktion wird nicht mehr verändert, bleibt gekapselt
}

/***** Funktionen 02c *****/

// 2c. Mehrere Parameter / Argumente

ausgabeNamenParams("Joerg", "Olsen");
ausgabeNamenParams(prompt("Vorname?"), prompt("Name?"));

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!"); 

}