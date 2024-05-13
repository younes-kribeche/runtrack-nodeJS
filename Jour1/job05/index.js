const path = require('node:path');

const chemin = '\\runtrack-nodeJS\\Jour1\\job05\\index.js';

const infoFichier = path.parse(chemin);
const nomFichier = infoFichier.base; // Nom du fichier avec l'extension
const extension = infoFichier.ext; // Extension du fichier
const cheminAcces = infoFichier.dir; // Chemin d'accès du fichier

console.log('Nom du fichier :', nomFichier);
console.log('Extension du fichier :', extension);
console.log('Répertoire parent du fichier :', cheminAcces);
