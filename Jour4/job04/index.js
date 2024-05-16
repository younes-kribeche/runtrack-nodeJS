const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/LaPLateforme';
mongoose.connect(url)
.then(() => {
    console.log('Connexion à la base de données réussie.');
    const Schema = mongoose.Schema;

    const YearSchema = new Schema({
        year: {type: String, required: true}
    }, { versionKey: false })

    const Year = mongoose.model('Year', YearSchema, 'year');
    const yearData = [
        { year: "Bachelor 1" },
        { year: "Bachelor 2" },
        { year: "Bachelor 3" }
    ]

    return(Year.insertMany(yearData));
})
.then((insertedYears) => {
    console.log(`Cursus ajoutés : ${insertedYears}`);
})
.catch((error) => {
    console.error(`Une erreur est survenue : ${error}`);
})