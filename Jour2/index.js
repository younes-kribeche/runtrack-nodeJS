const fs = require('node:fs/promises');
const jsonData = require("./data.json");

const tasks = jsonData.tasks;
const userData = "test";

// async function writeNewTask() {
//   try {
//     // Ajouter la nouvelle donnée à la liste des tâches
//     tasks.push(userData);

//     // Convertir l'objet JSON mis à jour en chaîne JSON
//     const jsonString = JSON.stringify(jsonData, null, 2); // Indentation pour une meilleure lisibilité (2 espaces)

//     // Écrire la chaîne JSON dans le fichier
//     await fs.writeFile('data.json', jsonString);
//     console.log('Données écrites avec succès dans le fichier.');
//   } catch (error) {
//     console.error('Erreur lors de l\'écriture dans le fichier :', error);
//   }
// };

// writeNewTask();

async function eraseTaskById(taskId) {
  try {
    // Lire le contenu du fichier JSON
    const data = await fs.readFile('data.json', 'utf-8');
    // Parser le JSON en tant qu'objet JavaScript
    let tasks = JSON.parse(data);

    console.log('Contenu du fichier JSON :');
    console.log(jsonData.tasks); // Ajout de cette ligne pour afficher le contenu du fichier JSON


    // Rechercher l'index de la tâche avec l'ID spécifié
    const index = tasks.findIndex(task => task.id === taskId); // Correction ici

    // Vérifier si l'ID de la tâche existe dans le tableau
    if (index !== -1) {
      // Supprimer la tâche à l'index trouvé
      tasks.tasks.splice(index, 1); // Correction ici
    } else {
      console.log('Aucune tâche trouvée avec cet ID.');
      return;
    }

    console.log('Après suppression :');
    console.log(tasks);

    // Convertir l'objet JSON mis à jour en chaîne JSON
    const jsonString = JSON.stringify(tasks, null, 2); // Convertir uniquement les tâches en JSON

    // Écrire la chaîne JSON dans le fichier
    await fs.writeFile('data.json', jsonString);

    console.log('Tâche avec l\'ID ' + taskId + ' supprimée avec succès dans le fichier.');
  } catch (error) {
    console.error('Erreur lors de l\'écriture dans le fichier :', error);
  }
}

eraseTaskById('1');








