const { Console } = require("console");
const path = require('node:path');
const fs = require('node:fs/promises')

const data = "Je manipule les fichiers avec un module node !"

async function lookAtData(){
  try{
    await fs.writeFile('data.txt', 'utf-8');
    console.log(data)
  }
  catch (error){
  console.error('Erreur lors de la lecture du fichier:', error);
  }
};

lookAtData();