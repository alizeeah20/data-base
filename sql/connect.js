const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database');
    }
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER NOT NULL)`, () => {
        console.log("Table 'students' created");
    });
    });

    let students = [
        {name: "Alizée Ah-Laye", age:13},
        { name: "Anais Laurent", age: 20 },
        { name: "Jade Milio", age: 14 },
    ];
    students.forEach(student => {
        db.run(`INSERT INTO students (name, age) VALUES (?, ?)`, [student.name, student.age], (err) => {
            if (err) {
                console.error('Error inserting $(student.name):' , err.message);
                } else {
                    console.log(`Inserted ${student.name} into 'students' table`);
            }
    });
});

let updatedName = 'Jade Milio';
let newAge = 14;
db.run(`UPDATE students SET age = ? WHERE name = ?`, [newAge, updatedName], function (err) {
    if (err) {
        console.error(`Error updating ${updatedName}:`, err.meassage);
    } else {
        console.log(`Updated ${updatedName}'s age to ${ newAge }.`);
    }
});

let deleteName = 'Jade Milio';
db.run(`DELETE FROM students WHERE name = ?`, [deleteName], function (err) {
    if (err) {
        console.error(`Error deleting ${deleteName}:`, err.message);
    } else {
        console.log(`Deleted ${deleteName} from 'students' table.`);
    }
});