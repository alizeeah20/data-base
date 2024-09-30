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
        name TEXT NOT null,
        age INTEGER NOT NULL)`
     , () => {
        console.log("Table 'students' created");
    });
    });

    let students = [
        {name: "Alizée Ah-Laye", age:13},
        { name: "Anais Laurent", age: 15 },
        { name: "Jade Milio", age: 14 },
    ];