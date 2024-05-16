const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/LaPLateforme';

async function connectToDatabase() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connexion à la base de données réussie.');
    } catch (error) {
        console.error('Connexion à la base de données échouée. Code erreur:', error);
    }
}

connectToDatabase();
