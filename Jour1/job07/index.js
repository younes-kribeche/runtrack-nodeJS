const { Console } = require("console");
const path = require('node:path');
const fs = require('node:fs/promises')

async function lookAtData(){
  try{
    const directory = await fs.readFile('data.txt', 'utf-8');
    console.log('Contenu du fichier data.txt:', directory)
  }
  catch (error){
  console.error('Erreur lors de la lecture du fichier:', error);
  }
};

lookAtData();