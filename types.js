'use strict';
console.log('types.js file loaded');

// pagrindiniai primityvus tipai

// 1. number

let n1 = 5;
let n2 = 10.8;
// typeof - grazina reiksmes tipa
console.log('n1 tipas yra', typeof n1);
console.log('n2 tipas yra', typeof n2);

// 2. String, tekstas

let s1 = 'Labas';
console.log('s1 tipas yra', typeof s1);

// 3. Logine reiksme, Boolean - true|false;

let isUserLoggedIn = false;
let todayIsMonday = true;
console.log('isUserLoggedIn tipas yra', typeof isUserLoggedIn);

// 4. null ir undefined

let u1;
console.log('u1 tipas yra', typeof u1);
console.log('u1 reiksme yra', u1);

u1 = 'james';
console.log('u1 tipas yra', typeof u1);
console.log('u1 reiksme yra', u1);

u1 = null;
console.log('u1 tipas yra', typeof u1);
console.log('u1 reiksme yra', u1);
