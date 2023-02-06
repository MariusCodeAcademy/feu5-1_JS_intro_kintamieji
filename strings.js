'use strict';
console.log('strings.js file loaded');

let username = 'Mike';
let town = 'London';
let age = 33;

// sukurti kintamaji sakinys kuris sakytu
// "As esu James is London. Man yra 50 metu."
// string concatination budas
let sakinys =
  'As esu ' + username + ' is ' + town + '. Man yra ' + age + ' metu.';

// template litterals - su backtics
let sakinysTemplate = `As esu ${username} is ${town}. Man yra ${age} metu.`;

console.log(sakinys);
console.log(sakinysTemplate);
