'use strict';
console.log('practice.js is loaded');

// 1. susikurti kintamuosius vardas, salis, megstamiausiasSkaicius, megstamiausia savaites diena (skaiciais 1-7)
let vardas = 'James';
let salis = 'England';
let megstamiausiasSkaicius = 700;
let megstamiausiaDiena = 6;

// 2. isvedam i konsole visus savo kintamiuosiu atskirai
console.log(vardas);
console.log(salis);
console.log(megstamiausiasSkaicius);
console.log(megstamiausiaDiena);

// 3. atspausdinam konsoleje savo megstamiausio skaiciaus ir dienos daugyba
let skDaugyba = megstamiausiasSkaicius * megstamiausiaDiena;
console.log('megstamiausio skaiciaus ir dienos daugyba', skDaugyba);

// 4. "as esu John. noreciau keliausi i Jamaika. Mano megstamiausias skaicius yra 777"

let sakinys = `as esu ${vardas}. noreciau keliausi i ${salis}. Mano megstamiausias skaicius yra ${megstamiausiasSkaicius}`;
console.log('4 pratimas', sakinys);

// 6. apskaiciuoti ju vidurki ir priskirti kintamajam avg.
let sk1 = 5;
let sk2 = 10;
let sk3 = 4;
let sk4 = 7;
let sk5 = 8;

let avg = (sk1 + sk2 + sk3 + sk4 + sk5) / 5;

let avgRounded = avg.toFixed(2);

console.log(`(${sk1} + ${sk2} + ${sk3} + ${sk4} + ${sk5}) / 5 ===`, avgRounded);
