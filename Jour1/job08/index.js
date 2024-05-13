const { Console } = require("console");
const path = require('node:path');
const fs = require('node:fs/promises')

async function lookAtData(){
  try{
    const directory = await fs.readFile('data.txt', 'utf-8');
    let everySecondLetter = '';
    for(let i = 0; i < directory.length; i += 2) {
      everySecondLetter += directory[i];
    }
    console.log('Une lettre sur deux du fichier data.txt:', everySecondLetter);
  }
  catch (error){
    console.error('Erreur lors de la lecture du fichier:', error);
  }
};

lookAtData();
