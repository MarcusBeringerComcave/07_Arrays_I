"use strict";

/* Die Satzbau-Maschine | Arrays */

/** 02. Theorie : Array   */

// let arr;
// // arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,7,11,4]; // 4 Elemnete
// arr = [false,true,false];
// arr = ["Ich","bin","coole","Max","Mütze"];

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); // Index 0 (1.Position im Arry)
// output([3]); // letzte Position /konkret
// output(arr[arr.lenght-1]); //allgemein

// ()> Parameter, Tests
// {}> Codeblöcke
// []> Arrays, Index

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//output(getSentence("Ich","bin","coole","Max","Mütze"));
// output(getSentence("Ich","bin","der","coole","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// more of the same (DRY >>Dont repeat Yourself)<<<<
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP   = " ";
    const PUNCT = ".";
    let str     =   word1 + GAP +
                    word2 + GAP +
                    word3 + GAP +
                    word4 + GAP +
                    word5 + GAP +
                    word6 +
                    PUNCT;

    return str;
}

//** 01a. Funktionalität mit Array 1** */
// Kritik | Überlegung
// word1,word2,...wordN :: Semantische Struktur
// arr[0],etc.... arr[n] :: Numerische Struktur (0,1,2,3,4...n)
// -->> Transformation semantsiches Problem -->> numerisches Problem
output(getSentenceArr(["Ich","bin","coole","Max","Mütze"]))
function getSentenceArr(arr) {
    const GAP   = " ";
    const PUNCT = ".";
     let str     =  arr[0] + GAB +
                    arr[1] + GAB +
                    arr[2] + GAB +
                    arr[3] + GAB +
                    arr[4] + GAB +
                    arr[5] + 
                    punct;
    
    return str;
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


