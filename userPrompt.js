'use strict';
console.log('userPrompt.js file loaded');

// galima gauti vartotojo reikme su prompt()

// let kelintadienis = prompt('kelintadienis siandien?');

// console.log('vartotojas ivede: ', kelintadienis);

let sk1 = prompt('pirmas sk');
let sk2 = prompt('antras sk');

let daugyba = sk1 * sk2;

let info = `${sk1} padaugintas is ${sk2} yra lygu ${daugyba}`;

console.log(info);

document.getElementById('title').textContent = info;
