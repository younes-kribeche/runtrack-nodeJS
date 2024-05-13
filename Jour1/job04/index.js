const fs = require('node:fs/promises');

async function listDirectory() {
  try {
    const directory = await fs.readdir('C:\\Users\\youne\\Desktop\\Formation La Plateforme\\Projets\\Node JS\\runtrack-nodeJS\\Jour1');
    console.log('Contenu du repertoire courant :', directory);
  } catch (error){
    console.error('Une erreur a eu lieu:', error);
  }
}

listDirectory();


