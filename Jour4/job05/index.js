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

    const studentSchema = new Schema({
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        students_number: {type: Number, required: true},
    }, { versionKey: false })

    const Student = mongoose.model('Student', studentSchema, 'student');
    const studentData = [
        {
            first_name: "Bob",
            last_name: "Lebricoleur",
            students_number: 1,
        },
        {
            first_name: "John",
            last_name: "Doe",
            students_number: 2,
        },
        {
            first_name: "Marine",
            last_name: "Dupont",
            students_number: 3,
        }
    ]

    return(Student.insertMany(studentData));
})
.then((insertedStudents) => {
    console.log(`Étudiants ajoutés : ${insertedStudents}`);
})
.catch((error) => {
    console.error(`Une erreur est survenue : ${error}`);
})