const { Console } = require("console");
const fs = require('fs');


const directory = fs.readFileSync('data.txt', 'utf-8');
console.log('Contenu du fichier data.txt:', directory);
 

