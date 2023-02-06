'use strict';
// ijungia kai kurias pagal nutylejima nerodomas klaidas ir sugriestina sintakse
console.log('main.js file loaded');

// eilute kuri meta klaida
// console.log(document.getElementById('title').textContent);

// Kintamieji

// var x = 5; // sena sintakse, mes nenaudosim

// sakinys
// skelbiam(deklaruojam) kad turesim kintmaji ir ji uzpildom su penketu
// let kintamas kintamasis - jo reiksme galim pakeisti po paskelbimo
let x = 5;

// const kintasis kurio reiksme nesikeis.
const y = 45;

// perrasom x reiksme i 15
x = 15;
// bandom perrasyti konstatos reiksme
// y = 105;

// string(text) tipo tipo kintamasis

let hiText = 'Hello i am string type variable text';

console.log(x);
console.log(y);
console.log(hiText);

// fun task
// document.getElementById('title').textContent - gauna h1 teksta
// pakeisti h1 teksta i hiText
document.getElementById('title').textContent = hiText;

// undefined

let reiskme;
console.log(reiskme); // undefined
reiskme = 'jau dabar yra';
console.log(reiskme); // 'jau dabar yra'

// let hiText = 54; // negalima redeklaruoti kintamuju pavadinumu

// document.getElementById('app').textContent = '<h2>helooo</h2>';
document.getElementById('app').innerHTML = '<h2>helooo</h2>';
